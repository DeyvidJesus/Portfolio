import { FiArrowUpRight } from 'react-icons/fi';
import { Reveal } from './Reveal';

type Project = {
  title: string;
  company: string;
  description: string;
  achievements: string[];
  stack: string;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: 'GoMech Platform',
    company: 'GoMech',
    description:
      'SaaS multi-tenant completo para gestão de oficinas com módulos administrativos, operações, comunicação e relatórios inteligentes.',
    achievements: [
      'Arquitetura fullstack com React 19, Vite, TanStack, Java/Spring Boot e PostgreSQL.',
      'Microsserviço de IA para análises SQL, conversas contextuais e relatórios visuais.',
      'Infraestrutura conteinerizada com Docker, Nginx, pipelines contínuos e governança ISO/LGPD.'
    ],
    stack: 'React · TypeScript · TanStack · Java · Spring Boot · FastAPI · LangChain · PostgreSQL · Docker · Nginx'
  },
  {
    title: 'NKStore',
    company: 'Econverse',
    description:
      'E-commerce escalável com arquitetura modular, componentes reutilizáveis e foco em performance e SEO.',
    achievements: [
      'Refatoração de componentes críticos, rotas dinâmicas e integrações internas.',
      'Automação de fluxos com serviços Node.js e padronização de código.',
      'Melhorias de SEO, acessibilidade e métricas Core Web Vitals.'
    ],
    stack: 'Next.js · React · TypeScript · Node.js · Tailwind · SASS · APIs internas'
  },
  {
    title: 'Alphabeto',
    company: 'Econverse',
    description:
      'Experiência digital completa com vitrines personalizadas, integrações internas e fluxo de conteúdo dinâmico.',
    achievements: [
      'Criação de componentes escaláveis alinhados ao design system.',
      'Integrações com APIs internas e serviços de conteúdo.',
      'Landing pages institucionais com carregamento rápido e responsividade total.'
    ],
    stack: 'React · Next.js · TypeScript · Node.js · Tailwind · SEO'
  },
  {
    title: 'Automations & Dashboards',
    company: 'Projetos Freelancer',
    description:
      'Soluções personalizadas para clientes corporativos envolvendo dashboards, landing pages e integrações.',
    achievements: [
      'Automação de fluxos de dados com Node.js, PHP e Python.',
      'Integração com serviços de pagamento, CRM e mensageria.',
      'Design responsivo com foco em acessibilidade e UX.'
    ],
    stack: 'React · TypeScript · Tailwind · PHP · MySQL · Automação com Node.js/Python'
  }
];

export function Projects() {
  return (
    <section id="projetos" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-14 -z-10 h-[480px] rounded-[40px] bg-light-layer opacity-90 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-10 top-20 -z-10 hidden h-[460px] rounded-[36px] bg-gradient-to-r from-charcoal/80 via-midnight/80 to-charcoal/80 blur-3xl dark:block" />
      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-slate-900 dark:text-white">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Produtos end-to-end, evolução de e-commerces de alta demanda e automações que conectam times e processos.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 120}>
            <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-aurora backdrop-blur-sm transition hover:-translate-y-1 hover:border-aurora hover:shadow-[0_35px_70px_-35px_rgba(31,157,109,0.55)] dark:border-white/10 dark:bg-white/5 dark:hover:border-neon/40 dark:hover:shadow-glow">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aurora via-emerald-400 to-sunrise opacity-90 transition duration-500 group-hover:scale-x-110 dark:from-neon dark:via-emerald-400 dark:to-aurora" />
              <div>
                <span className="text-sm font-mono uppercase tracking-wide text-aurora/80 dark:text-neon/80">{project.company}</span>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate/90">{project.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate/80">
                  {project.achievements.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-aurora to-sunrise dark:from-neon dark:to-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <footer className="mt-6 flex items-center justify-between text-xs font-mono uppercase tracking-wide text-aurora/70 dark:text-neon/70">
                <span>{project.stack}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-slate-900 transition hover:text-aurora dark:text-white dark:hover:text-neon"
                  >
                    Ver projeto
                    <FiArrowUpRight />
                  </a>
                )}
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
