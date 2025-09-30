"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      // Configuración global de AOS
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
    
    // Actualizar AOS cuando el contenido se carga dinámicamente
    const handleRouteChange = () => {
      AOS.refresh();
    };
    
    // Agregar event listeners para actualizar AOS en navegación
    window.addEventListener('load', handleRouteChange);
    
    return () => {
      window.removeEventListener('load', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
}
