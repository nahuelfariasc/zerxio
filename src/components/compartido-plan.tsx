"use client";

import { cn } from "@/lib/utils";
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface CompartidoPlanProps {
  title: string;
  description: string;
  cost: number;
  features: string;
  link: string;
  isPopular?: boolean;
  className?: string;
}

export function CompartidoPlan({ 
  title, 
  description, 
  cost, 
  features,
  link,
  isPopular = false,
  className
}: CompartidoPlanProps) {
  // Parsear el texto enriquecido a un array de características
  const featureList = features
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  return (
    <div 
      className={cn(
        "relative p-8 rounded-xl border border-cyan-400/20 bg-slate-900/80 backdrop-blur-sm",
        "transition-all duration-500 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10",
        "flex flex-col h-full",
        isPopular && "border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/10",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium py-1 px-3 rounded-full whitespace-nowrap">
            Más Popular
          </span>
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <div className="mb-6">
            <span className="text-3xl font-bold text-white">${cost.toFixed(2)}</span>
            <span className="text-muted-foreground">/mes</span>
          </div>
          
          <ul className="space-y-3 mb-8">
            {featureList.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          href={link}
          className={cn(
            "w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500",
            "text-white font-medium py-3 px-6 transition-all duration-200",
            "hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/20",
            "focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          )}
        >
          Contratar ahora
        </Link>
      </div>
    </div>
  );
}
