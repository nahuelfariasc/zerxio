import { cn } from "@/lib/utils";
import { Rocket, ShieldCheck, Server, Headset, Users, Workflow, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "./ui/button";

export interface Plan {
  id?: number | string;
  documentId?: string;
  name: string;
  slug?: string;
  description: string;
  icon?: string;
  active?: boolean;
  price?: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
  isPopular?: boolean;
  className?: string;
  // Para props adicionales con tipo genérico
  [key: string]: unknown;
}

const defaultIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  shield: ShieldCheck,
  server: Server,
  support: Headset,
  users: Users,
  workflow: Workflow,
  default: Server,
};

interface PlanItemProps extends React.HTMLAttributes<HTMLDivElement> {
  plan: Partial<Plan>;
  renderIcon?: (iconName?: string) => React.ReactNode;
  renderFeature?: (feature: string, index: number) => React.ReactNode;
  renderCta?: (plan: Partial<Plan>) => React.ReactNode;
}

export default function PlanItem({ 
  plan, 
  className,
  renderIcon,
  renderFeature,
  renderCta,
  ...props 
}: PlanItemProps) {
  const {
    name = 'Plan',
    description = '',
    features = description.split('\n').filter(line => line.trim() !== ''),
    icon = 'default',
    price,
    ctaText = 'Ver Plan',
    ctaHref = '#',
    isPopular = false,
    // planRest removido ya que no se utiliza
  } = plan;

  // Renderizar ícono personalizado o usar el predeterminado
  const renderDefaultIcon = (iconName: string = 'default') => {
    const IconComponent = defaultIcons[iconName] || defaultIcons.default;
    return (
      <div className="w-16 h-16 mx-auto mb-6 p-3 bg-cyan-400/10 rounded-lg backdrop-blur-sm hover:bg-cyan-400/20 transition-colors duration-300">
        <IconComponent className="w-full h-full text-cyan-400" />
      </div>
    );
  };

  // Renderizar feature por defecto
  const renderDefaultFeature = (feature: string, index: number) => (
    <li key={index} className="flex items-start">
      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
      <span className="text-left">{feature.trim()}</span>
    </li>
  );

  // Renderizar CTA por defecto
  const renderDefaultCta = () => (
    <Button 
      asChild
      className="w-full mt-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition-opacity"
    >
      <a href={ctaHref} className="flex items-center justify-center gap-2">
        {ctaText} <ArrowRight className="w-4 h-4" />
      </a>
    </Button>
  );

  return (
    <div 
      className={cn(
        "relative p-8 rounded-xl border border-cyan-400/20 bg-slate-900/80 backdrop-blur-sm",
        "transition-all duration-500 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10",
        "flex flex-col h-full",
        isPopular && "border-2 border-cyan-400/40 ring-2 ring-cyan-400/20",
        className
      )}
      {...props}
    >
      {/* Badge de popular */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          ¡Popular!
        </div>
      )}

      {/* Ícono */}
      {renderIcon ? renderIcon(icon) : renderDefaultIcon(icon as string)}

      {/* Título y precio */}
      <div className="text-center mb-2">
        <h3 className="text-2xl font-bold text-cyan-400">{name}</h3>
        {price && (
          <div className="mt-2">
            <span className="text-3xl font-bold text-white">{price}</span>
            <span className="text-muted-foreground">/mes</span>
          </div>
        )}
      </div>

      {/* Descripción */}
      {description && (
        <p className="text-muted-foreground text-center mb-6">
          {description}
        </p>
      )}

      {/* Lista de características */}
      {features && features.length > 0 && (
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => 
            renderFeature 
              ? renderFeature(feature, index) 
              : renderDefaultFeature(feature, index)
          )}
        </ul>
      )}

      {/* Botón de acción */}
      <div className="mt-auto">
        {renderCta ? renderCta(plan) : renderDefaultCta()}
      </div>
    </div>
  );
}