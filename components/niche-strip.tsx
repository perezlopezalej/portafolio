const NICHES = [
  "Restaurantes",
  "Startups",
  "Clínicas",
  "E-commerce",
  "Inmobiliarias",
  "Turismo",
  "SaaS",
  "Profesionales",
]

export function NicheStrip() {
  return (
    <div className="bg-bg-alt border-t border-border border-b border-border px-[clamp(1.5rem,5vw,3.5rem)] py-[0.85rem] overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex items-center gap-5 flex-wrap justify-center">
        <span className="text-[0.68rem] font-semibold text-subtle tracking-[0.1em] uppercase whitespace-nowrap">
          Trabajo con
        </span>
        <div className="nicho-items flex gap-1.5 flex-wrap justify-center">
          {NICHES.map((niche) => (
            <span
              key={niche}
              className="inline-flex items-center bg-transparent border border-border text-subtle text-[0.73rem] font-medium px-3 py-[0.28rem] rounded-full transition-colors duration-[180ms] hover:border-border-3 hover:text-muted shrink-0"
            >
              {niche}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
