const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    name: "Landing page / Web corporativa",
    desc: "Diseño a medida que transmite autoridad, convierte visitas en leads y posiciona tu negocio por delante de la competencia.",
    price: "Desde 800€",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    name: "Tienda online / E-commerce",
    desc: "Tu negocio abierto 24/7. Pagos seguros, gestión de stock y una experiencia de compra que convierte. Sin comisiones de plataformas.",
    price: "Desde 1.500€",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    name: "Sistema de reservas / Citas",
    desc: "Tus clientes reservan solos, a cualquier hora. Cero llamadas perdidas, cero WhatsApp a deshora. Confirmaciones automáticas incluidas.",
    price: "Desde 1.000€",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    name: "App web / Dashboard / SaaS",
    desc: "Paneles de gestión, herramientas internas o productos SaaS completos. Full stack, escalables y listos para crecer contigo.",
    price: "Desde 1.500€",
  },
]

export function Services() {
  return (
    <div
      className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem]"
      id="servicios"
    >
      <p className="eyebrow" data-rv>
        01 — Servicios
      </p>
      <h2
        data-rv
        className="text-[clamp(1.85rem,3vw,2.5rem)] font-bold tracking-[-0.035em] leading-[1.1] mb-[0.55rem] text-fg"
      >
        Soluciones web que
        <br />
        generan resultados.
      </h2>
      <p data-rv className="text-[0.93rem] text-muted leading-[1.7] max-w-[480px]">
        Precio cerrado antes de empezar. Sin sorpresas ni presupuestos que se
        disparan.
      </p>

      <div
        data-rv
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-11 bg-border border border-border rounded-[14px] overflow-hidden"
      >
        {SERVICES.map((s) => (
          <div
            key={s.name}
            className="group flex flex-col gap-[0.4rem] p-7 bg-surface transition-colors duration-[180ms] hover:bg-surface-2"
          >
            <div className="w-[38px] h-[38px] rounded-md bg-white/5 flex items-center justify-center text-muted mb-1.5 transition-colors duration-[180ms] group-hover:bg-accent-dim group-hover:text-accent-light shrink-0">
              {s.icon}
            </div>
            <div className="text-[0.97rem] font-semibold text-fg tracking-[-0.01em] transition-colors duration-[180ms] group-hover:text-accent-light">
              {s.name}
            </div>
            <div className="text-[0.82rem] text-muted leading-[1.6] flex-1">
              {s.desc}
            </div>
            <div className="text-[1rem] font-bold text-accent-light mt-auto pt-3.5 border-t border-border tracking-[-0.01em]">
              {s.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
