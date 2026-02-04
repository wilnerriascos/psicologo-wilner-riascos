import { useAuth } from '@/_core/hooks/useAuth';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import FileManager from '@/components/FileManager';

export default function FilesPage() {
  const { user, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Acceso Requerido</h1>
          <p className="text-gray-600 mb-6">Debes iniciar sesión para acceder a la gestión de archivos.</p>
          <Button onClick={() => setLocation('/')}>Volver al Inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Archivos</h1>
          <p className="text-gray-600 mt-2">
            Bienvenido, {user?.name}. Aquí puedes subir y gestionar tus archivos.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <FileManager />
      </div>
    </div>
  );
}
