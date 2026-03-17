import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'About Me',
    description:
      'Software engineer with strong frontend expertise and full-stack experience. I build modern web applications used in production, with emphasis on clean UI implementation, API integration, and reliable delivery.',
    focusAreas: [
      {
        title: 'Production web engineering',
        description: 'Experience delivering production web features across different platforms, including VTEX, Shopify, Wake, and Deco.cx.'
      },
      {
        title: 'Frontend-first, full-stack capable',
        description: 'Daily work with React, TypeScript, HTML, CSS, and SASS, plus backend integrations with Node.js and GraphQL APIs.'
      },
      {
        title: 'Systems and scalability mindset',
        description: 'Focused on architecture decisions, performance improvements, and building scalable systems that evolve with product growth.'
      }
    ],
    stats: [
      { value: 'Mar 2025–Now', label: 'Frontend Developer at Econverse' },
      { value: 'Jun 2024–Mar 2025', label: 'Software Developer Intern at Econverse' },
      { value: 'Full stack', label: 'React · TypeScript · Node.js · GraphQL · Java · Spring Boot' }
    ]
  },
  pt: {
    title: 'Sobre Mim',
    description:
      'Engenheiro de software com forte experiência em frontend e atuação full stack. Desenvolvo aplicações web modernas em produção, com foco em implementação de UI, integração de APIs e entrega confiável.',
    focusAreas: [
      {
        title: 'Engenharia web em produção',
        description: 'Experiência entregando features web em produção em diferentes plataformas, incluindo VTEX, Shopify, Wake e Deco.cx.'
      },
      {
        title: 'Frontend como base, full stack na prática',
        description: 'Atuação diária com React, TypeScript, HTML, CSS e SASS, além de integrações backend com Node.js e GraphQL.'
      },
      {
        title: 'Visão de sistemas e escala',
        description: 'Foco em decisões de arquitetura, melhorias de performance e construção de sistemas escaláveis que evoluem com o produto.'
      }
    ],
    stats: [
      { value: 'mar 2025–atual', label: 'Frontend Developer na Econverse' },
      { value: 'jun 2024–mar 2025', label: 'Estágio em Desenvolvimento na Econverse' },
      { value: 'Full stack', label: 'React · TypeScript · Node.js · GraphQL · Java · Spring Boot' }
    ]
  }
};

export function About() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="resumo" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-x-4 top-10 -z-10 h-[420px] rounded-3xl bg-light-layer opacity-80 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-12 top-20 -z-10 hidden h-[400px] rounded-3xl bg-gradient-to-r from-charcoal/80 via-midnight/80 to-charcoal/80 blur-3xl dark:block" />

      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <h2 className="section-title text-slate-900 dark:text-white">{content.title}</h2>
            <p className="mt-4 text-base text-slate-700 dark:text-slate/90 md:text-lg">
              {content.description}
            </p>
          </div>
          <div className="glass-panel relative grid gap-4 overflow-hidden rounded-2xl p-6 shadow-aurora md:w-80">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
            {content.stats.map(stat => (
              <div key={stat.label}>
                <span className="text-xl font-semibold text-aurora dark:text-neon">{stat.value}</span>
                <p className="text-sm text-slate-700 dark:text-slate/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {content.focusAreas.map((focus, index) => (
          <Reveal key={focus.title} delay={150 * index}>
            <article className="glass-panel relative h-full overflow-hidden rounded-2xl border border-white/60 bg-white/85 p-6 shadow-aurora backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-card">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-aurora via-sunrise to-skyglass dark:from-neon dark:via-emerald-400 dark:to-aurora" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{focus.title}</h3>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate/90">{focus.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
