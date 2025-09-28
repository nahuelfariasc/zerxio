"use client";

import CtaBanner from "@/components/banner";
import { Button } from "@/components/ui/button";
import { WordPressPlan } from "@/components/wordpress-plan";
import { ArrowRight } from "lucide-react";

interface WordPressPlanData {
  id: number;
  title: string;
  description: string;
  cost: number;
  list: string;
  link: string;
  is_popular?: boolean;
}

// Datos de planes de WordPress locales
const wordpressPlans: WordPressPlanData[] = [
  {
    id: 1,
    title: "WordPress Básico",
    description: "Ideal para blogs y sitios web personales",
    cost: 19.99,
    list: "1 Sitio WordPress\n10GB Almacenamiento SSD\n100,000 Visitas Mensuales\nCertificado SSL Gratis\nCopias de Seguridad Diarias",
    link: "/contacto?plan=wordpress-basico",
    is_popular: false
  },
  {
    id: 2,
    title: "WordPress Profesional",
    description: "Perfecto para negocios y lugares web profesionales",
    cost: 39.99,
    list: "3 Sitios WordPress\n30GB Almacenamiento SSD\n300,000 Visitas Mensuales\nCertificado SSL Gratis\nCopias de Seguridad Diarias\nCaché Avanzado",
    link: "/contacto?plan=wordpress-profesional",
    is_popular: true
  },
  {
    id: 3,
    title: "WordPress Empresarial",
    description: "Para lugares web de alto tráfico y e-commerce",
    cost: 79.99,
    list: "Sitios WordPress Ilimitados\n100GB Almacenamiento SSD\n1,000,000 Visitas Mensuales\nCertificado SSL Gratis\nCopias de Seguridad en Tiempo Real\nCaché Avanzado\nSoporte Prioritario",
    link: "/contacto?plan=wordpress-empresarial",
    is_popular: false
  }
];

export default function WordPressHostingPage() {
  const hasPlans = wordpressPlans && wordpressPlans.length > 0;

  if (!hasPlans) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Hosting WordPress
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            No hay planes de WordPress disponibles en este momento.
          </p>
          <Button asChild>
            <a href="/contacto" className="group">
              Contáctanos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
    <section className="hero min-h-[40vh] relative flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-blue-900/20 via-slate-900/20 to-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.05]" />
            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wide">
                Hosting WordPress
              </h1>
              <div className="text-xl text-muted-foreground max-w-2xl mx-auto">
                La solución perfecta para sitios web personales, blogs y pequeñas empresas. 
                Hosting optimizado específicamente para WordPress con alto rendimiento, seguridad mejorada y actualizaciones automáticas.
              </div>
            </div>
          </section>
    
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wordpressPlans.map((plan, index) => (
                  <WordPressPlan
                    key={plan.id}
                    title={plan.title}
                    description={plan.description}
                    cost={plan.cost}
                    features={plan.list}
                    isPopular={index === 1}
                    link={plan.link}
                    className="h-full"
                  />
                ))}
              </div>
            </div>
          </section>
    
          <CtaBanner
            title="¿Necesitas ayuda para elegir?"
            description="Nuestro equipo de expertos está aquí para ayudarte a encontrar el plan perfecto para tu proyecto."
            ctaText="Contáctanos"
            ctaUrl="#contacto"
            variant="gradient"
            className="my-12"
          />
      </>
  );
}