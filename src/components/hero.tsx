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
    <section 
      className={`hero min-h-[60vh] relative flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-blue-900/20 via-slate-900/20 to-slate-900 overflow-hidden ${className}`}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      {showEffects && (
        <>
          <FloatingData />
          <HeroEffect />
        </>
      )}
      <h1 
        className="container text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wide text-center z-1"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        {title}
      </h1>
      {subtitle && (
        <div
          className="container text-xl text-muted-foreground max-w-2xl mx-auto text-center z-1"
          dangerouslySetInnerHTML={{ __html: subtitle }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        />
      )}
      {ctaText && ctaUrl && (
        <a
          href={ctaUrl}
          className="mt-4 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform group"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <span className="inline-flex items-center">
            {ctaText}
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </span>
        </a>
      )}
    </section>
  )
}