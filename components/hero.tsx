import Image from "next/image"

export function Hero() {
  return (
    <div className="hero-wrap">
      <section
        id="hero"
        className="relative z-[1] min-h-[calc(100vh-3.5rem)] grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-14 items-center max-w-[1100px] mx-auto px-[clamp(1.5rem,5vw,3.5rem)] py-16 lg:py-20"
      >
        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Eyebrow */}
          <div
            data-rv
            className="inline-flex items-center gap-[7px] text-[0.72rem] font-medium text-muted bg-surface border border-border-2 px-[0.85rem] py-[0.35rem] rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0 dot-blink" />
            Full Stack Developer · Cádiz, Andalucía
          </div>

          {/* Headline */}
          <h1
            data-rv
            className="text-[clamp(3.2rem,5.5vw,5.5rem)] font-extrabold tracking-[-0.045em] leading-[0.97] text-fg mb-4"
          >
            Webs que hacen
            <br />
            <em className="not-italic text-fg-2 font-[500]">crecer tu negocio.</em>
            <br />
            <span className="gradient-text">De verdad.</span>
          </h1>

          {/* Subtitle */}
          <p
            data-rv
            className="text-[0.97rem] text-muted leading-[1.75] max-w-[460px] mb-8"
          >
            Diseño y desarrollo webs, apps y sistemas a medida para negocios que
            quieren{" "}
            <strong className="text-fg-2 font-semibold">
              más clientes, más ventas y más visibilidad
            </strong>{" "}
            — sin depender de terceros ni perder tiempo.
          </p>

          {/* CTAs */}
          <div data-rv className="flex gap-3 items-center flex-wrap mb-10 sm:flex-row flex-col sm:items-start items-stretch">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 bg-accent text-white text-[0.85rem] font-semibold px-[1.35rem] py-[0.65rem] rounded-[10px] no-underline transition-[filter,transform] duration-200 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 text-center justify-center"
              style={{ boxShadow: "0 2px 16px rgba(139,92,246,0.35)" }}
            >
              Hablar de mi proyecto →
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-1.5 bg-transparent text-fg-2 text-[0.85rem] font-medium px-[1.35rem] py-[0.65rem] rounded-[10px] border border-border-2 no-underline transition-colors duration-[180ms] hover:bg-surface-2 hover:border-border-3 hover:text-fg justify-center"
            >
              Ver proyectos
            </a>
          </div>

          {/* Stats row */}
          <div
            data-rv
            className="flex gap-8 pt-7 border-t border-border flex-wrap items-end"
          >
            <div>
              <div className="text-[2rem] font-extrabold tracking-[-0.04em] text-fg leading-none">
                10<span className="text-accent-light">+</span>
              </div>
              <div className="text-[0.7rem] text-subtle mt-[0.4rem] font-medium tracking-[0.02em]">
                Proyectos
              </div>
            </div>
            <div className="w-px h-8 bg-border self-center shrink-0" />
            <div>
              <div className="text-[2rem] font-extrabold tracking-[-0.04em] text-fg leading-none">
                14<span className="text-accent-light">d</span>
              </div>
              <div className="text-[0.7rem] text-subtle mt-[0.4rem] font-medium tracking-[0.02em]">
                Entrega media
              </div>
            </div>
            <div className="w-px h-8 bg-border self-center shrink-0" />
            <div>
              <div className="text-[2rem] font-extrabold tracking-[-0.04em] text-fg leading-none">
                &lt;24<span className="text-accent-light">h</span>
              </div>
              <div className="text-[0.7rem] text-subtle mt-[0.4rem] font-medium tracking-[0.02em]">
                Respuesta
              </div>
            </div>
            <div className="w-px h-8 bg-border self-center shrink-0" />
            <div>
              <div className="text-[2rem] font-extrabold tracking-[-0.04em] text-fg leading-none">
                0<span className="text-accent-light">€</span>
              </div>
              <div className="text-[0.7rem] text-subtle mt-[0.4rem] font-medium tracking-[0.02em]">
                Costes ocultos
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div data-rv className="flex flex-col gap-4">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-[7px] text-[0.72rem] font-medium text-fg-2 bg-surface border border-border-2 px-4 py-[0.4rem] rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0 dot-blink" />
            Disponible para nuevos proyectos
          </div>

          {/* Device mockup */}
          <div
            className="device-wrap rounded-[14px] overflow-hidden border border-border-2 bg-surface-3"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.7)" }}
          >
            {/* Browser chrome */}
            <div className="bg-surface-2 px-3 py-2 flex items-center gap-1.5">
              <span className="w-[9px] h-[9px] rounded-full shrink-0 bg-[#ff5f57]" />
              <span className="w-[9px] h-[9px] rounded-full shrink-0 bg-[#ffbd2e]" />
              <span className="w-[9px] h-[9px] rounded-full shrink-0 bg-[#28c840]" />
              <span className="flex-1 text-center text-[0.6rem] text-subtle bg-surface-3 rounded-[4px] px-2 py-[0.18rem] mx-2 overflow-hidden text-ellipsis whitespace-nowrap">
                tierra-blanca-demo.vercel.app
              </span>
            </div>
            {/* Screen */}
            <div className="overflow-hidden aspect-[16/10] relative">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop"
                alt="Demo web Tierra Blanca"
                fill
                className="device-screen-img"
                sizes="400px"
              />
            </div>
          </div>

          {/* Testimonial card */}
          <div
            className="bg-surface border border-border border-l-[3px] border-l-accent rounded-[14px] p-6"
          >
            <div className="text-[2rem] text-accent leading-[0.4] mb-2.5">&ldquo;</div>
            <p className="text-[0.9rem] italic text-fg-2 leading-[1.65] mb-3.5">
              La web nos trajo 3 clientes nuevos el primer mes. No me lo podía
              creer, la verdad.
            </p>
            <div className="flex items-center gap-[0.65rem]">
              <div
                className="w-[30px] h-[30px] rounded-full shrink-0 bg-accent-dim border border-accent-border flex items-center justify-center text-[0.68rem] font-bold text-accent-light"
              >
                MG
              </div>
              <div>
                <div className="text-[0.8rem] font-semibold text-fg-2">María García</div>
                <div className="text-[0.7rem] text-subtle">La Tasca del Puerto · Conil</div>
              </div>
              <span className="text-amber text-[0.72rem] tracking-[0.04em] ml-auto">★★★★★</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
