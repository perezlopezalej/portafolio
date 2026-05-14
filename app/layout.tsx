import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/nav"
import { WaFloat } from "@/components/wa-float"
import { RevealInit } from "@/components/reveal-init"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Alejandro Pérez · Desarrollador Web Full Stack — Webs que generan negocio",
  description:
    "Desarrollador web full stack en Cádiz. Diseño y desarrollo webs, e-commerce, sistemas de reservas y apps web que traen clientes reales. Proyectos desde 800€.",
  keywords:
    "desarrollador web freelance Cádiz, diseño web profesional Andalucía, full stack developer, crear web empresa, landing page profesional, sistema reservas online",
  authors: [{ name: "Alejandro Pérez López" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://alejandrodev.es",
    title: "Alejandro Pérez · Webs que generan negocio",
    description:
      "Desarrollador web full stack. Webs profesionales, e-commerce y apps web que traen clientes reales.",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Pérez · Desarrollador Web Full Stack",
    description: "Webs, e-commerce y apps web que generan negocio real. Cádiz, Andalucía.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://alejandrodev.es/#person",
                  name: "Alejandro Pérez López",
                  jobTitle: "Full Stack Developer",
                  url: "https://alejandrodev.es",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Conil de la Frontera",
                    addressRegion: "Cádiz",
                    addressCountry: "ES",
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://alejandrodev.es/#business",
                  name: "Alejandro Pérez · Desarrollo Web",
                  description:
                    "Diseño y desarrollo de webs profesionales, e-commerce y apps web para empresas y negocios.",
                  url: "https://alejandrodev.es",
                  email: "perezlopezalej@gmail.com",
                  priceRange: "€€€",
                  areaServed: ["Conil de la Frontera", "Cádiz", "Andalucía", "España"],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Conil de la Frontera",
                    addressRegion: "Cádiz",
                    addressCountry: "ES",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg text-fg antialiased overflow-x-hidden" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <RevealInit />
        <WaFloat />
        <Nav />
        {children}
      </body>
    </html>
  )
}
