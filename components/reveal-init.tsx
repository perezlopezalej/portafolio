"use client"

import { useEffect } from "react"

export function RevealInit() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("rv-in"), i * 55)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.06 },
    )
    document.querySelectorAll("[data-rv]").forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
