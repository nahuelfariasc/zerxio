import { Button } from "@/components/ui/button";
import { ResellerPlan } from "@/components/reseller-plan";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CtaBanner from "@/components/banner";

interface ResellerPlanData {
  id: number;
  title: string;
  description: string;
  cost: number;
  list: string;
  link: string;
  //is_popular?: boolean;
  //features?: string[];
}

// Datos de planes de hosting reseller
const resellerPlans: ResellerPlanData[] = [
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

// Datos de características destacadas
const features = [
  {
    title: "Panel de Control cPanel",
    description: "Administra fácilmente todas tus cuentas desde un solo lugar con el panel de control cPanel."
  },
  {
    title: "Alta Disponibilidad",
    description: "Infraestructura en la nube con redundancia para garantizar el máximo tiempo de actividad."
  },
  {
    title: "Soporte Técnico",
    description: "Equipo de soporte especializado disponible 24/7 para resolver cualquier consulta o incidencia."
  }
];

export default function HostingResellerPage() {
  const hasPlans = resellerPlans && resellerPlans.length > 0;

  // Si no hay planes, mostramos un mensaje
  if (!hasPlans) {
      return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <section className="container mx-auto py-32 px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hosting Reseller
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              No hay planes Reseller disponibles en este momento.
            </p>
            <Button asChild className="mt-6">
              <a href="/contacto" className="group">
                Contáctanos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </section>
        </main>
      );
    }

    return (
      <>
        {/* Hero Section */}
        <section className="hero min-h-[40vh] relative flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-blue-900/20 via-slate-900/20 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wide">
              Hosting Reseller
            </h1>
            <div className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ideal para agencias y desarrolladores que quieren ofrecer hosting a sus clientes con cuentas cPanel independientes.
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resellerPlans.map((plan, index) => (
                <ResellerPlan
                  key={plan.id}
                  title={plan.title}
                  description={plan.description}
                  features={plan.list}
                  isPopular={index === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Todo lo que necesitas para tu negocio de hosting
              </h2>
              <p className="text-lg text-muted-foreground">
                Ofrece a tus clientes el mejor servicio de hosting con nuestras soluciones Reseller.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
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
  // Manejador de error para el renderizado del componente
  if (typeof window !== 'undefined') {
    console.error('Error en el componente HostingResellerPage');
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Error</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Ocurrió un error al cargar los planes. Por favor, intenta nuevamente más tarde.
          </p>
          <Button asChild>
            <Link href="/" className="group">
              Volver al inicio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </main>
    );
  }
}