import * as LucideIcons from 'lucide-react';
import { cn } from "@/lib/utils";
import { ReactNode } from 'react';

export interface FeatureItem {
  id?: string | number;
  icon: keyof typeof IconMap;
  title: string;
  text: string;
  description?: ReactNode;
  className?: string;
}

export interface ReasonProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  features?: FeatureItem[];
  loading?: boolean;
  error?: string | null;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  renderFeature?: (feature: FeatureItem, index: number) => React.ReactNode;
}

const IconMap = {
  Rocket: LucideIcons.Rocket,
  ShieldCheck: LucideIcons.ShieldCheck,
  Server: LucideIcons.Server,
  Headset: LucideIcons.Headset,
  Globe: LucideIcons.Globe,
  CircleCheckBig: LucideIcons.CheckCircle2,
  Cpu: LucideIcons.Cpu,
  Zap: LucideIcons.Zap,
  Lock: LucideIcons.Lock,
  Database: LucideIcons.Database,
  Code: LucideIcons.Code,
  Cloud: LucideIcons.Cloud,
  default: LucideIcons.Hexagon,
} as const;

type IconName = keyof typeof IconMap;

const getIconComponent = (iconName: string): React.ComponentType<{ className?: string }> => {
  const Icon = IconMap[iconName as IconName];
  return Icon || IconMap.default;
};

export const defaultRenderFeature = (feature: FeatureItem, index: number) => {
  const Icon = getIconComponent(feature.icon);
  
  return (
    <div 
      key={feature.id || index}
      className={cn(
        "relative p-8 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-cyan-400/40",
        "transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:glow",
        "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-cyan-400/10 before:to-transparent before:opacity-0 hover:before:opacity-100",
        "after:absolute after:inset-0 after:rounded-lg after:bg-[radial-gradient(circle_at_center,theme(colors.cyan.400/10),transparent_70%)] after:opacity-10 hover:after:opacity-70",
        "overflow-hidden group",
        "animate-fade-in",
        feature.className
      )}
      style={{
        '--tw-animate-delay': `${index * 0.1}s`,
      } as React.CSSProperties}
    >
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 p-3 bg-primary/10 rounded-lg backdrop-blur-sm group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-full h-full text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-center text-foreground group-hover:text-primary transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-center group-hover:text-foreground/90 transition-colors duration-300 mb-4">
          {feature.text}
        </p>
        {feature.description && (
          <div className="text-sm text-muted-foreground text-center">
            {feature.description}
          </div>
        )}
        
        {/* Animated line below text */}
        <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/70 transition-all duration-500 w-1/2 mx-auto" />
      </div>
    </div>
  );
};

const Reason = ({
  title = '¿Por qué elegirnos?',
  description = 'Descubre las ventajas de trabajar con nuestro equipo de expertos',
  features = [],
  loading = false,
  error = null,
  columns = 3,
  className = '',
  renderFeature = defaultRenderFeature,
  ...props
}: ReasonProps) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  if (loading) {
    return (
      <section className={`relative py-20 ${className}`} {...props}>
        <div className="container">
          <div className="animate-pulse space-y-4">
            <div className="h-12 bg-slate-700 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-slate-800/50 rounded-lg p-6">
                  <div className="h-12 w-12 bg-slate-700 rounded-full mx-auto mb-4"></div>
                  <div className="h-6 bg-slate-700 rounded w-3/4 mx-auto mb-3"></div>
                  <div className="h-4 bg-slate-700 rounded w-5/6 mx-auto mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded w-4/6 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`relative py-20 ${className}`} {...props}>
        <div className="container">
          <div className="text-center py-12">
            <div className="text-red-400 mb-4">
              <LucideIcons.AlertCircle className="w-12 h-12 mx-auto" />
            </div>
            <p className="text-muted-foreground">{error || 'Error al cargar las características'}</p>
          </div>
        </div>
      </section>
    );
  }

  if (!features || features.length === 0) {
    return (
      <section className={`relative py-20 ${className}`} {...props}>
        <div className="container">
          <div className="text-center py-12">
            <p className="text-muted-foreground">No hay características disponibles</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative py-20 ${className}`} {...props}>
      <div className="container">
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400"
           data-aos="fade-up"
           data-aos-delay="200"
           data-aos-duration="800"
          >
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            >
              {description}
            </p>
          )}
        </div>
        
        <div className={`grid ${gridClasses} gap-8 relative`}
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="800">
          {features.map((feature, idx) => renderFeature(feature, idx))}
        </div>
      </div>
    </section>
  );
};

export default Reason;