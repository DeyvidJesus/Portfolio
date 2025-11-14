import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contato" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <Reveal>
        <div className="glass-panel rounded-3xl p-10 text-center">
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-aurora/70 dark:text-neon/70">Próximo passo</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">Vamos acelerar seu próximo produto?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-700 dark:text-slate/90 md:text-lg">
            Estou pronto para apoiar desde a concepção da arquitetura até a implementação de features críticas. Entre em contato para construirmos soluções completas com qualidade, segurança e ritmo de escala.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:deyvidgondim@outlook.com"
              className="group flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-base font-semibold text-white dark:text-charcoal transition hover:bg-aurora/90 dark:hover:bg-neon"
            >
              <FiMail className="text-lg" />
              Falar comigo
            </a>
            <a
              href="https://github.com/DeyvidJesus"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-6 py-3 text-base font-semibold text-slate-900 dark:text-white transition hover:border-aurora dark:hover:border-neon/60 hover:text-aurora dark:hover:text-neon"
            >
              <FiGithub className="text-lg" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/deyvid-gondim/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-6 py-3 text-base font-semibold text-slate-900 dark:text-white transition hover:border-aurora dark:hover:border-neon/60 hover:text-aurora dark:hover:text-neon"
            >
              <FiLinkedin className="text-lg" />
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
