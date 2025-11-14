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
            <div className="glass-panel h-full rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700 dark:text-slate/90">
                {group.items.map(item => (
                  <li key={item} className="rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-aurora/80 dark:text-neon/80">
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
