"use client";

import CtaBanner from "@/components/banner";
import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { CompartidoPlan } from "@/components/compartido-plan";
import { ArrowRight, Link } from "lucide-react";

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
    title: "WordPress Básico",
    description: "Ideal para blogs y sitios web personales",
    cost: 23000,
    list: "1 Sitio WordPress\n10GB Almacenamiento SSD\n100,000 Visitas Mensuales\nCertificado SSL Gratis\nCopias de Seguridad Diarias",
    link: "https://panel.zerxio.com/acc/order/main/packages/wp_incio/?group_id=8",
  },
  {
    id: 2,
    title: "WordPress Profesional",
    description: "Perfecto para negocios y lugares web profesionales",
    cost: 38000,
    list: "3 Sitios WordPress\n30GB Almacenamiento SSD\n300,000 Visitas Mensuales\nCertificado SSL Gratis\nCopias de Seguridad Diarias\nCaché Avanzado",
    link: "https://panel.zerxio.com/acc/order/main/packages/wp_plys/?group_id=9",
  },
  {
    id: 3,
    title: "WordPress Empresarial",
    description: "Para lugares web de alto tráfico y e-commerce",
    cost: 62000,
    list: "Sitios WordPress Ilimitados\n100GB Almacenamiento SSD\n1,000,000 Visitas Mensuales\nCertificado SSL Gratis\nCopias de Seguridad en Tiempo Real\nCaché Avanzado\nSoporte Prioritario",
    link: "https://panel.zerxio.com/acc/order/main/packages/wp_avanzado/?group_id=10",
  }
];

export default function Page() {
  const hasPlans = compartidoPlans.length > 0;

  if (!hasPlans) {
    return (
      <section className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hosting Wordpress</h1>
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
      <HeroSection
        title="Hosting Wordpress"
        subtitle="WordPress confiable, económico y con todas las herramientas que necesitas."
        showEffects={false}
        className="mb-12"
      />

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