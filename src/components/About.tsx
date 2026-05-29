import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'Positioning Snapshot',
    description:
      'A Software Engineer with production experience, freelance delivery history, fluent English communication and active ownership of a SaaS product. The portfolio is intentionally structured around proof of execution: current work, product case studies, engineering decisions and current technical growth.',
    principles: [
      {
        title: 'Recruiter clarity in 10 seconds',
        description: 'Clear headline, role fit, main stack and availability for mid-level Full Stack Software Engineer opportunities.'
      },
      {
        title: 'Engineering manager confidence',
        description: 'Experience and projects emphasize production constraints, API integration, backend architecture and delivery tradeoffs.'
      },
      {
        title: 'Product-company relevance',
        description: 'Project storytelling focuses on problems, users, business value and decisions instead of long technology lists.'
      }
    ],
    stats: [
      { value: 'Software Engineer', label: 'Current role at Econverse' },
      { value: 'SaaS Builder', label: 'Building GoMech end-to-end' },
      { value: 'Fluent English', label: 'Ready for national and distributed teams' }
    ]
  },
  pt: {
    title: 'Resumo de Posicionamento',
    description:
      'Engenheiro de Software com experiência em produção, histórico de entregas freelance, inglês fluente e ownership ativo na construção de um produto SaaS. O portfólio foi estruturado para provar execução: trabalho atual, cases de produto, decisões de engenharia e evolução técnica.',
    principles: [
      {
        title: 'Clareza para recrutadores em 10 segundos',
        description: 'Headline, senioridade-alvo, stack principal e disponibilidade para oportunidades mid-level como Full Stack Software Engineer.'
      },
      {
        title: 'Confiança para líderes técnicos',
        description: 'Experiência e projetos destacam produção, integração de APIs, arquitetura backend e decisões de entrega.'
      },
      {
        title: 'Relevância para empresas de produto',
        description: 'Storytelling dos projetos prioriza problemas, usuários, valor de negócio e decisões em vez de listas extensas de tecnologia.'
      }
    ],
    stats: [
      { value: 'Software Engineer', label: 'Cargo atual na Econverse' },
      { value: 'SaaS Builder', label: 'Construindo o GoMech de ponta a ponta' },
      { value: 'Inglês fluente', label: 'Pronto para times nacionais e distribuídos' }
    ]
  }
};

export function About() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="resumo" className="relative mx-auto max-w-[1440px] px-6 py-24" aria-labelledby="summary-title">
      <div className="pointer-events-none absolute inset-x-4 top-10 -z-10 h-[420px] rounded-3xl bg-light-layer opacity-80 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-12 top-20 -z-10 hidden h-[400px] rounded-3xl bg-gradient-to-r from-charcoal/80 via-midnight/80 to-charcoal/80 blur-3xl dark:block" />

      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-aurora dark:text-neon">
              {language === 'en' ? 'Portfolio strategy' : 'Estratégia do portfólio'}
            </span>
            <h2 id="summary-title" className="section-title mt-3 text-slate-900 dark:text-white">{content.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate/90 md:text-lg">
              {content.description}
            </p>
          </div>
          <aside className="glass-panel relative grid gap-4 overflow-hidden rounded-2xl p-6 shadow-aurora" aria-label={language === 'en' ? 'Profile highlights' : 'Destaques do perfil'}>
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
            {content.stats.map(stat => (
              <div key={stat.label}>
                <span className="text-xl font-semibold text-aurora dark:text-neon">{stat.value}</span>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate/90">{stat.label}</p>
              </div>
            ))}
          </aside>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {content.principles.map((principle, index) => (
          <Reveal key={principle.title} delay={150 * index}>
            <article className="glass-panel relative h-full overflow-hidden rounded-2xl border border-white/60 bg-white/85 p-6 shadow-aurora backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-card">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-aurora via-sunrise to-skyglass dark:from-neon dark:via-emerald-400 dark:to-aurora" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate/90">{principle.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
