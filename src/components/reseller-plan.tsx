import { cn } from "@/lib/utils";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export interface ResellerPlanProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  price?: {
    amount: number | string;
    currency?: string;
    period?: string;
    className?: string;
  };
  features?: string | string[];
  action?: {
    label?: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  isPopular?: boolean;
  popularLabel?: string;
  renderFeature?: (feature: string, index: number) => ReactNode;
}

export function ResellerPlan({ 
  title = 'Plan', 
  description = '', 
  price = { amount: 0, currency: '$', period: '/mes' },
  features = [],
  action = { 
    label: 'Contratar ahora',
    href: '#',
    icon: ArrowRight 
  },
  isPopular = false,
  popularLabel = 'Más popular',
  renderFeature,
  className,
  ...props
}: ResellerPlanProps) {
  // Normalizar características a un array
  const featureList = Array.isArray(features) 
    ? features 
    : typeof features === 'string' 
      ? features
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0)
      : [];

  // Renderizado por defecto de características
  const defaultRenderFeature = (feature: string, index: number) => (
    <li key={index} className="flex items-start">
      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{feature}</span>
    </li>
  );

  const ActionIcon = action?.icon || ArrowRight;

  return (
    <div 
      className={cn(
        "relative p-8 rounded-xl border border-cyan-400/20 bg-slate-900/80 backdrop-blur-sm",
        "transition-all duration-500 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10",
        "flex flex-col h-full",
        isPopular && "border-2 border-cyan-400/40 hover:border-cyan-400/70",
        className
      )}
      {...props}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-cyan-500 text-white text-xs font-medium py-1 px-3 rounded-full whitespace-nowrap">
            {popularLabel}
          </span>
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h3>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        
        {price && (
          <div className={cn("mb-8", price.className)}>
            <span className="text-4xl font-bold text-foreground">
              {price.currency}{price.amount}
            </span>
            {price.period && (
              <span className="text-muted-foreground ml-2">
                {price.period}
              </span>
            )}
          </div>
        )}
        
        {featureList.length > 0 && (
          <ul className="space-y-3 mb-8 flex-grow">
            {featureList.map((feature, index) => 
              renderFeature 
                ? renderFeature(feature, index)
                : defaultRenderFeature(feature, index)
            )}
          </ul>
        )}
        
        {(action?.label || action?.href) && (
          <div className="mt-auto">
            <a
              href={action.href}
              onClick={action.onClick}
              className={cn(
                "btn-primary group flex items-center justify-center gap-2 w-full",
                "font-medium py-3 px-6 rounded-lg transition-all",
                action.className
              )}
              target={action.href?.startsWith('http') ? '_blank' : undefined}
              rel={action.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {action.label}
              {ActionIcon && (
                <ActionIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              )}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
