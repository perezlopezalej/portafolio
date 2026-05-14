export function WaFloat() {
  return (
    <a
      href="https://wa.me/34600000000?text=Hola%20Alejandro%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto%20web"
      className="wa-float"
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative flex items-center justify-center shrink-0">
        <span className="text-[1.15rem] leading-none block">💬</span>
        <span className="wa-pulse" />
      </div>
      <span className="whitespace-nowrap leading-none hidden sm:block">Hablemos por WhatsApp</span>
    </a>
  )
}
