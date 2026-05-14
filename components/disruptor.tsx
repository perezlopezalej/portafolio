const STATS = [
  { n: "100%", label: "Proyectos entregados en el plazo acordado" },
  { n: "14 días", label: "De briefing a web online. Sin esperas interminables" },
  { n: "0€ extra", label: "Precio cerrado antes de empezar. Sin sorpresas" },
]

export function Disruptor() {
  return (
    <div
      data-rv
      className="relative z-[1] overflow-hidden bg-surface border-t border-border border-b border-border"
    >
      {/* Glow */}
      <div
        className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.07), transparent 70%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="flex items-center gap-[7px] text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-subtle mb-6 before:content-[''] before:w-4 before:h-px before:bg-subtle before:shrink-0">
            La diferencia
          </span>
          <blockquote className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold text-fg leading-[1.25] tracking-[-0.025em] mb-10 border-none p-0 m-0">
            &ldquo;Una web bien hecha no es un gasto. Es el comercial que
            trabaja{" "}
            <em className="not-italic italic text-accent-light">
              mientras tú duermes.
            </em>
            &rdquo;
          </blockquote>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 bg-transparent text-accent-light text-[0.85rem] font-semibold px-[1.35rem] py-[0.65rem] rounded-[10px] border border-accent-border no-underline transition-[background,border-color,transform] duration-[180ms] hover:bg-accent-dim hover:border-[rgba(139,92,246,0.4)] hover:-translate-y-px"
          >
            Quiero esa web →
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-col border-l border-border pl-12 max-md:border-l-0 max-md:pl-0 max-md:border-t max-md:border-t-border max-md:pt-8">
          {STATS.map((s) => (
            <div key={s.n} className="py-[1.35rem] border-b border-border last:border-b-0">
              <span className="block text-[2.2rem] font-bold text-accent-light tracking-[-0.04em] leading-none mb-1">
                {s.n}
              </span>
              <span className="block text-[0.82rem] text-muted leading-[1.5]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
