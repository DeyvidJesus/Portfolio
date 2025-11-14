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
    title: 'NKStore Commerce',
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
    title: 'Alphabeto Experience',
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
    <section id="projetos" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-white">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Produtos end-to-end, evolução de e-commerces de alta demanda e automações que conectam times e processos.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 120}>
            <article className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-neon/40 hover:shadow-glow">
              <div>
                <span className="text-sm font-mono uppercase tracking-wide text-neon/80">{project.company}</span>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate/90">{project.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate/80">
                  {project.achievements.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <footer className="mt-6 flex items-center justify-between text-xs font-mono uppercase tracking-wide text-neon/70">
                <span>{project.stack}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-white transition hover:text-neon"
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
