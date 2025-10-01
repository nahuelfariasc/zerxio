import PlanItem from './plan-item';
import { Plan } from './plan-item';

interface PlansProps extends React.HTMLAttributes<HTMLElement> {
  plans: Plan[];
  title?: string;
  description?: string;
  showError?: boolean;
  errorMessage?: string;
  emptyMessage?: string;
  columns?: 1 | 2 | 3 | 4;
  showIcons?: boolean;
  renderPlanItem?: (plan: Plan, index: number) => React.ReactNode;
}

// Re-exportar la interfaz Plan
export type { Plan } from './plan-item';

export default function Plans({
  plans = [],
  title = 'Planes de Hosting',
  description = 'Elige el plan que mejor se adapte a tus necesidades de hosting',
  className = '',
  showError = true,
  errorMessage = 'Error al cargar los planes',
  emptyMessage = 'No hay planes disponibles',
  columns = 3,
  showIcons = true,
  renderPlanItem,
  ...props
}: PlansProps) {
  if (!plans || !Array.isArray(plans)) {
    if (!showError) return null;
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">{errorMessage}</p>
      </div>
    );
  }

  if (plans.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section 
      className={`relative py-20 overflow-hidden ${className}`}
      {...props}
    >
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          >
            {title}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            >
              {description}
            </p>
          )}
        </div>
        
        <div className={`grid ${gridClasses} gap-8`}
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800">
          {plans.map((plan, index) =>
            renderPlanItem ? (
              <div key={plan.id || index}>
                {renderPlanItem(plan, index)}
              </div>
            ) : (
              <PlanItem 
                key={plan.id || index} 
                plan={{
                  ...plan,
                  // Si showIcons es false, forzamos el icon a undefined
                  icon: showIcons ? plan.icon : undefined
                }} 
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}