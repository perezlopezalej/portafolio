import Image from "next/image"

const PROJECTS = [
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop",
    alt: "Tierra Blanca — web con reservas online para restaurante",
    result: "Reservas 24/7",
    sector: "Restaurante",
    name: "Del boca a boca a reservas online",
    problem:
      "Sin web ni presencia en Google Maps. Los clientes llegaban solo por recomendación; los nuevos no les encontraban.",
    solution:
      "Web con carta visual, galería y sistema de reservas integrado. SEO local que aparece en las primeras posiciones cuando alguien busca restaurante en la zona.",
    tags: ["Next.js", "Tailwind CSS"],
    link: "https://tierra-blanca-demo.vercel.app",
    linkLabel: "Ver demo →",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&auto=format&fit=crop",
    alt: "Apex Fitness — landing page de captación de socios",
    result: "Lista en 5 días",
    sector: "Gimnasio",
    name: "La landing que convierte visitas en socios",
    problem:
      "Sin presencia online, perdían clientes frente a competidores mejor posicionados en Google.",
    solution:
      "Landing de conversión con servicios, testimonios y CTA directo. Diseño orientado a acción: cada sección lleva al visitante a dar el siguiente paso.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://apex-fitness-landing-lac.vercel.app/",
    linkLabel: "Ver demo →",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&auto=format&fit=crop",
    alt: "BarberBook — sistema de citas online para barbería",
    result: "0 citas perdidas",
    sector: "Barbería",
    name: "Adiós al caos de WhatsApp",
    problem:
      "Citas gestionadas a mano: mensajes, llamadas, cancelaciones sin aviso y horas perdidas.",
    solution:
      "Sistema de reservas propio con confirmaciones y recordatorios automáticos. El cliente reserva cuando quiere; el barbero trabaja sin interrupciones.",
    tags: ["Next.js", "PostgreSQL"],
    link: "#proyectos",
    linkLabel: "Próximamente →",
  },
]

export function Projects() {
  return (
    <div className="section-alt" id="proyectos">
      <div className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem]">
        <p className="eyebrow" data-rv>
          02 — Proyectos
        </p>
        <h2 data-rv className="section-title">
          Soluciones reales
          <br />
          para negocios reales.
        </h2>
        <p data-rv className="text-[0.93rem] text-muted leading-[1.7] max-w-120">
          Cada proyecto parte de un problema de negocio concreto y termina con
          un resultado que el cliente puede medir.
        </p>

        <div
          data-rv
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-11"
        >
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="group card-glow flex flex-col bg-surface border border-border rounded-[14px] overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-[210px] overflow-hidden bg-surface-2 shrink-0">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover object-top opacity-85 transition-transform duration-600 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-accent text-white text-[0.67rem] font-bold px-[0.7rem] py-[0.28rem] rounded-full tracking-[0.03em]">
                  {p.result}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 pt-[1.35rem]">
                {/* Sector */}
                <span className="text-[0.67rem] font-semibold tracking-[0.08em] uppercase text-subtle mb-[0.35rem]">
                  {p.sector}
                </span>

                {/* Title */}
                <div className="text-[1.02rem] font-semibold tracking-[-0.015em] leading-[1.3] mb-4 text-fg transition-colors duration-[180ms] group-hover:text-accent-light">
                  {p.name}
                </div>

                {/* Problem / Solution */}
                <div className="flex flex-col gap-[0.6rem] mb-5 flex-1">
                  <div className="flex gap-2 items-start">
                    <span className="text-[0.65rem] font-bold tracking-[0.07em] uppercase text-accent-light whitespace-nowrap pt-[0.05rem] min-w-[68px]">
                      Reto
                    </span>
                    <span className="text-[0.8rem] text-muted leading-[1.55]">
                      {p.problem}
                    </span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-[0.65rem] font-bold tracking-[0.07em] uppercase text-accent-light whitespace-nowrap pt-[0.05rem] min-w-[68px]">
                      Solución
                    </span>
                    <span className="text-[0.8rem] text-muted leading-[1.55]">
                      {p.solution}
                    </span>
                  </div>
                </div>

                {/* Footer: stack + CTA */}
                <div className="border-t border-border pt-3.5 flex items-center justify-between gap-3">
                  <div className="flex gap-1.5 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[0.63rem] font-medium px-[0.45rem] py-[0.15rem] rounded-[4px] bg-surface-3 text-subtle border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.link.startsWith("http") ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener"
                      className="text-[0.8rem] font-semibold text-accent-light no-underline inline-flex items-center gap-1 whitespace-nowrap transition-[gap,color] duration-[180ms] hover:gap-[7px] hover:text-fg shrink-0"
                    >
                      {p.linkLabel}
                    </a>
                  ) : (
                    <span className="text-[0.8rem] font-medium text-subtle inline-flex items-center whitespace-nowrap opacity-50 cursor-default">
                      {p.linkLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
