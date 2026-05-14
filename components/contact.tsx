"use client"

import { useState } from "react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    try {
      const res = await fetch("https://formspree.io/f/xgodrjyr", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("sent")
        form.reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        throw new Error()
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const btnLabel =
    status === "sending"
      ? "Enviando..."
      : status === "sent"
        ? "✓ Enviado — te respondo antes de 24h"
        : status === "error"
          ? "Error al enviar — inténtalo de nuevo"
          : "Enviar y recibir presupuesto →"

  return (
    <section
      id="contacto"
      className="bg-bg-alt border-t border-border px-[clamp(1.5rem,5vw,3.5rem)] py-[5.5rem]"
    >
      <div data-rv className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="ct-eyebrow eyebrow">08 — Contacto</p>
            <h2 className="section-title mb-4">
              ¿Listo para un proyecto que{" "}
              <em className="not-italic italic text-accent-light">
                funcione de verdad?
              </em>
            </h2>
            <p className="text-[0.9rem] text-muted leading-[1.75] mb-8">
              Cuéntame tu idea. En menos de 24 horas tienes presupuesto sin
              compromiso y sin letra pequeña.
            </p>
            <div className="flex flex-col">
              {[
                {
                  href: "mailto:perezlopezalej@gmail.com",
                  label: "perezlopezalej@gmail.com",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[1rem] h-[1rem] shrink-0">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
                {
                  href: "https://wa.me/34600000000",
                  label: "WhatsApp directo",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1rem] h-[1rem] shrink-0">
                      <path d="M20.52 3.48A11.93 11.93 0 0012.01 0C5.38 0 0 5.38 0 12.01a11.9 11.9 0 001.61 6.02L0 24l6.13-1.6a11.93 11.93 0 005.88 1.53c6.62 0 12-5.38 12-12.01a11.9 11.9 0 00-3.49-8.44zM12.01 21.97a9.94 9.94 0 01-5.07-1.39l-.36-.21-3.74.98 1-3.64-.24-.38a9.95 9.95 0 01-1.52-5.33C2.08 6.5 6.55 2.03 12.01 2.03a9.95 9.95 0 017.07 2.93 9.93 9.93 0 012.92 7.06c0 5.46-4.47 9.95-9.99 9.95zm5.46-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com/in/alejandro-perez-lopez",
                  label: "LinkedIn — Alejandro Pérez López",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[1rem] h-[1rem] shrink-0">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: "https://github.com/perezlopezalej",
                  label: "GitHub — perezlopezalej",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-[1rem] h-[1rem] shrink-0">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener" : undefined}
                  className="flex items-center gap-3 text-[0.83rem] text-muted no-underline py-3 border-b border-border transition-[color] duration-200 hover:text-fg last:border-b-0"
                >
                  <span className="text-accent-light">{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-0">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-[0.35rem]">
                <label className="text-[0.67rem] font-semibold tracking-[0.08em] uppercase text-subtle">
                  Tu nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="María García"
                  required
                  className="cf-input"
                />
              </div>
              <div className="flex flex-col gap-[0.35rem]">
                <label className="text-[0.67rem] font-semibold tracking-[0.08em] uppercase text-subtle">
                  Tu email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="maria@empresa.com"
                  required
                  className="cf-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[0.35rem] mb-4">
              <label className="text-[0.67rem] font-semibold tracking-[0.08em] uppercase text-subtle">
                Tu empresa o proyecto
              </label>
              <input
                type="text"
                name="negocio"
                placeholder="Ej: Restaurante en Conil, startup de reservas, app de gestión..."
                className="cf-input"
              />
            </div>

            <div className="flex flex-col gap-[0.35rem] mb-5">
              <label className="text-[0.67rem] font-semibold tracking-[0.08em] uppercase text-subtle">
                ¿Qué necesitas?
              </label>
              <textarea
                name="mensaje"
                placeholder="Cuéntame el proyecto y qué quieres conseguir. Cuanta más info, mejor presupuesto podré darte."
                rows={4}
                className="cf-input resize-none"
              />
            </div>

            <input type="hidden" name="_subject" value="Nuevo proyecto desde alejandrodev.es" />

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full bg-accent text-white text-[0.88rem] font-semibold border-none px-6 py-3 rounded-[10px] cursor-pointer transition-[opacity,transform] duration-[180ms] hover:opacity-90 hover:-translate-y-px active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                boxShadow: "0 2px 12px rgba(139,92,246,0.3)",
                background: status === "sent" ? "#16a34a" : status === "error" ? "#dc2626" : undefined,
              }}
            >
              {btnLabel}
            </button>
            <p className="text-[0.7rem] text-subtle text-center mt-2.5">
              Sin compromiso · Respondo en menos de 24 horas
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
