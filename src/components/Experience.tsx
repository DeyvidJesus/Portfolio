import { Reveal } from './Reveal';

const EXPERIENCES = [
  {
    company: 'GoMech',
    role: 'Desenvolvedor Fullstack',
    period: '2024 – atual',
    summary:
      'Responsável por toda a arquitetura do SaaS multi-tenant de gestão de oficinas, cobrindo frontend, backend, IA e infraestrutura.',
    achievements: [
      'Arquitetura completa com módulos de clientes, veículos, estoque, financeiro, conversas, relatórios e IA.',
      'Implementação de microsserviço de IA com agentes SQL, Chat, Router e Charts conectados ao banco principal.',
      'Automação de deploy com Docker, Nginx, VPS e pipelines contínuos, garantindo segurança e escalabilidade.'
    ],
    technologies:
      'React 19, TypeScript, Vite, TanStack Router/Query, Tailwind, Java, Spring Boot, FastAPI, LangChain, PostgreSQL, Docker, Nginx'
  },
  {
    company: 'Econverse',
    role: 'Desenvolvedor Frontend Júnior',
    period: 'mar 2025 – atual',
    summary:
      'Atuação na evolução técnica de plataformas completas como NKStore e Alphabeto, criando experiências performáticas e escaláveis.',
    achievements: [
      'Reestruturação de componentes, rotas dinâmicas e integrações internas com foco em performance.',
      'Construção de APIs e serviços Node.js para automações e comunicação entre módulos.',
      'Entrega de landing pages otimizadas para SEO, responsividade e carregamento rápido.'
    ],
    technologies: 'React, Next.js, TypeScript, Node.js, Tailwind, SASS, arquitetura SPA/SSR'
  },
  {
    company: 'Econverse',
    role: 'Estagiário em Desenvolvimento Frontend',
    period: 'jun 2024 – mar 2025',
    summary:
      'Suporte no desenvolvimento de interfaces e componentes reutilizáveis para projetos de médio e grande porte.',
    achievements: [
      'Implementação de componentes responsivos em projetos como NKStore e Alphabeto.',
      'Colaboração em fluxos dinâmicos, navegação e integrações com APIs REST.',
      'Desenvolvimento de funcionalidades internas com Node.js seguindo boas práticas de UX.'
    ],
    technologies: 'React, TypeScript, JavaScript, Node.js, HTML5, CSS3, SASS, APIs REST'
  },
  {
    company: 'Projetos Freelancer',
    role: 'Desenvolvedor Frontend',
    period: 'ago 2023 – jun 2024',
    summary:
      'Criação de aplicações, dashboards e landing pages sob medida para clientes de segmentos variados.',
    achievements: [
      'Desenvolvimento end-to-end, da prototipação à publicação.',
      'Implementação de lógicas de negócio, dashboards e integrações personalizadas.',
      'Interfaces responsivas com foco em acessibilidade, performance e SEO.'
    ],
    technologies: 'React, TypeScript, Tailwind, PHP, MySQL, HTML, CSS'
  }
];

export function Experience() {
  return (
    <section id="experiencias" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-y-0 left-4 -z-10 hidden w-2 rounded-full bg-gradient-to-b from-aurora/50 via-sunrise/40 to-skyglass/40 dark:block" />
      <div className="pointer-events-none absolute inset-x-10 top-12 -z-20 h-[720px] rounded-3xl bg-white/70 blur-3xl dark:hidden" />

      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-slate-900 dark:text-white">Experiências Profissionais</h2>
          <p className="section-subtitle">
            Liderança técnica, evolução arquitetural e entrega de produtos completos para diferentes contextos de negócio.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 space-y-10 border-l border-slate-200/70 dark:border-white/10 pl-6 md:pl-10">
        {EXPERIENCES.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.role}`} delay={index * 120}>
            <article className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-aurora backdrop-blur-sm transition hover:-translate-y-1 hover:border-aurora hover:shadow-[0_35px_60px_-35px_rgba(31,157,109,0.55)] dark:border-white/10 dark:bg-white/5 dark:hover:border-neon/40 dark:hover:shadow-glow">
              <span className="absolute -left-3 top-6 h-5 w-5 rounded-full border-4 border-white bg-gradient-to-br from-aurora to-sunrise shadow-[0_10px_30px_-12px_rgba(31,157,109,0.8)] dark:border-charcoal dark:bg-aurora dark:shadow-glow" />
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {experience.role}
                  <span className="ml-2 text-base font-normal text-aurora dark:text-neon">@ {experience.company}</span>
                </h3>
                <span className="text-sm font-mono uppercase tracking-wide text-slate-600 dark:text-slate/80">{experience.period}</span>
              </div>

              <p className="mt-4 text-sm text-slate-700 dark:text-slate/90 md:text-base">{experience.summary}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate/80">
                  {experience.achievements.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-aurora to-sunrise dark:from-neon dark:to-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>

              <p className="mt-4 text-xs font-mono uppercase tracking-wide text-aurora/80 dark:text-neon/80">
                {experience.technologies}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
