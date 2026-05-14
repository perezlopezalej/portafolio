const TESTIMONIALS = [
  {
    stars: "★★★★★",
    text: "La web nos trajo 3 clientes nuevos el primer mes. No me lo podía creer. Ahora la gente nos encuentra en Google sin que les digamos nada.",
    initials: "MG",
    name: "María García",
    biz: "La Tasca del Puerto · Conil",
    siteUrl: "https://tierra-blanca-demo.vercel.app",
  },
  {
    stars: "★★★★★",
    text: "Muy profesional y rapidísimo. En dos semanas teníamos la plataforma lista. El sistema de reservas es lo mejor — los clientes se apuntan solos.",
    initials: "CR",
    name: "Carlos Ruiz",
    biz: "Apex Fitness · Jerez de la Frontera",
  },
  {
    stars: "★★★★★",
    text: "Ya no tengo que estar pendiente del móvil todo el día. Los clientes reservan solos. Alejandro lo explica todo muy claro, sin tecnicismos raros.",
    initials: "AL",
    name: "Ana López",
    biz: "BarberBook Sur · Cádiz",
  },
]

export function Testimonials() {
  return (
    <div className="section-alt">
      <div className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem]">
        <p className="eyebrow" data-rv>05 — Testimonios</p>
        <h2 data-rv className="section-title mb-11">
          Lo que dicen mis clientes.
        </h2>

        <div
          data-rv
          className="testi-grid-mobile grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="testi-card-mobile card-glow flex flex-col bg-surface border border-border rounded-[14px] p-7"
            >
              <div className="text-amber text-[0.75rem] tracking-[0.12em] mb-4">
                {t.stars}
              </div>
              <div className="text-[3.5rem] text-fg leading-none font-bold tracking-[-0.06em] opacity-[0.06] mb-1 select-none">
                &ldquo;
              </div>
              <p className="text-[0.875rem] text-fg-2 leading-[1.72] mb-6 flex-1">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full shrink-0 bg-accent-dim border border-accent-border flex items-center justify-center text-[0.7rem] font-bold text-accent-light">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.83rem] font-semibold text-fg-2 leading-tight">{t.name}</div>
                  <div className="text-[0.7rem] text-subtle mt-[0.15rem]">{t.biz}</div>
                  {t.siteUrl && (
                    <a
                      href={t.siteUrl}
                      target="_blank"
                      rel="noopener"
                      className="text-[0.68rem] text-accent-light no-underline hover:underline mt-0.5 block transition-colors duration-180"
                    >
                      Ver web →
                    </a>
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
