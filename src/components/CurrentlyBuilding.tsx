import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'Currently Building',
    subtitle:
      'A transparent view of what I am actively improving so recruiters and engineering managers can understand trajectory, discipline and technical direction.',
    items: [
      {
        title: 'GoMech SaaS product',
        description: 'Building the product foundation for workshop operations with React, TypeScript, Java, Spring Boot, PostgreSQL and Docker.',
        outcome: 'Shows ownership, full-stack execution and product thinking.'
      },
      {
        title: 'AWS Cloud Practitioner preparation',
        description: 'Studying cloud fundamentals, AWS services, shared responsibility, pricing, availability and deployment vocabulary.',
        outcome: 'Supports stronger collaboration on cloud-ready systems and production infrastructure.'
      },
      {
        title: 'Java and Spring Boot evolution',
        description: 'Deepening backend architecture skills through service design, persistence, API contracts and operational patterns.',
        outcome: 'Strengthens the backend-oriented full-stack positioning.'
      },
      {
        title: 'Cloud engineering studies',
        description: 'Connecting Docker, deployment fundamentals, observability concepts and architecture tradeoffs for SaaS applications.',
        outcome: 'Builds readiness for modern product-company engineering environments.'
      }
    ]
  },
  pt: {
    title: 'Construindo Agora',
    subtitle:
      'Uma visão transparente do que estou evoluindo ativamente para que recrutadores e líderes técnicos entendam trajetória, disciplina e direção técnica.',
    items: [
      {
        title: 'Produto SaaS GoMech',
        description: 'Construção da base do produto para operações de oficinas com React, TypeScript, Java, Spring Boot, PostgreSQL e Docker.',
        outcome: 'Mostra ownership, execução full stack e visão de produto.'
      },
      {
        title: 'Preparação AWS Cloud Practitioner',
        description: 'Estudo de fundamentos cloud, serviços AWS, responsabilidade compartilhada, pricing, disponibilidade e vocabulário de deploy.',
        outcome: 'Apoia colaboração mais forte em sistemas cloud-ready e infraestrutura de produção.'
      },
      {
        title: 'Evolução em Java e Spring Boot',
        description: 'Aprofundamento em arquitetura backend com desenho de serviços, persistência, contratos de API e padrões operacionais.',
        outcome: 'Fortalece o posicionamento full stack orientado a backend.'
      },
      {
        title: 'Estudos de engenharia cloud',
        description: 'Conexão entre Docker, fundamentos de deploy, observabilidade e tradeoffs de arquitetura para aplicações SaaS.',
        outcome: 'Constrói prontidão para ambientes modernos de engenharia em empresas de produto.'
      }
    ]
  }
};

export function CurrentlyBuilding() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="construindo" className="relative mx-auto max-w-[1440px] px-6 py-24" aria-labelledby="building-title">
      <div className="pointer-events-none absolute inset-x-10 top-12 -z-10 h-[420px] rounded-[36px] bg-light-layer opacity-80 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-16 top-20 -z-10 hidden h-[420px] rounded-[36px] bg-gradient-to-r from-charcoal/80 via-midnight/80 to-charcoal/80 blur-3xl dark:block" />

      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 id="building-title" className="section-title text-slate-900 dark:text-white">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {content.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <article className="relative flex h-full flex-col rounded-2xl border border-white/70 bg-white/85 p-6 shadow-aurora backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-card">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-aurora/70 dark:text-neon/70">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-700 dark:text-slate/90">{item.description}</p>
              <p className="mt-5 border-t border-slate-200/70 pt-4 text-xs leading-5 text-slate-600 dark:border-white/10 dark:text-slate/80">
                {item.outcome}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
