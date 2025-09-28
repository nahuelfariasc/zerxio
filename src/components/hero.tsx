import FloatingData from "./floating-data"
import HeroEffect from "./hero-effect"

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaUrl?: string;
  showEffects?: boolean;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaUrl,
  showEffects = true,
  className = ''
}: HeroSectionProps) {
  return (
    <section className={`hero min-h-[60vh] relative flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-blue-900/20 via-slate-900/20 to-slate-900 ${className}`}>
      {showEffects && (
        <>
          <FloatingData />
          <HeroEffect />
        </>
      )}
      <h1 className="container text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wide text-center z-1">
        {title}
      </h1>
      {subtitle && (
        <div
          className="container text-xl text-muted-foreground max-w-2xl mx-auto text-center z-1"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
      {ctaText && ctaUrl && (
        <a
          href={ctaUrl}
          className="mt-4 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          {ctaText}
        </a>
      )}
    </section>
  )
}