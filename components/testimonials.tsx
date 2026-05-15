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
              <div className="flex items-center gap-0.5 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-amber">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" />
                  </svg>
                ))}
              </div>
              <p className="text-[0.875rem] text-fg-2 leading-[1.72] mb-6 flex-1 pl-3 border-l-2 border-accent-border">
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
