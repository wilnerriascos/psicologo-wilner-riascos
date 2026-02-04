import { useState, useRef } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Upload, Trash2, FileText, Download } from 'lucide-react';
import { toast } from 'sonner';

export default function FileManager() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('document');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // tRPC queries and mutations
  const { data: filesData, isLoading, refetch } = trpc.files.list.useQuery();
  const uploadMutation = trpc.files.upload.useMutation();
  const deleteMutation = trpc.files.delete.useMutation();

  const files = filesData?.files || [];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Limit file size to 10MB
      if (file.size > 10 * 1024 * 1024) {
        toast.error('El archivo es demasiado grande (máximo 10MB)');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('Por favor selecciona un archivo');
      return;
    }

    setIsUploading(true);
    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = (e.target?.result as string).split(',')[1];
        
        try {
          await uploadMutation.mutateAsync({
            filename: selectedFile.name,
            fileData: base64,
            mimeType: selectedFile.type,
            category,
            description: description || undefined,
          });

          toast.success('Archivo subido exitosamente');
          setSelectedFile(null);
          setDescription('');
          setCategory('document');
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
          refetch();
        } catch (error) {
          toast.error('Error al subir el archivo');
          console.error(error);
        } finally {
          setIsUploading(false);
        }
      };
      reader.readAsDataURL(selectedFile);
    } catch (error) {
      toast.error('Error al procesar el archivo');
      setIsUploading(false);
    }
  };

  const handleDelete = async (fileId: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este archivo?')) {
      try {
        await deleteMutation.mutateAsync({ fileId });
        toast.success('Archivo eliminado');
        refetch();
      } catch (error) {
        toast.error('Error al eliminar el archivo');
        console.error(error);
      }
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (date: Date | string): string => {
    return new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Subir Archivo</CardTitle>
          <CardDescription>Sube documentos, imágenes u otros archivos (máximo 10MB)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition">
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="hidden"
              accept="*/*"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center gap-2 w-full"
            >
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-600">
                {selectedFile ? selectedFile.name : 'Haz clic para seleccionar un archivo'}
              </span>
              {selectedFile && (
                <span className="text-xs text-gray-500">
                  {formatFileSize(selectedFile.size)}
                </span>
              )}
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Categoría</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="document">Documento</option>
                <option value="image">Imagen</option>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Descripción (opcional)</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe el contenido del archivo..."
                className="mt-1"
                rows={3}
              />
            </div>
          </div>

          <Button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="w-full"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Subiendo...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Subir Archivo
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Files List Section */}
      <Card>
        <CardHeader>
          <CardTitle>Mis Archivos</CardTitle>
          <CardDescription>Gestiona tus archivos almacenados</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            </div>
          ) : files.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No hay archivos aún. ¡Sube tu primer archivo!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:underline truncate"
                      >
                        {file.filename}
                      </a>
                    </div>
                    <div className="text-xs text-gray-500 mt-1 space-y-1">
                      <p>
                        {formatFileSize(file.size)} • {formatDate(file.createdAt)}
                      </p>
                      {file.description && (
                        <p className="text-gray-600 italic">{file.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                    <a
                      href={file.url}
                      download
                      className="p-2 text-gray-600 hover:text-blue-600 transition"
                      title="Descargar"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="p-2 text-gray-600 hover:text-red-600 transition"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
