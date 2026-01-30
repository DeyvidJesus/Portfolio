import { FiArrowUpRight } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

type Project = {
  title: string;
  company: string;
  description: string;
  achievements: string[];
  stack: string;
  link?: string;
};

const CONTENT: Record<'en' | 'pt', { title: string; subtitle: string; projects: Project[] }> = {
  en: {
    title: 'Featured Projects',
    subtitle:
      'SaaS and enterprise ecommerce projects with production backend and frontend delivery.',
    projects: [
      {
        title: 'GoMech',
        company: 'GoMech',
        description:
          'SaaS product for automotive service management with backend ownership and full stack delivery.',
        achievements: [
          'Owned technical architecture and system evolution.',
          'Built Java and Spring Boot backend services with authentication, authorization, and core business logic.',
          'Designed and maintained PostgreSQL data models.',
          'Built React and TypeScript frontend applications.',
          'Deployed services with Docker on cloud/VPS infrastructure.'
        ],
        stack: 'Java · Spring Boot · PostgreSQL · React · TypeScript · Docker'
      },
      {
        title: 'Econverse Platform',
        company: 'Econverse',
        description:
          'Enterprise ecommerce platform with production frontend and backend development.',
        achievements: [
          'Developed and maintained high-traffic production applications.',
          'Built and integrated backend services with Node.js and GraphQL.',
          'Worked extensively with React, Next.js, and TypeScript.',
          'Improved performance, reliability, and developer experience.',
          'Collaborated with product, backend, and business teams.',
          'Participated in code reviews and agile ceremonies.'
        ],
        stack: 'React · Next.js · TypeScript · Node.js · GraphQL · SASS · Tailwind CSS'
      }
    ]
  },
  pt: {
    title: 'Projetos em Destaque',
    subtitle:
      'Projetos SaaS e ecommerce enterprise com entrega em produção de backend e frontend.',
    projects: [
      {
        title: 'GoMech',
        company: 'GoMech',
        description:
          'Produto SaaS para gestão automotiva com ownership de backend e entrega full stack.',
        achievements: [
          'Assumi arquitetura técnica e evolução do sistema.',
          'Construí serviços backend em Java e Spring Boot com autenticação, autorização e lógica de negócio.',
          'Modelei e mantive dados relacionais em PostgreSQL.',
          'Desenvolvi aplicações frontend em React e TypeScript.',
          'Realizei deploys com Docker em infraestrutura cloud/VPS.'
        ],
        stack: 'Java · Spring Boot · PostgreSQL · React · TypeScript · Docker'
      },
      {
        title: 'Plataforma Econverse',
        company: 'Econverse',
        description:
          'Plataforma enterprise de ecommerce com entregas frontend e backend em produção.',
        achievements: [
          'Desenvolvi e mantive aplicações de alto tráfego em produção.',
          'Construí e integrei serviços backend com Node.js e GraphQL.',
          'Trabalhei com React, Next.js e TypeScript.',
          'Melhorei performance, confiabilidade e experiência de desenvolvimento.',
          'Colaborei com times de produto, backend e negócio.',
          'Participei de code reviews e cerimônias ágeis.'
        ],
        stack: 'React · Next.js · TypeScript · Node.js · GraphQL · SASS · Tailwind CSS'
      }
    ]
  }
};

export function Projects() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="projetos" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-14 -z-10 h-[480px] rounded-[40px] bg-light-layer opacity-90 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-10 top-20 -z-10 hidden h-[460px] rounded-[36px] bg-gradient-to-r from-charcoal/80 via-midnight/80 to-charcoal/80 blur-3xl dark:block" />
      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-slate-900 dark:text-white">{content.title}</h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {content.projects.map((project, index) => (
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
                    {language === 'en' ? 'View project' : 'Ver projeto'}
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
