export const metadata = {
  title: "Términos y Condiciones | Zerxio",
  description: "Lee los términos y condiciones del servicio de Zerxio.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="hero min-h-[40vh] relative flex flex-col justify-center items-center gap-6 bg-gradient-to-b from-blue-900/20 via-slate-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wide">
            Términos y Condiciones
          </h1>
        </div>
      </section>
      <p className="h-[40vh] flex items-center justify-center">
        Esta página está en preparación. Próximamente publicaremos los términos y
        condiciones completos del servicio.
      </p>
    </main>
  );
}

