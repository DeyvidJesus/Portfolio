import { Reveal } from './Reveal';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: ['React 19', 'Next.js (SSR/SSG)', 'TypeScript', 'TanStack Router/Query', 'Tailwind CSS', 'Design Systems', 'Acessibilidade', 'SEO/Performance']
  },
  {
    title: 'Backend & Dados',
    items: ['Node.js', 'Java · Spring Boot', 'Python · FastAPI', 'Microsserviços', 'APIs REST e GraphQL', 'Autenticação JWT', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'DevOps & Arquitetura',
    items: ['Docker', 'Nginx', 'CI/CD', 'VPS Linux', 'Observabilidade', 'Infraestrutura como código', 'LGPD', 'ISO 38500']
  },
  {
    title: 'Processos & Qualidade',
    items: ['Documentação técnica', 'Padronização de código', 'Metodologias ágeis', 'Testing (unitário e integração)', 'Code Review', 'Mentoria técnica']
  }
];

export function Skills() {
  return (
    <section id="habilidades" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-x-6 top-16 -z-10 h-[420px] rounded-[36px] bg-light-layer opacity-90 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-12 top-24 -z-10 hidden h-[420px] rounded-[32px] bg-gradient-to-r from-charcoal/85 via-midnight/80 to-charcoal/85 blur-3xl dark:block" />
      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-slate-900 dark:text-white">Stack & Habilidades</h2>
          <p className="section-subtitle">
            Tecnologia para entregar soluções robustas, performáticas e fáceis de evoluir.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
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
