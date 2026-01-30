import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

export function Contact() {
  const { language } = useLanguage();
  const content = {
    en: {
      eyebrow: 'Next step',
      title: 'Ready to accelerate your next product?',
      description:
        'I’m ready to support everything from architecture design to the implementation of critical features. Reach out so we can build complete solutions with quality, security, and a scaling rhythm.',
      cta: 'Let’s talk'
    },
    pt: {
      eyebrow: 'Próximo passo',
      title: 'Vamos acelerar seu próximo produto?',
      description:
        'Estou pronto para apoiar desde a concepção da arquitetura até a implementação de features críticas. Entre em contato para construirmos soluções completas com qualidade, segurança e ritmo de escala.',
      cta: 'Falar comigo'
    }
  }[language];

  return (
    <section id="contato" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-x-8 top-12 -z-10 h-[360px] rounded-[32px] bg-light-layer opacity-95 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-12 top-16 -z-10 hidden h-[360px] rounded-[32px] bg-gradient-to-br from-charcoal/90 via-midnight/80 to-charcoal/90 blur-3xl dark:block" />
      <Reveal>
        <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-10 text-center shadow-aurora backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:shadow-card">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-aurora/70 dark:text-neon/70">{content.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">{content.title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-700 dark:text-slate/90 md:text-lg">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:deyvidgondim@outlook.com"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora via-emerald-500 to-sunrise px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-28px_rgba(31,157,109,0.75)] transition hover:brightness-110 dark:bg-aurora dark:text-charcoal dark:shadow-glow dark:hover:bg-neon"
            >
              <FiMail className="text-lg" />
              {content.cta}
            </a>
            <a
              href="https://github.com/DeyvidJesus"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_18px_35px_-26px_rgba(31,157,109,0.6)] backdrop-blur-sm transition hover:border-aurora hover:text-aurora dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-neon/60 dark:hover:text-neon"
            >
              <FiGithub className="text-lg" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/deyvid-gondim/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_18px_35px_-26px_rgba(31,157,109,0.6)] backdrop-blur-sm transition hover:border-aurora hover:text-aurora dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-neon/60 dark:hover:text-neon"
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
