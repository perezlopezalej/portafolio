"use client"

import { useState, useEffect } from "react"

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })

    const sections = ["servicios", "proyectos", "valor", "sobre-mi", "contacto"]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.25, rootMargin: "-56px 0px -40% 0px" },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
      obs.disconnect()
    }
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 h-14 flex items-center justify-between px-[clamp(1.5rem,5vw,3.5rem)] border-b border-border transition-[box-shadow] duration-200 ${scrolled ? "nav-scrolled" : ""}`}
      style={{
        background: "rgba(11,15,25,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <a
        href="#"
        className="hover-underline text-[0.92rem] font-semibold text-fg flex items-center no-underline tracking-[-0.01em]"
      >
        Alejandro Pérez
      </a>

      <div className="flex items-center gap-0.5">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`hidden sm:block px-3.5 py-1.5 text-[0.82rem] font-medium no-underline transition-colors duration-200 ${
              active === href.slice(1)
                ? "text-fg"
                : "text-muted hover:text-fg-2"
            }`}
          >
            {label}
          </a>
        ))}
        <a
          href="#contacto"
          className="ml-2 px-[0.9rem] py-[0.48rem] rounded-full text-[0.82rem] font-semibold bg-accent text-white no-underline transition-[filter,transform] duration-200 hover:brightness-110 hover:-translate-y-px active:translate-y-0"
          style={{ boxShadow: "0 1px 10px rgba(109,94,247,0.25)" }}
        >
          Contratar →
        </a>
      </div>
    </nav>
  )
}
