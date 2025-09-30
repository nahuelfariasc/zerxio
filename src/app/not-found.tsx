import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-cyan-500/20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            404
          </div>
          <h1 className="text-5xl font-bold mb-6 relative z-10">
            ¡Ups! Página no encontrada
          </h1>
        </div>
        
        <p className="text-lg text-slate-300 mb-10 max-w-lg mx-auto">
          La página que estás buscando podría haber sido eliminada, haber cambiado de nombre o no está disponible temporalmente.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="group">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4 group-hover:translate-x-[-2px] transition-transform" />
              Volver al inicio
            </Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <Link href="/#contacto" className="flex items-center gap-2">
              <Rocket className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              Contactar soporte
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
