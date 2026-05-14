const TESTIMONIALS = [
  {
    stars: "★★★★★",
    text: "La web nos trajo 3 clientes nuevos el primer mes. No me lo podía creer. Ahora la gente nos encuentra en Google sin que les digamos nada.",
    initials: "MG",
    name: "María García",
    biz: "La Tasca del Puerto · Conil",
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
        <h2
          data-rv
          className="text-[clamp(1.85rem,3vw,2.5rem)] font-bold tracking-[-0.035em] leading-[1.1] mb-11 text-fg"
        >
          Lo que dicen mis clientes.
        </h2>

        <div
          data-rv
          className="testi-grid-mobile grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="testi-card-mobile bg-surface border border-border rounded-[14px] p-[1.6rem] transition-[border-color,transform] duration-[350ms] hover:border-border-3 hover:-translate-y-[2px]"
            >
              <div className="text-amber text-[0.8rem] tracking-[0.04em] mb-3">
                {t.stars}
              </div>
              <p className="text-[0.88rem] italic text-fg-2 leading-[1.7] mb-[1.1rem]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-[0.65rem]">
                <div className="w-[34px] h-[34px] rounded-full shrink-0 bg-accent-dim border border-accent-border flex items-center justify-center text-[0.72rem] font-bold text-accent-light">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.83rem] font-semibold text-fg-2">{t.name}</div>
                  <div className="text-[0.7rem] text-subtle">{t.biz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
