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
    <section id="experiencias" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-white">Experiências Profissionais</h2>
          <p className="section-subtitle">
            Liderança técnica, evolução arquitetural e entrega de produtos completos para diferentes contextos de negócio.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 space-y-10 border-l border-white/10 pl-6 md:pl-10">
        {EXPERIENCES.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.role}`} delay={index * 120}>
            <article className="relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-neon/40 hover:shadow-glow">
              <span className="absolute -left-3 top-6 h-5 w-5 rounded-full border-4 border-charcoal bg-aurora shadow-glow" />
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {experience.role}
                  <span className="ml-2 text-base font-normal text-neon">@ {experience.company}</span>
                </h3>
                <span className="text-sm font-mono uppercase tracking-wide text-slate/80">{experience.period}</span>
              </div>

              <p className="mt-4 text-sm text-slate/90 md:text-base">{experience.summary}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate/80">
                {experience.achievements.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs font-mono uppercase tracking-wide text-neon/80">
                {experience.technologies}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
