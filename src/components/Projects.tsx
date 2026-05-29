import { FiArrowUpRight } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

type CaseStudy = {
  title: string;
  label: string;
  problem: string;
  solution: string;
  technologies: string;
  architecture: string[];
  decisions: string[];
  value: string;
  link?: string;
  featured?: boolean;
};

const CONTENT: Record<'en' | 'pt', { title: string; subtitle: string; projects: CaseStudy[] }> = {
  en: {
    title: 'Featured Projects',
    subtitle:
      'Case studies that show product thinking, architecture decisions, backend maturity and the ability to move from problem to shipped software.',
    projects: [
      {
        title: 'GoMech',
        label: 'Main SaaS case study',
        problem:
          'Independent automotive workshops often manage customers, services and operational history through fragmented tools, spreadsheets or manual communication, making follow-up and execution harder to scale.',
        solution:
          'A SaaS platform for workshop operations that centralizes business workflows in a product built with a modern frontend, Java backend services, relational persistence and containerized local environments.',
        technologies: 'React · TypeScript · Java · Spring Boot · PostgreSQL · Docker',
        architecture: [
          'React and TypeScript interface designed around daily workshop workflows and operational clarity.',
          'Spring Boot backend structured around domain flows, API boundaries and service responsibilities.',
          'PostgreSQL relational model for durable operational data and future reporting needs.',
          'Dockerized development environment to keep services reproducible and easier to evolve.'
        ],
        decisions: [
          'Prioritized backend domain modeling before visual polish to validate core business flows first.',
          'Chose Java and Spring Boot to strengthen backend architecture, typed contracts and service scalability.',
          'Designed the project as a SaaS foundation, not a one-off CRUD app, so it can support future modules and cloud deployment.'
        ],
        value:
          'Demonstrates ownership of a real product: problem discovery, product scope, full-stack implementation, backend architecture and a path toward cloud-ready SaaS delivery.',
        featured: true
      },
      {
        title: 'Alerta360',
        label: 'Real-time monitoring platform',
        problem:
          'Operational teams need reliable visibility into events, alerts and system states so they can identify critical situations quickly and respond with context.',
        solution:
          'A real-time monitoring platform built around Java and Spring Boot concepts, emphasizing backend services, event-oriented thinking and clear alert workflows.',
        technologies: 'Java · Spring Boot · REST APIs · Backend Architecture',
        architecture: [
          'Backend-first structure focused on alert ingestion, event representation and service boundaries.',
          'API layer designed to expose monitoring data in predictable formats for dashboards or integrations.',
          'Separation between domain rules and presentation concerns to keep the system extensible.'
        ],
        decisions: [
          'Focused on reliability and backend organization because monitoring systems must be trusted under pressure.',
          'Modeled alerts as operational workflows rather than isolated records to reflect real response processes.',
          'Kept the platform extensible for future notification channels, dashboards and cloud deployment.'
        ],
        value:
          'Shows backend-oriented thinking, Java/Spring Boot growth and the ability to design systems where correctness, observability and response time matter.'
      },
      {
        title: 'Email Signature Creator',
        label: 'Freelance delivery',
        problem:
          'A client needed a practical web tool that lets users create consistent professional email signatures without manual HTML editing or design support.',
        solution:
          'A focused web application that turns user inputs into reusable email signature output with an intuitive generation flow.',
        technologies: 'Web Application · UI Implementation · Client Delivery',
        architecture: [
          'Simple product flow optimized for fast input, preview and output generation.',
          'Reusable interface structure to support common signature fields and visual consistency.',
          'Deployment-ready implementation for direct use by non-technical users.'
        ],
        decisions: [
          'Kept scope focused on the user job-to-be-done instead of overbuilding features.',
          'Prioritized clarity and reliability because the output is used in professional communication.',
          'Delivered as a freelance project, proving client communication and end-to-end execution.'
        ],
        value:
          'Demonstrates ability to understand requirements, ship a usable product and deliver business value outside a purely academic context.',
        link: 'https://emailsignaturecreator.com'
      }
    ]
  },
  pt: {
    title: 'Projetos em Destaque',
    subtitle:
      'Cases que mostram visão de produto, decisões de arquitetura, maturidade backend e capacidade de transformar problema em software entregue.',
    projects: [
      {
        title: 'GoMech',
        label: 'Principal case SaaS',
        problem:
          'Oficinas mecânicas independentes frequentemente gerenciam clientes, serviços e histórico operacional com ferramentas fragmentadas, planilhas ou comunicação manual, dificultando acompanhamento e escala.',
        solution:
          'Plataforma SaaS para operações de oficina que centraliza fluxos de negócio em um produto com frontend moderno, serviços backend em Java, persistência relacional e ambiente containerizado.',
        technologies: 'React · TypeScript · Java · Spring Boot · PostgreSQL · Docker',
        architecture: [
          'Interface em React e TypeScript desenhada para fluxos diários da oficina e clareza operacional.',
          'Backend Spring Boot estruturado em torno de domínios, fronteiras de API e responsabilidades de serviço.',
          'Modelo relacional em PostgreSQL para dados operacionais duráveis e futuras necessidades de relatórios.',
          'Ambiente Dockerizado para manter serviços reproduzíveis e mais fáceis de evoluir.'
        ],
        decisions: [
          'Priorização de modelagem de domínio backend antes de polimento visual para validar os principais fluxos de negócio.',
          'Escolha de Java e Spring Boot para fortalecer arquitetura backend, contratos tipados e escalabilidade de serviços.',
          'Construção como base SaaS, não como CRUD isolado, permitindo módulos futuros e deploy em cloud.'
        ],
        value:
          'Demonstra ownership de produto real: descoberta de problema, escopo, implementação full stack, arquitetura backend e caminho para entrega SaaS cloud-ready.',
        featured: true
      },
      {
        title: 'Alerta360',
        label: 'Plataforma de monitoramento em tempo real',
        problem:
          'Times operacionais precisam de visibilidade confiável sobre eventos, alertas e estados de sistemas para identificar situações críticas rapidamente e responder com contexto.',
        solution:
          'Plataforma de monitoramento em tempo real construída com conceitos de Java e Spring Boot, enfatizando serviços backend, pensamento orientado a eventos e fluxos claros de alerta.',
        technologies: 'Java · Spring Boot · APIs REST · Arquitetura Backend',
        architecture: [
          'Estrutura backend-first focada em ingestão de alertas, representação de eventos e fronteiras de serviço.',
          'Camada de API pensada para expor dados de monitoramento em formatos previsíveis para dashboards ou integrações.',
          'Separação entre regras de domínio e apresentação para manter extensibilidade.'
        ],
        decisions: [
          'Foco em confiabilidade e organização backend porque sistemas de monitoramento precisam ser confiáveis sob pressão.',
          'Modelagem de alertas como fluxos operacionais, não apenas registros isolados.',
          'Estrutura extensível para futuros canais de notificação, dashboards e deploy em cloud.'
        ],
        value:
          'Mostra pensamento backend-oriented, evolução com Java/Spring Boot e capacidade de desenhar sistemas onde corretude, observabilidade e tempo de resposta importam.'
      },
      {
        title: 'Email Signature Creator',
        label: 'Entrega freelance',
        problem:
          'Um cliente precisava de uma ferramenta web prática para criar assinaturas de email profissionais consistentes sem edição manual de HTML ou suporte de design.',
        solution:
          'Aplicação web focada que transforma inputs do usuário em assinaturas reutilizáveis, com um fluxo intuitivo de geração.',
        technologies: 'Aplicação Web · Implementação de UI · Entrega para Cliente',
        architecture: [
          'Fluxo de produto simples otimizado para entrada rápida, preview e geração de saída.',
          'Estrutura de interface reutilizável para campos comuns de assinatura e consistência visual.',
          'Implementação pronta para uso direto por usuários não técnicos.'
        ],
        decisions: [
          'Escopo mantido no job-to-be-done do usuário em vez de excesso de funcionalidades.',
          'Priorização de clareza e confiabilidade porque a saída é usada em comunicação profissional.',
          'Entrega como projeto freelance, provando comunicação com cliente e execução ponta a ponta.'
        ],
        value:
          'Demonstra capacidade de entender requisitos, entregar um produto utilizável e gerar valor fora de um contexto acadêmico.',
        link: 'https://emailsignaturecreator.com'
      }
    ]
  }
};

