"use client"

import { useState } from "react"

const FAQS = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Depende del alcance. Las webs y landings empiezan desde 800€, los e-commerce y sistemas de reservas desde 1.000€–1.500€, y las apps web más completas desde 2.000€. Siempre te mando un presupuesto cerrado en 24 horas, sin sorpresas ni letra pequeña.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Una web o landing: 7–10 días. Un e-commerce o sistema de reservas: 2–3 semanas. Un proyecto a medida más completo: 3–6 semanas. Te doy el plazo exacto antes de empezar y lo cumplo.",
  },
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. Me encargo de todo — diseño, desarrollo, hosting y puesta en marcha. Tú me dices qué quieres conseguir y yo lo hago realidad. Al entregar te explico cómo funciona en 10 minutos.",
  },
  {
    q: "¿Puedo ver el diseño antes de pagar?",
    a: "Sí. Primero te presento el diseño completo para que lo apruebes. Solo después empiezo el desarrollo. Si algo no te convence, lo cambiamos antes de seguir adelante.",
  },
  {
    q: "¿Qué pasa después de lanzar?",
    a: "El proyecto es tuyo al 100% — código, dominio y hosting. Ofrezco mantenimiento mensual para quien lo necesite, pero no es obligatorio. Y para cualquier duda posterior, siempre puedes contactarme directamente.",
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <div className="section-alt">
      <div className="max-w-275 mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-22">
        <p className="eyebrow" data-rv>07 — Preguntas frecuentes</p>
        <h2 data-rv className="section-title mb-9">
          Resuelvo tus dudas.
        </h2>

        <div data-rv className="flex flex-col gap-1.5">
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              className={`faq-item bg-surface border rounded-[10px] overflow-hidden transition-[border-color] duration-180 ${open === i ? "open border-border-2" : "border-border"}`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex items-center justify-between px-5 py-4 cursor-pointer w-full text-left gap-4 transition-colors duration-180 hover:bg-surface-2"
              >
                <span className="text-[0.9rem] font-semibold text-fg-2 leading-[1.4] transition-colors duration-180 hover:text-fg">
                  {f.q}
                </span>
                <svg className="faq-chevron w-3 h-3 text-subtle shrink-0" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l4 4 4-4"/></svg>
              </button>
              <div className="faq-body">
                <p className="text-[0.85rem] text-muted leading-[1.75] px-5 pb-4">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
