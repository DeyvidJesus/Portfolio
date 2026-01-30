import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'Technical Summary',
    description:
      'Software engineer and full stack developer with a backend focus, working across architecture, backend services, and frontend delivery.',
    focusAreas: [
      {
        title: 'Backend ownership',
        description: 'Java and Spring Boot services, authentication, authorization, and core business logic.'
      },
      {
        title: 'Frontend delivery',
        description: 'React and TypeScript applications with production-focused UI work.'
      },
      {
        title: 'Infrastructure and delivery',
        description: 'Docker deployments, CI/CD workflows, and cloud/VPS environments.'
      }
    ],
    stats: [
      { value: '3+ years', label: 'professional experience' },
      { value: 'Remote-ready', label: 'Brazil · US roles' },
      { value: 'Full stack', label: 'Java · Spring Boot · React · Next.js · PostgreSQL · Docker' }
    ]
  },
  pt: {
    title: 'Resumo Técnico',
    description:
      'Engenheiro de software e desenvolvedor full stack com foco em backend, atuando em arquitetura, serviços backend e entrega frontend.',
    focusAreas: [
      {
        title: 'Ownership de backend',
        description: 'Serviços em Java e Spring Boot, autenticação, autorização e lógica de negócio.'
      },
      {
        title: 'Entrega frontend',
        description: 'Aplicações em React e TypeScript com foco em produção.'
      },
      {
        title: 'Infraestrutura e entrega',
        description: 'Deploys com Docker, fluxos de CI/CD e ambientes cloud/VPS.'
      }
    ],
    stats: [
      { value: '3+ anos', label: 'de experiência profissional' },
      { value: 'Remoto', label: 'Brasil · vagas nos EUA' },
      { value: 'Full stack', label: 'Java · Spring Boot · React · Next.js · PostgreSQL · Docker' }
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
