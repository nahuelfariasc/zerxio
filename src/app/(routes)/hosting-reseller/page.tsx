import { Button } from "@/components/ui/button";
import { CompartidoPlan } from "@/components/compartido-plan";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CtaBanner from "@/components/banner";
import HeroSection from "@/components/hero";

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
    description: "Ideal para empezar tu negocio de hosting",
    cost: 29.99,
    list: "5 GB SSD ultrarrápido\n50 GB transferencia mensual\n5 cuentas de email\n2 bases de datos MySQL\n2 subdominios\nCertificado SSL gratuito\ncPanel incluido",
    link: "/contacto?plan=basico",
  },
  {
    id: 2,
    title: "Intermedio",
    description: "Perfecto para agencias en crecimiento",
    cost: 59.99,
    list: "15 GB SSD ultrarrápido\n100 GB transferencia mensual\n10 cuentas de email\n5 bases de datos MySQL\n6 subdominios\nCertificado SSL gratuito\ncPanel incluido",
    link: "/contacto?plan=intermedio",
  },
  {
    id: 3,
    title: "Avanzado",
    description: "Para empresas con altos requerimientos",
    cost: 99.99,
    list: "30 GB SSD ultrarrápido\nTransferencia ilimitada\nCuentas de email ilimitadas\nBases de datos ilimitadas\n5 dominios alias (parked)\nCertificado SSL gratuito\ncPanel incluido",
    link: "/contacto?plan=empresarial",
  }
];

export default function Page() {
  const hasPlans = compartidoPlans.length > 0;

  if (!hasPlans) {
    return (
      <section className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Hosting Reseller</h1>
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
        title="Hosting Reseller"
        subtitle="Ideal para agencias y desarrolladores que quieren ofrecer hosting a sus clientes con cuentas cPanel independientes."
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