export function Projects() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="projetos" className="relative mx-auto max-w-[1440px] px-6 py-24" aria-labelledby="projects-title">
      <div className="pointer-events-none absolute inset-x-0 top-14 -z-10 h-[480px] rounded-[40px] bg-light-layer opacity-90 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-10 top-20 -z-10 hidden h-[460px] rounded-[36px] bg-gradient-to-r from-charcoal/80 via-midnight/80 to-charcoal/80 blur-3xl dark:block" />
      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 id="projects-title" className="section-title text-slate-900 dark:text-white">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {content.projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 120}>
            <article className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-6 shadow-aurora backdrop-blur-sm transition hover:-translate-y-1 hover:border-aurora hover:shadow-[0_35px_70px_-35px_rgba(31,157,109,0.55)] dark:border-white/10 dark:bg-white/5 dark:hover:border-neon/40 dark:hover:shadow-glow ${project.featured ? 'lg:col-span-2 lg:p-8' : ''}`}>
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aurora via-emerald-400 to-sunrise opacity-90 transition duration-500 group-hover:scale-x-110 dark:from-neon dark:via-emerald-400 dark:to-aurora" />
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div className="max-w-3xl">
                  <span className="text-sm font-mono uppercase tracking-wide text-aurora/80 dark:text-neon/80">{project.label}</span>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">{project.title}</h3>
                  <p className="mt-4 text-sm font-mono uppercase tracking-wide text-aurora/70 dark:text-neon/70">{project.technologies}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-fit items-center gap-1 rounded-full border border-aurora/20 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-aurora hover:text-aurora dark:border-white/10 dark:text-white dark:hover:border-neon/60 dark:hover:text-neon"
                  >
                    {language === 'en' ? 'View project' : 'Ver projeto'}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>

              <div className={`mt-6 grid gap-5 ${project.featured ? 'lg:grid-cols-2' : ''}`}>
                <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{language === 'en' ? 'Problem' : 'Problema'}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate/85">{project.problem}</p>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{language === 'en' ? 'Solution' : 'Solução'}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate/85">{project.solution}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{language === 'en' ? 'Architecture highlights' : 'Destaques de arquitetura'}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate/80">
                    {project.architecture.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-aurora to-sunrise dark:from-neon dark:to-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{language === 'en' ? 'Engineering decisions' : 'Decisões de engenharia'}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate/80">
                    {project.decisions.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-aurora to-sunrise dark:from-neon dark:to-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <footer className="mt-6 rounded-2xl bg-gradient-to-r from-aurora/10 via-emerald-400/10 to-sunrise/10 p-5 text-sm leading-6 text-slate-700 dark:from-neon/10 dark:via-emerald-400/10 dark:to-aurora/10 dark:text-slate/90">
                <strong className="text-slate-900 dark:text-white">{language === 'en' ? 'Business value: ' : 'Valor de negócio: '}</strong>
                {project.value}
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
