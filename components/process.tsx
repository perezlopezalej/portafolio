"use client"

import { useState } from "react"

const STEPS = [
  {
    n: "01",
    title: "Hablamos",
    desc: "Me cuentas el proyecto y tus objetivos. En 24 horas tienes presupuesto cerrado, sin compromiso.",
  },
  {
    n: "02",
    title: "Diseño",
    desc: "Te presento el diseño completo antes de escribir una sola línea de código. Si algo no encaja, lo cambiamos.",
  },
  {
    n: "03",
    title: "Desarrollo",
    desc: "Programo tu proyecto con las mejores tecnologías. Rápido, seguro y optimizado desde el primer día.",
  },
  {
    n: "04",
    title: "Lanzamos",
    desc: "Publicación, pruebas finales y traspaso completo. El proyecto es tuyo al 100%.",
  },
]

export function Process() {
  const [open, setOpen] = useState(0)

  return (
    <div className="max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem]">
      <p className="eyebrow" data-rv>04 — Cómo trabajo</p>
      <h2 data-rv className="section-title">
        Simple, claro y sin rodeos.
      </h2>
      <p data-rv className="text-[0.93rem] text-muted leading-[1.7] max-w-120">
        No necesitas saber de tecnología. Yo me encargo de todo.
      </p>

      {/* Desktop grid */}
      <div data-rv className="hidden md:grid grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr] mt-11 items-stretch">
        {STEPS.flatMap((s, i) => {
          const card = (
            <div
              key={s.n}
              className="group pl-5 border-l-2 border-border rounded-r-[10px] transition-[border-color,background] duration-180 py-6 pr-5 hover:border-l-accent hover:bg-accent-dim"
            >
              <div className="text-[3rem] font-bold tracking-[-0.04em] text-white/[0.04] leading-none mb-[0.4rem] transition-colors duration-180 group-hover:text-[rgba(109,94,247,0.18)]">
                {s.n}
              </div>
              <div className="text-[0.92rem] font-semibold text-fg-2 mb-[0.35rem] transition-colors duration-180 group-hover:text-accent-light">
                {s.title}
              </div>
              <div className="text-[0.8rem] text-muted leading-[1.6]">{s.desc}</div>
            </div>
          )
          if (i < STEPS.length - 1) {
            return [
              card,
              <div key={`conn-${i}`} className="flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-border" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 7h10M9 4l3 3-3 3" />
                </svg>
              </div>,
            ]
          }
          return [card]
        })}
      </div>

      {/* Mobile accordion */}
      <div data-rv className="flex md:hidden flex-col gap-1.5 mt-8">
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className={`proc-acc-item bg-surface border rounded-[10px] overflow-hidden transition-[border-color] duration-180 ${open === i ? "open border-border-2" : "border-border"}`}
          >
            <button
              type="button"
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex items-center gap-[0.85rem] px-[1.1rem] py-[0.85rem] w-full text-left cursor-pointer transition-colors duration-180 hover:bg-surface-2"
            >
              <span className="text-[1.2rem] font-bold text-accent-light w-[26px] shrink-0 leading-none">
                {s.n}
              </span>
              <span className="text-[0.88rem] font-semibold flex-1 text-fg-2">
                {s.title}
              </span>
              <svg className="proc-acc-chevron w-3 h-3 text-subtle shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l4 4 4-4"/></svg>
            </button>
            <div className="proc-acc-body">
              <p className="proc-acc-text text-[0.82rem] text-muted leading-[1.65]" style={{ paddingLeft: "calc(26px + 0.85rem)" }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
