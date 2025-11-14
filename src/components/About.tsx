import { Reveal } from './Reveal';

const FOCUS_AREAS = [
  {
    title: 'Arquitetura orientada a produto',
    description:
      'Definição de domínios, modelos de dados, contratos e comunicação entre serviços garantindo escalabilidade e governança técnica.'
  },
  {
    title: 'Experiências web premium',
    description:
      'Componentes reutilizáveis, SSR/SSG com Next.js, design systems e interfaces responsivas otimizadas para performance e SEO.'
  },
  {
    title: 'Automação e observabilidade',
    description:
      'Pipelines CI/CD, monitoramento, logs estruturados, testes e métricas para garantir entregas contínuas com segurança.'
  }
];

const SUMMARY_STATS = [
  { value: '4 produtos', label: 'lançados do zero, com entregas contínuas' },
  { value: '10+ integrações', label: 'entre APIs, microsserviços e automações internas' },
  { value: 'Stack completa', label: 'React · Next.js · Node.js · Python · Java · Spring Boot · Docker' }
];

export function About() {
  return (
    <section id="resumo" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-x-4 top-10 -z-10 h-[420px] rounded-3xl bg-light-layer opacity-80 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-12 top-20 -z-10 hidden h-[400px] rounded-3xl bg-gradient-to-r from-charcoal/80 via-midnight/80 to-charcoal/80 blur-3xl dark:block" />

      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <h2 className="section-title text-slate-900 dark:text-white">Resumo Profissional</h2>
            <p className="mt-4 text-base text-slate-700 dark:text-slate/90 md:text-lg">
              Desenvolvedor fullstack com experiência prática em todo o ciclo de produtos digitais. Lidero arquiteturas distribuídas, construo interfaces modernas e orquestro deploys seguros em ambientes conteinerizados. Atuo tanto em squads multidisciplinares quanto liderando iniciativas de ponta a ponta.
            </p>
          </div>
          <div className="glass-panel relative grid gap-4 overflow-hidden rounded-2xl p-6 shadow-aurora md:w-80">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
            {SUMMARY_STATS.map(stat => (
              <div key={stat.label}>
                <span className="text-xl font-semibold text-aurora dark:text-neon">{stat.value}</span>
                <p className="text-sm text-slate-700 dark:text-slate/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {FOCUS_AREAS.map((focus, index) => (
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
