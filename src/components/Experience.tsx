import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'Professional Experience',
    subtitle:
      'Backend ownership, architecture, and production delivery across SaaS and enterprise ecommerce.',
    experiences: [
      {
        company: 'GoMech',
        role: 'Co-Founder & Software Engineer',
        period: 'Jul 2025 – present',
        summary:
          'Co-founded the product and owned the technical architecture for an automotive service management SaaS.',
        achievements: [
          'Built backend services with Java and Spring Boot.',
          'Implemented authentication, authorization, and core business logic.',
          'Designed and maintained PostgreSQL data models.',
          'Built frontend applications with React and TypeScript.',
          'Deployed services with Docker on cloud/VPS infrastructure.',
          'Owned technical decisions, feature delivery, and system evolution.'
        ],
        technologies:
          'Java · Spring Boot · PostgreSQL · React · TypeScript · Docker'
      },
      {
        company: 'Econverse',
        role: 'Frontend / Full Stack Developer',
        period: 'Mar 2025 – present',
        summary:
          'Worked on an enterprise ecommerce platform, building frontend and backend features for production applications.',
        achievements: [
          'Developed and maintained high-traffic production applications.',
          'Built and integrated backend services with Node.js and GraphQL.',
          'Worked extensively with React, Next.js, and TypeScript.',
          'Improved performance, reliability, and developer experience.',
          'Collaborated with product, backend, and business teams.',
          'Participated in code reviews and agile ceremonies.'
        ],
        technologies: 'React · Next.js · TypeScript · Node.js · GraphQL · SASS · Tailwind CSS'
      },
      {
        company: 'Econverse',
        role: 'Frontend Developer Intern',
        period: 'Jun 2024 – Mar 2025',
        summary:
          'Built UI components and integrated APIs as part of agile delivery.',
        achievements: [
          'Built responsive UI components with React, HTML, CSS, and SASS.',
          'Integrated REST APIs.',
          'Worked in agile teams (planning, reviews, retrospectives).'
        ],
        technologies: 'React · JavaScript · HTML · CSS · SASS · REST APIs'
      }
    ]
  },
  pt: {
    title: 'Experiências Profissionais',
    subtitle:
      'Ownership de backend, arquitetura e entrega em produção em SaaS e ecommerce enterprise.',
    experiences: [
      {
        company: 'GoMech',
        role: 'Co-Fundador & Engenheiro de Software',
        period: 'jul 2025 – atual',
        summary:
          'Co-fundei o produto e assumi a arquitetura técnica de um SaaS de gestão automotiva.',
        achievements: [
          'Construí serviços backend com Java e Spring Boot.',
          'Implementei autenticação, autorização e lógica de negócio.',
          'Modelei e mantive dados relacionais em PostgreSQL.',
          'Desenvolvi aplicações frontend com React e TypeScript.',
          'Realizei deploys com Docker em infraestrutura cloud/VPS.',
          'Assumi decisões técnicas, entrega de features e evolução do sistema.'
        ],
        technologies:
          'Java · Spring Boot · PostgreSQL · React · TypeScript · Docker'
      },
      {
        company: 'Econverse',
        role: 'Desenvolvedor Frontend / Full Stack',
        period: 'mar 2025 – atual',
        summary:
          'Atuação em plataforma enterprise de ecommerce com entregas frontend e backend em produção.',
        achievements: [
          'Desenvolvi e mantive aplicações de alto tráfego em produção.',
          'Construí e integrei serviços backend com Node.js e GraphQL.',
          'Trabalhei com React, Next.js e TypeScript.',
          'Melhorei performance, confiabilidade e experiência de desenvolvimento.',
          'Colaborei com times de produto, backend e negócio.',
          'Participei de code reviews e cerimônias ágeis.'
        ],
        technologies: 'React · Next.js · TypeScript · Node.js · GraphQL · SASS · Tailwind CSS'
      },
      {
        company: 'Econverse',
        role: 'Estagiário em Desenvolvimento Frontend',
        period: 'jun 2024 – mar 2025',
        summary:
          'Construção de componentes de UI e integrações com APIs em times ágeis.',
        achievements: [
          'Criei componentes responsivos com React, HTML, CSS e SASS.',
          'Integrei APIs REST.',
          'Atuei em times ágeis (planning, reviews, retrospectives).'
        ],
        technologies: 'React · JavaScript · HTML · CSS · SASS · APIs REST'
      }
    ]
  }
};

export function Experience() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="experiencias" className="relative mx-auto max-w-[1440px] px-6 py-24">
      <div className="pointer-events-none absolute inset-y-0 left-4 -z-10 hidden w-2 rounded-full bg-gradient-to-b from-aurora/50 via-sunrise/40 to-skyglass/40 dark:block" />
      <div className="pointer-events-none absolute inset-x-10 top-12 -z-20 h-[720px] rounded-3xl bg-white/70 blur-3xl dark:hidden" />

      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-slate-900 dark:text-white">{content.title}</h2>
          <p className="section-subtitle">
            {content.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="mt-12 space-y-10 border-l border-slate-200/70 dark:border-white/10 pl-6 md:pl-10">
        {content.experiences.map((experience, index) => (
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
