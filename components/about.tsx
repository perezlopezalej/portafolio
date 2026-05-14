const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js",
  "PostgreSQL", "Tailwind", "Figma", "SEO",
]

export function About() {
  return (
    <div className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem]" id="sobre-mi">
      <div data-rv className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 items-start">
        {/* Photo placeholder */}
        <div
          className="relative overflow-hidden rounded-[20px] bg-surface border border-border-2 flex flex-col items-center justify-center w-full md:w-[280px] h-[220px] md:h-[340px] shrink-0"
          style={{ background: "radial-gradient(ellipse at 40% 30%, rgba(139,92,246,0.08), transparent 60%) #111115" }}
        >
          <span className="text-[7rem] md:text-[7rem] font-bold tracking-[-0.05em] text-white/[0.05] leading-none relative z-[1]">
            AP
          </span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[0.67rem] font-bold px-[0.9rem] py-[0.35rem] rounded-full tracking-[0.04em] whitespace-nowrap">
            Full Stack Developer
          </span>
          <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-surface-3 text-muted text-[0.65rem] px-3 py-[0.3rem] rounded-full tracking-[0.06em] uppercase whitespace-nowrap border border-border-2">
            Conil · Cádiz
          </span>
        </div>

        {/* Copy */}
        <div>
          <p className="eyebrow">06 — Sobre mí</p>
          <div className="text-[2rem] font-bold tracking-[-0.035em] text-fg leading-[1.1] mb-[0.35rem]">
            Alejandro
            <br />
            Pérez López
          </div>
          <div className="text-[0.72rem] font-semibold text-subtle tracking-[0.1em] uppercase mb-6">
            Full Stack Developer · Cádiz, Andalucía
          </div>
          <p className="text-[0.9rem] text-muted leading-[1.75] mb-3">
            Desarrollo web desde hace varios años, trabajando con negocios de
            distintos sectores. Tengo una cosa clara:{" "}
            <strong className="text-fg-2 font-semibold">
              una web bonita que no trae clientes no sirve para nada.
            </strong>
          </p>
          <p className="text-[0.9rem] text-muted leading-[1.75] mb-5">
            Me especializo en construir productos digitales que resuelven
            problemas reales — desde una landing que convierte hasta una app web
            completa. Trabajo de forma directa, con comunicación clara y
            resultados medibles.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-[0.72rem] font-medium px-3 py-[0.3rem] rounded-full bg-surface-2 text-muted border border-border-2 transition-colors duration-[180ms] hover:bg-accent-dim hover:text-accent-light hover:border-accent-border cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 bg-accent text-white text-[0.85rem] font-semibold px-[1.35rem] py-[0.65rem] rounded-[10px] no-underline transition-[opacity,transform,box-shadow] duration-[180ms] hover:opacity-90 hover:-translate-y-px"
            style={{ boxShadow: "0 2px 12px rgba(139,92,246,0.3)" }}
          >
            Hablemos de tu proyecto →
          </a>
        </div>
      </div>
    </div>
  )
}
