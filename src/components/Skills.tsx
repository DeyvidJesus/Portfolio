import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'Stack & Skills',
    subtitle: 'Core technologies used across backend, frontend, and infrastructure.',
    groups: [
      {
        title: 'Frontend',
        items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Tailwind CSS']
      },
      {
        title: 'Backend & Data',
        items: ['Java (Spring Boot)', 'Node.js', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB']
      },
      {
        title: 'Infrastructure & Tooling',
        items: ['Docker', 'Git & GitHub', 'CI/CD', 'Google Cloud Platform (GCP)']
      }
    ]
  },
  pt: {
    title: 'Stack & Habilidades',
    subtitle: 'Tecnologias centrais usadas em backend, frontend e infraestrutura.',
    groups: [
      {
        title: 'Frontend',
        items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SASS', 'Tailwind CSS']
      },
      {
        title: 'Backend & Dados',
        items: ['Java (Spring Boot)', 'Node.js', 'GraphQL', 'APIs REST', 'PostgreSQL', 'MongoDB']
      },
      {
        title: 'Infraestrutura & Ferramentas',
        items: ['Docker', 'Git & GitHub', 'CI/CD', 'Google Cloud Platform (GCP)']
      }
    ]
  }
};

export function Skills() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="habilidades" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-x-6 top-16 -z-10 h-[420px] rounded-[36px] bg-light-layer opacity-90 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-12 top-24 -z-10 hidden h-[420px] rounded-[32px] bg-gradient-to-r from-charcoal/85 via-midnight/80 to-charcoal/85 blur-3xl dark:block" />
      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-slate-900 dark:text-white">{content.title}</h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {content.groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 120}>
            <div className="glass-panel relative h-full overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-aurora backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-card">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700 dark:text-slate/90">
                {group.items.map(item => (
                  <li
                    key={item}
                    className="rounded-full border border-aurora/20 bg-white/80 px-3 py-1 text-xs uppercase tracking-wide text-aurora/80 shadow-[0_12px_24px_-18px_rgba(31,157,109,0.65)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-neon/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
