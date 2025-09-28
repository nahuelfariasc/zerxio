"use client";

import { Button } from "@/components/ui/button";
import { CompartidoPlan } from "@/components/compartido-plan";
import Link from "next/link";
import CtaBanner from "@/components/banner";

interface CompartidoPlanData {
  id: number;
  title: string;
  description: string;
  cost: number;
  list: string;
  link: string;
}

const compartidoPlans: CompartidoPlanData[] = [
  {
    id: 1,
    title: "Básico",
    description: "Ideal para sitios web personales y blogs",
    cost: 9.99,
    list: "5 GB SSD ultrarrápido\n50 GB transferencia mensual\n5 cuentas de email\n2 bases de datos MySQL\n2 subdominios\nCertificado SSL gratuito\ncPanel incluido",
    link: "/checkout/compartido-basico"
  },
  {
    id: 2,
    title: "Intermedio",
    description: "Perfecto para pequeñas empresas",
    cost: 19.99,
    list: "15 GB SSD ultrarrápido\n100 GB transferencia mensual\n10 cuentas de email\n5 bases de datos MySQL\n6 subdominios\nCertificado SSL gratuito\ncPanel incluido",
    link: "/checkout/compartido-intermedio"
  },
  {
    id: 3,
    title: "Avanzado",
    description: "Para sitios con alto tráfico",
    cost: 29.99,
    list: "30 GB SSD ultrarrápido\nTransferencia ilimitada\nCuentas de email ilimitadas\nBases de datos ilimitadas\nCertificado SSL Gratis\n5 dominios alias (parked)\nCertificado SSL gratuito\ncPanel incluido",
    link: "/checkout/compartido-avanzado"
  }
];

export default function Page() {
  const hasPlans = compartidoPlans.length > 0;

  if (!hasPlans) {
    return (
      <section className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hosting Compartido</h1>
        <p className="text-xl text-muted-foreground mb-6">
          No hay planes disponibles en este momento.
        </p>
        <Button asChild>
          <Link href="/contacto">Contáctanos</Link>
        </Button>
      </section>
    );
  }

  return (
    <>
      <section className="hero min-h-[40vh] relative flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-blue-900/20 via-slate-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wide">
            Hosting Compartido
          </h1>
          <div className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La solución perfecta para sitios web personales, blogs y pequeñas empresas. 
            Hosting confiable, económico y con todas las herramientas que necesitas.
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compartidoPlans.map((plan, index) => (
              <CompartidoPlan
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