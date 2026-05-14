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
                { href: "mailto:perezlopezalej@gmail.com", label: "perezlopezalej@gmail.com" },
                { href: "https://wa.me/34600000000", label: "WhatsApp directo" },
                { href: "https://linkedin.com/in/alejandro-perez-lopez", label: "LinkedIn — Alejandro Pérez López" },
                { href: "https://github.com/perezlopezalej", label: "GitHub — perezlopezalej" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener" : undefined}
                  className="flex items-center gap-[9px] text-[0.83rem] text-muted no-underline py-3 border-b border-border transition-[color,gap] duration-[180ms] hover:text-fg last:border-b-0 before:content-['↗'] before:text-accent-light before:text-[0.82rem] before:shrink-0"
                >
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
