import HeroSection from "@/components/hero"
import Reason from "@/components/reason"
import CtaBanner from "@/components/banner"
import Plans, { Plan } from "@/components/plans"

// Datos de ejemplo para los planes
const examplePlans: Plan[] = [
  {
    id: 1,
    name: "Hosting Compartido",
    description: "Perfecto para sitios web personales, blogs y pequeñas empresas que buscan una solución económica y confiable",
    price: "Desde $12000",
    features: [
      "Desde 5 GB SSD",
      "cPanel incluido",
      "SSL gratuito",
      "Múltiples planes"
    ],
    ctaText: "Ver Planes",
    ctaHref: "/hosting-compartido",
    icon: "rocket"
  },
  {
    id: 2,
    name: "WordPress Hosting",
    description: "Perfecto para sitios web personales, blogs y pequeñas empresas que buscan una solución económica y confiable",
    price: "Desde $23000",
    features: [
      "WordPress preinstalado",
      "Optimizado para WP",
      "Actualizaciones automáticas",
      "Certificado SSL gratuito",
    ],
    ctaText: "Ver Planes",
    ctaHref: "/hosting-wordpress",
    icon: "server"
  },
  {
    id: 3,
    name: "Hosting Reseller",
    description: "Ideal para agencias y desarrolladores que quieren ofrecer hosting a sus clientes con cuentas cPanel independientes",
    price: "Desde $50000",
    features: [
      "Hasta 20 cuentas cPanel",
      "WHM incluido",
      "Soporte prioritario"
    ],
    ctaText: "Ver Planes",
    ctaHref: "/hosting-reseller",
    icon: "server"
  }
];

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection
        title="Hosting que Acelera tu Éxito"
        subtitle="Potencia tu presencia en línea con nuestro <strong>hosting rápido, seguro y confiable</strong>. Diseñado para desarrolladores y empresas que buscan lo mejor."
        ctaText="Comenzar ahora"
        ctaUrl="#planes"
        showEffects={true}
        className="mb-12"
      />

      <Reason 
        title="Nuestras Ventajas"
        description="Tecnología de vanguardia y características premium para impulsar tu presencia online"
        features={[
          {
            icon: "Rocket",
            title: "Velocidad Extrema",
            text: "Almacenamiento SSD NVMe y CDN global para tiempos de carga ultrarrápidos"
          },
          {
            icon: "ShieldCheck",
            title: "Seguridad Avanzada",
            text: "SSL gratuito, firewall avanzado y backups automáticos diarios para proteger tu sitio"
          },
          {
            icon: "Headset",
            title: "Soporte 24/7",
            text: "Equipo de expertos disponible las 24 horas para resolver cualquier consulta"
          },
          {
            icon: "Server",
            title: "99.9% Uptime",
            text: "Garantía de disponibilidad con infraestructura redundante y monitoreo constante"
          },
          {
            icon: "Globe",
            title: "cPanel Incluido",
            text: "Panel de control cPanel intuitivo para gestionar tu hosting fácilmente"
          },
          {
            icon: "CircleCheckBig",
            title: "Instalación 1-Click",
            text: "WordPress con un solo click"
          },
        ]}
        columns={3}
      />

      <Plans 
        plans={examplePlans}
        title="Planes de Hosting"
        description="Elige el plan que mejor se adapte a tus necesidades. Todos incluyen soporte 24/7 y garantía de tiempo de actividad del 99.9%"
        className="py-20"
        id="planes"
      />

      <CtaBanner
        title="¿Listo para llevar tu sitio al siguiente nivel?"
        description="Probá Zerxio y experimentá la diferencia."
        ctaText="Comenzar"
        ctaUrl="#contacto"
        variant="gradient"
        className="my-12"
      />
    </main>
  )
}
