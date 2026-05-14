const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Entrega en tiempo",
    desc: "Plazos reales que se cumplen. Te doy una fecha antes de empezar y la respeto. Sin excusas ni retrasos de meses.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Diseño que diferencia",
    desc: "No uso plantillas. Cada proyecto es diseñado desde cero para reflejar tu marca y destacar frente a tu competencia.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Enfocado a resultados",
    desc: "Cada decisión tiene un objetivo de negocio. No construyo webs bonitas que no generan nada. Construyo webs que venden.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Comunicación directa",
    desc: "Sin tecnicismos, sin intermediarios. Te explico todo en lenguaje claro y te mantengo informado en cada fase del proyecto.",
  },
]

export function Value() {
  return (
    <div className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem]" id="valor">
      <p className="eyebrow" data-rv>03 — Por qué contratarme</p>
      <h2
        data-rv
        className="text-[clamp(1.85rem,3vw,2.5rem)] font-bold tracking-[-0.035em] leading-[1.1] mb-[0.55rem] text-fg"
      >
        Lo que me diferencia
        <br />
        de una agencia.
      </h2>
      <p data-rv className="text-[0.93rem] text-muted leading-[1.7] max-w-[480px]">
        Sin capas de burocracia. Trabajas directamente con el desarrollador que
        hace tu web.
      </p>

      <div
        data-rv
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-11"
      >
        {VALUES.map((v) => (
          <div
            key={v.title}
            className="group p-7 bg-surface border border-border rounded-[14px] transition-[border-color,transform,background] duration-[350ms] cubic-bezier-[0.16,1,0.3,1] hover:border-border-3 hover:-translate-y-[3px] hover:bg-surface-2"
          >
            <div className="w-10 h-10 rounded-md bg-accent-dim flex items-center justify-center text-accent-light mb-4 transition-colors duration-[180ms] group-hover:bg-[rgba(139,92,246,0.18)]">
              {v.icon}
            </div>
            <div className="text-[0.97rem] font-semibold tracking-[-0.01em] text-fg mb-[0.4rem] transition-colors duration-[180ms] group-hover:text-accent-light">
              {v.title}
            </div>
            <p className="text-[0.82rem] text-muted leading-[1.65]">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
