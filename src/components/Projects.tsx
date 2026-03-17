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
      'Selected projects highlighting frontend delivery, full-stack implementation, and system design.',
    projects: [
      {
        title: 'GoMech',
        company: 'GoMech',
        description:
          'Full-stack SaaS platform for mechanical workshop management.',
        achievements: [
          'Built backend services with Java and Spring Boot to support workshop operations and business workflows.',
          'Developed a React and TypeScript frontend focused on usability and operational efficiency.',
          'Containerized services with Docker and structured CI/CD pipelines for consistent delivery.',
          'Explored AI-based automations to improve workflow execution and reduce manual tasks.'
        ],
        stack: 'Java · Spring Boot · React · TypeScript · Docker · CI/CD'
      },
      {
        title: 'Email Signature Creator',
        company: 'Freelance Project',
        description:
          'Web application for generating customizable professional email signatures.',
        achievements: [
          'Delivered for an international freelance client with practical customization requirements.',
          'Focused on intuitive UI flows that allow users to generate signatures quickly.',
          'Built the project for direct usability in real communication workflows.'
        ],
        stack: 'Web Application · UI Implementation',
        link: 'https://emailsignaturecreator.com'
      },
      {
        title: 'Fitness Training Generator',
        company: 'Personal Project',
        description:
          'Workout-planning system that generates personalized training plans based on user attributes.',
        achievements: [
          'Designed generation logic to build customized workout routines from input variables.',
          'Structured user profile data and an exercise library to support plan generation.',
          'Built as a practical algorithm-focused project combining product thinking and implementation.'
        ],
        stack: 'Algorithm Design · User Profiles · Workout Generation'
      }
    ]
  },
  pt: {
    title: 'Projetos em Destaque',
    subtitle:
      'Projetos selecionados com foco em entrega frontend, implementação full stack e construção de sistemas.',
    projects: [
      {
        title: 'GoMech',
        company: 'GoMech',
        description:
          'Plataforma SaaS full stack para gestão de oficinas mecânicas.',
        achievements: [
          'Construção de serviços backend com Java e Spring Boot para suportar operações e fluxos de negócio da oficina.',
          'Desenvolvimento do frontend com React e TypeScript com foco em usabilidade e eficiência operacional.',
          'Containerização com Docker e estruturação de pipelines de CI/CD para entregas consistentes.',
          'Exploração de automações com IA para reduzir tarefas manuais e otimizar fluxos.'
        ],
        stack: 'Java · Spring Boot · React · TypeScript · Docker · CI/CD'
      },
      {
        title: 'Email Signature Creator',
        company: 'Projeto Freelance',
        description:
          'Aplicação web para gerar assinaturas de email personalizáveis.',
        achievements: [
          'Entregue para cliente freelance internacional com requisitos práticos de personalização.',
          'Foco em fluxo de interface intuitivo para geração rápida de assinaturas.',
          'Construído para uso direto em cenários reais de comunicação profissional.'
        ],
        stack: 'Aplicação Web · Implementação de UI',
        link: 'https://emailsignaturecreator.com'
      },
      {
        title: 'Fitness Training Generator',
        company: 'Projeto Pessoal',
        description:
          'Sistema de geração de treinos personalizados com base nos atributos do usuário.',
        achievements: [
          'Criação de lógica de geração para montar rotinas customizadas a partir de variáveis de entrada.',
          'Estruturação de perfis de usuário e biblioteca de exercícios para suportar a geração de planos.',
          'Projeto prático com foco em algoritmo, produto e implementação.'
        ],
        stack: 'Design de Algoritmos · Perfis de Usuário · Geração de Treinos'
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
