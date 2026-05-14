export function Footer() {
  return (
    <footer className="bg-bg border-t border-border px-[clamp(1.5rem,5vw,3.5rem)] py-5 flex justify-between items-center flex-wrap gap-3">
      <span className="text-[0.88rem] font-semibold text-muted">
        Alejandro Pérez López
      </span>
      <div className="flex items-center gap-5 flex-wrap">
        <a href="mailto:perezlopezalej@gmail.com" className="text-[0.75rem] text-subtle no-underline transition-colors duration-[180ms] hover:text-fg">
          Email
        </a>
        <a
          href="https://linkedin.com/in/alejandro-perez-lopez"
          target="_blank"
          rel="noopener"
          className="text-[0.75rem] text-subtle no-underline transition-colors duration-[180ms] hover:text-fg"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/perezlopezalej"
          target="_blank"
          rel="noopener"
          className="text-[0.75rem] text-subtle no-underline transition-colors duration-[180ms] hover:text-fg"
        >
          GitHub
        </a>
        <a
          href="#contacto"
          className="text-[0.75rem] text-accent-light font-semibold no-underline transition-colors duration-[180ms] hover:text-fg"
        >
          Contratar →
        </a>
      </div>
      <span className="text-[0.72rem] text-subtle">© 2026 · alejandrodev.es</span>
    </footer>
  )
}
