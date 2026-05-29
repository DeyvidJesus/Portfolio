import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

export function Contact() {
  const { language } = useLanguage();
  const content = {
    en: {
      eyebrow: 'For recruiters and hiring managers',
      title: 'Looking for a Full Stack Software Engineer who can own product work?',
      description:
        'I am interested in national opportunities with product companies, SaaS companies, fintechs and technology startups. I bring production React/Next.js and TypeScript experience, API integration practice, backend growth with Java and Spring Boot, fluent English and the execution mindset of someone building a SaaS product.',
      cta: 'Email me',
      note: 'Best fit: Full Stack Software Engineer · Software Engineer · Product Engineer · Backend-oriented Full Stack Engineer'
    },
    pt: {
      eyebrow: 'Para recrutadores e hiring managers',
      title: 'Buscando um Full Stack Software Engineer com ownership de produto?',
      description:
        'Tenho interesse em oportunidades nacionais em empresas de produto, SaaS, fintechs e startups de tecnologia. Trago experiência em produção com React/Next.js e TypeScript, prática com integração de APIs, evolução backend com Java e Spring Boot, inglês fluente e mentalidade de execução de quem está construindo um SaaS.',
      cta: 'Enviar email',
      note: 'Melhor fit: Full Stack Software Engineer · Software Engineer · Product Engineer · Backend-oriented Full Stack Engineer'
    }
  }[language];

  return (
    <section id="contato" className="relative mx-auto max-w-[1440px] px-6 py-24" aria-labelledby="contact-title">
      <div className="pointer-events-none absolute inset-x-8 top-12 -z-10 h-[360px] rounded-[32px] bg-light-layer opacity-95 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-12 top-16 -z-10 hidden h-[360px] rounded-[32px] bg-gradient-to-br from-charcoal/90 via-midnight/80 to-charcoal/90 blur-3xl dark:block" />
      <Reveal>
        <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 p-8 text-center shadow-aurora backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:shadow-card md:p-10">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-aurora/70 dark:text-neon/70">{content.eyebrow}</span>
          <h2 id="contact-title" className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-slate-900 dark:text-white md:text-5xl">{content.title}</h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-700 dark:text-slate/90 md:text-lg">
            {content.description}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-aurora dark:text-neon">
            {content.note}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:deyvidgondim@outlook.com?subject=Full%20Stack%20Software%20Engineer%20Opportunity"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora via-emerald-500 to-sunrise px-6 py-3 text-base font-semibold text-white shadow-[0_20px_45px_-28px_rgba(31,157,109,0.75)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-aurora focus:ring-offset-2 focus:ring-offset-night dark:bg-aurora dark:text-charcoal dark:shadow-glow dark:hover:bg-neon"
            >
              <FiMail className="text-lg" aria-hidden="true" />
              {content.cta}
            </a>
            <a
              href="https://github.com/DeyvidJesus"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_18px_35px_-26px_rgba(31,157,109,0.6)] backdrop-blur-sm transition hover:border-aurora hover:text-aurora focus:outline-none focus:ring-2 focus:ring-aurora focus:ring-offset-2 focus:ring-offset-night dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-neon/60 dark:hover:text-neon"
            >
              <FiGithub className="text-lg" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/deyvid-gondim/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_18px_35px_-26px_rgba(31,157,109,0.6)] backdrop-blur-sm transition hover:border-aurora hover:text-aurora focus:outline-none focus:ring-2 focus:ring-aurora focus:ring-offset-2 focus:ring-offset-night dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-neon/60 dark:hover:text-neon"
            >
              <FiLinkedin className="text-lg" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
