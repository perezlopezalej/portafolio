import Image from "next/image"

const PROJECTS = [
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop",
    alt: "Tierra Blanca",
    result: "+3 clientes/mes",
    tags: ["Next.js", "Tailwind", "Reservas"],
    name: "Tierra Blanca",
    problem:
      "Restaurante sin presencia digital. Clientes potenciales que no les encontraban en Google.",
    solution:
      "Web completa con carta, galería y reservas online. SEO local optimizado desde el día 1.",
    link: "https://tierra-blanca-demo.vercel.app",
    linkLabel: "Ver demo en vivo →",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&auto=format&fit=crop",
    alt: "Apex Fitness",
    result: "Landing lista en 5 días",
    tags: ["HTML", "CSS", "JavaScript"],
    name: "Apex Fitness",
    problem:
      "Gimnasio sin presencia online — sin landing, sin captación de leads y sin diferenciación frente a la competencia.",
    solution:
      "Landing page de alto impacto con secciones de servicios, horarios, testimonios y formulario de contacto directo.",
    link: "https://apex-fitness-landing-lac.vercel.app/",
    linkLabel: "Ver demo en vivo →",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&auto=format&fit=crop",
    alt: "BarberBook",
    result: "0 citas perdidas",
    tags: ["Next.js", "PostgreSQL", "Email"],
    name: "BarberBook",
    problem:
      "Citas por WhatsApp. Cancelaciones de última hora y horas perdidas al teléfono.",
    solution:
      "Sistema de citas online con recordatorios automáticos, agenda y ficha de cliente.",
    link: "#contacto",
    linkLabel: "Ver detalles del proyecto →",
  },
]

export function Projects() {
  return (
    <div className="section-alt" id="proyectos">
      <div className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem]">
        <p className="eyebrow" data-rv>
          02 — Proyectos
        </p>
        <h2
          data-rv
          className="text-[clamp(1.85rem,3vw,2.5rem)] font-bold tracking-[-0.035em] leading-[1.1] mb-[0.55rem] text-fg"
        >
          Resultados reales,
          <br />
          no capturas bonitas.
        </h2>
        <p data-rv className="text-[0.93rem] text-muted leading-[1.7] max-w-[480px]">
          Cada proyecto nació de un problema concreto y tiene un resultado
          medible.
        </p>

        <div
          data-rv
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-11"
        >
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="group bg-surface border border-border rounded-[14px] overflow-hidden transition-[border-color,transform] duration-[350ms] cubic-bezier-[0.16,1,0.3,1] hover:border-border-3 hover:-translate-y-[3px]"
            >
              {/* Thumbnail */}
              <div className="relative h-[210px] overflow-hidden bg-surface-2">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover object-top opacity-85 transition-transform duration-[5000ms] ease-linear group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-accent text-white text-[0.67rem] font-bold px-[0.7rem] py-[0.28rem] rounded-full tracking-[0.03em]">
                  {p.result}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 pt-[1.35rem]">
                {/* Tags */}
                <div className="flex gap-1.5 flex-wrap mb-3.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[0.68rem] font-semibold px-[0.55rem] py-[0.18rem] rounded-[4px] bg-surface-3 text-muted border border-border-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <div className="text-[1.05rem] font-semibold tracking-[-0.015em] mb-3.5 text-fg transition-colors duration-[180ms] group-hover:text-accent-light">
                  {p.name}
                </div>

                {/* Meta */}
                <div className="flex flex-col gap-[0.55rem] mb-4">
                  <div className="flex gap-2 items-start">
                    <span className="text-[0.65rem] font-bold tracking-[0.07em] uppercase text-accent-light whitespace-nowrap pt-[0.05rem] min-w-[62px]">
                      Problema
                    </span>
                    <span className="text-[0.8rem] text-muted leading-[1.55]">
                      {p.problem}
                    </span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-[0.65rem] font-bold tracking-[0.07em] uppercase text-accent-light whitespace-nowrap pt-[0.05rem] min-w-[62px]">
                      Solución
                    </span>
                    <span className="text-[0.8rem] text-muted leading-[1.55]">
                      {p.solution}
                    </span>
                  </div>
                </div>

                {/* Link */}
                <a
                  href={p.link}
                  target={p.link.startsWith("http") ? "_blank" : undefined}
                  rel={p.link.startsWith("http") ? "noopener" : undefined}
                  className="text-[0.8rem] font-semibold text-accent-light no-underline inline-flex items-center gap-1 border-t border-border pt-3.5 w-full transition-[gap,color] duration-[180ms] hover:gap-[9px] hover:text-fg"
                >
                  {p.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
