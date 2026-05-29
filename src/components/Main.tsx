import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { Reveal } from './Reveal';
import type { MouseEvent } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const HERO = {
  en: {
    eyebrow: 'Deyvid Gondim',
    title: 'Software Engineer building scalable products.',
    statement:
      'Backend-oriented Full Stack Engineer working with React, Next.js, TypeScript, GraphQL and Node.js in production, while building SaaS systems with Java, Spring Boot, PostgreSQL and Docker.',
    availability: 'Open to mid-level Full Stack Software Engineer opportunities in product, SaaS, fintech and startup teams.',
    cta: 'Contact me',
    download: 'Download Resume',
    filename: 'Deyvid-Gondim-Resume.pdf',
    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    highlights: [
      {
        label: 'Production engineer',
        description: 'Shipping and maintaining real commerce experiences at Econverse across API-driven storefronts.'
      },
      {
        label: 'SaaS builder',
        description: 'Building GoMech end-to-end with product workflows, backend services, data modeling and deployment concerns.'
      },
      {
        label: 'Product-minded execution',
        description: 'Translates business problems into practical architecture, usable interfaces and incremental delivery.'
      }
    ]
  },
  pt: {
    eyebrow: 'Deyvid Gondim',
    title: 'Engenheiro de Software construindo produtos escaláveis.',
    statement:
      'Engenheiro Full Stack com orientação a backend, atuando com React, Next.js, TypeScript, GraphQL e Node.js em produção, enquanto construo sistemas SaaS com Java, Spring Boot, PostgreSQL e Docker.',
    availability: 'Aberto a oportunidades mid-level como Full Stack Software Engineer em times de produto, SaaS, fintechs e startups.',
    cta: 'Entrar em contato',
    download: 'Baixar CV',
    filename: 'Deyvid-Gondim-Curriculo.pdf',
    technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    highlights: [
      {
        label: 'Engenharia em produção',
        description: 'Entrega e manutenção de experiências reais de comércio na Econverse em storefronts orientadas por APIs.'
      },
      {
        label: 'SaaS builder',
        description: 'Construção do GoMech de ponta a ponta com fluxos de produto, backend, modelagem de dados e deploy.'
      },
      {
        label: 'Execução com visão de produto',
        description: 'Transformo problemas de negócio em arquitetura prática, interfaces usáveis e entregas incrementais.'
      }
    ]
  }
};

export function Main() {
  const { language } = useLanguage();
  const content = HERO[language];

  const downloadResume = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const publicFilename = '/resume.pdf';
    const encoded = encodeURI(publicFilename);

    try {
      const res = await fetch(encoded);
      if (!res.ok) {
        window.open(encoded, '_blank');
        return;
      }

      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = content.filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(encoded, '_blank');
    }
  };

  return (
    <section id="inicio" className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white/80 via-skyglass/40 to-transparent dark:from-transparent dark:via-transparent dark:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-pattern opacity-30 dark:opacity-60" />
      <div className="absolute -left-10 top-16 hidden h-64 w-64 rounded-full bg-aurora/20 blur-3xl dark:block" />
      <div className="absolute -right-10 bottom-10 hidden h-64 w-64 rounded-full bg-neon/20 blur-3xl dark:block" />

      <div className="mx-auto grid min-h-screen max-w-[1440px] items-center gap-10 px-6 pb-24 pt-32 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-5xl">
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-aurora dark:text-neon">
              {content.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 id="hero-title" className="mt-5 max-w-6xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 dark:text-white md:text-6xl lg:text-7xl">
              {content.title}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700 dark:text-slate/90 md:text-xl">
              {content.statement}
            </p>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-4 max-w-3xl text-sm font-medium text-slate-600 dark:text-slate/80 md:text-base">
              {content.availability}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:deyvidgondim@outlook.com?subject=Software%20Engineering%20Opportunity"
                className="group flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-base font-semibold text-white transition hover:bg-aurora/90 focus:outline-none focus:ring-2 focus:ring-aurora focus:ring-offset-2 focus:ring-offset-night dark:text-charcoal dark:hover:bg-neon"
              >
                {content.cta}
                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </a>
              <a
                href={encodeURI('/resume.pdf')}
                onClick={downloadResume}
                download={content.filename}
                className="group flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_18px_38px_-28px_rgba(31,157,109,0.6)] backdrop-blur-sm transition hover:border-aurora hover:text-aurora focus:outline-none focus:ring-2 focus:ring-aurora focus:ring-offset-2 focus:ring-offset-night dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-neon/60 dark:hover:text-neon"
              >
                {content.download}
                <FiDownload className="transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={350}>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label={language === 'en' ? 'Main technologies' : 'Principais tecnologias'}>
              {content.technologies.map(technology => (
                <li key={technology} className="rounded-full border border-aurora/20 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-aurora shadow-[0_12px_24px_-18px_rgba(31,157,109,0.65)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-neon/90">
                  {technology}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="grid gap-4">
          {content.highlights.map((highlight, index) => (
            <Reveal key={highlight.label} delay={400 + index * 120}>
              <article className="glass-panel relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-aurora backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-card">
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
                <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{highlight.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate/90">{highlight.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
