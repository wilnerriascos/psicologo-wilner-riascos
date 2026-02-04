import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { storagePut } from "./storage";
import { createFile, getFilesByUserId, deleteFile, updateFile } from "./db";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    // Upload a file to S3 and save metadata to database
    upload: protectedProcedure
      .input(
        z.object({
          filename: z.string().min(1),
          fileData: z.string(), // base64 encoded file data
          mimeType: z.string(),
          category: z.string().optional(),
          description: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          // Decode base64 file data
          const buffer = Buffer.from(input.fileData, "base64");
          const size = buffer.length;

          // Generate unique file key
          const timestamp = Date.now();
          const randomSuffix = Math.random().toString(36).substring(2, 8);
          const fileKey = `users/${ctx.user.id}/files/${timestamp}-${randomSuffix}-${input.filename}`;

          // Upload to S3
          const { url } = await storagePut(fileKey, buffer, input.mimeType);

          // Save metadata to database
          const file = await createFile({
            userId: ctx.user.id,
            filename: input.filename,
            fileKey,
            url,
            mimeType: input.mimeType,
            size,
            category: input.category || "document",
            description: input.description,
          });

          return {
            success: true,
            file,
            message: "Archivo subido exitosamente",
          };
        } catch (error) {
          console.error("[Files] Upload failed:", error);
          throw new Error("Error al subir el archivo");
        }
      }),

    // List all files for the current user
    list: protectedProcedure.query(async ({ ctx }) => {
      try {
        const userFiles = await getFilesByUserId(ctx.user.id);
        return {
          success: true,
          files: userFiles,
        };
      } catch (error) {
        console.error("[Files] List failed:", error);
        throw new Error("Error al obtener los archivos");
      }
    }),

    // Delete a file
    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        try {
          const success = await deleteFile(input.fileId);
          return {
            success,
            message: success ? "Archivo eliminado" : "Error al eliminar el archivo",
          };
        } catch (error) {
          console.error("[Files] Delete failed:", error);
          throw new Error("Error al eliminar el archivo");
        }
      }),

    // Update file metadata
    update: protectedProcedure
      .input(
        z.object({
          fileId: z.number(),
          description: z.string().optional(),
          category: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        try {
          const file = await updateFile(input.fileId, {
            description: input.description,
            category: input.category,
          });
          return {
            success: !!file,
            file,
            message: file ? "Archivo actualizado" : "Error al actualizar",
          };
        } catch (error) {
          console.error("[Files] Update failed:", error);
          throw new Error("Error al actualizar el archivo");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
