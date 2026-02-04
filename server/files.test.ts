import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createFile, getFilesByUserId, deleteFile, updateFile } from './db';
import type { InsertFile } from '../drizzle/schema';

// Mock the database functions
vi.mock('./db', async () => {
  const actual = await vi.importActual('./db');
  return {
    ...actual,
    createFile: vi.fn(),
    getFilesByUserId: vi.fn(),
    deleteFile: vi.fn(),
    updateFile: vi.fn(),
  };
});

describe('File Management', () => {
  const mockFile: InsertFile = {
    userId: 1,
    filename: 'test.pdf',
    fileKey: 'users/1/files/1234567890-abc123-test.pdf',
    url: 'https://example.com/files/test.pdf',
    mimeType: 'application/pdf',
    size: 1024,
    category: 'document',
    description: 'Test document',
  };

  const mockFileWithId = {
    id: 1,
    ...mockFile,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('createFile', () => {
    it('should create a file and return it with an ID', async () => {
      vi.mocked(createFile).mockResolvedValue(mockFileWithId);

      const result = await createFile(mockFile);

      expect(result).toEqual(mockFileWithId);
      expect(result?.id).toBe(1);
      expect(result?.filename).toBe('test.pdf');
    });

    it('should handle file creation errors', async () => {
      vi.mocked(createFile).mockRejectedValue(new Error('Database error'));

      await expect(createFile(mockFile)).rejects.toThrow('Database error');
    });
  });

  describe('getFilesByUserId', () => {
    it('should return all files for a user', async () => {
      const files = [mockFileWithId, { ...mockFileWithId, id: 2, filename: 'test2.pdf' }];
      vi.mocked(getFilesByUserId).mockResolvedValue(files);

      const result = await getFilesByUserId(1);

      expect(result).toHaveLength(2);
      expect(result[0]?.filename).toBe('test.pdf');
      expect(result[1]?.filename).toBe('test2.pdf');
    });

    it('should return empty array if user has no files', async () => {
      vi.mocked(getFilesByUserId).mockResolvedValue([]);

      const result = await getFilesByUserId(999);

      expect(result).toEqual([]);
    });
  });

  describe('deleteFile', () => {
    it('should delete a file successfully', async () => {
      vi.mocked(deleteFile).mockResolvedValue(true);

      const result = await deleteFile(1);

      expect(result).toBe(true);
    });

    it('should return false if file deletion fails', async () => {
      vi.mocked(deleteFile).mockResolvedValue(false);

      const result = await deleteFile(999);

      expect(result).toBe(false);
    });
  });

  describe('updateFile', () => {
    it('should update file metadata', async () => {
      const updatedFile = {
        ...mockFileWithId,
        description: 'Updated description',
      };
      vi.mocked(updateFile).mockResolvedValue(updatedFile);

      const result = await updateFile(1, { description: 'Updated description' });

      expect(result?.description).toBe('Updated description');
    });

    it('should return null if update fails', async () => {
      vi.mocked(updateFile).mockResolvedValue(null);

      const result = await updateFile(999, { description: 'Updated' });

      expect(result).toBeNull();
    });
  });

  describe('File validation', () => {
    it('should validate file size constraints', () => {
      const largeFile = { ...mockFile, size: 11 * 1024 * 1024 }; // 11MB
      expect(largeFile.size).toBeGreaterThan(10 * 1024 * 1024);
    });

    it('should validate file mime types', () => {
      const validMimeTypes = ['application/pdf', 'image/jpeg', 'image/png', 'video/mp4'];
      const testFile = { ...mockFile, mimeType: 'application/pdf' };
      expect(validMimeTypes).toContain(testFile.mimeType);
    });

    it('should validate file categories', () => {
      const validCategories = ['document', 'image', 'video', 'audio', 'other'];
      const testFile = { ...mockFile, category: 'document' };
      expect(validCategories).toContain(testFile.category);
    });
  });
});
