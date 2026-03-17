import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'Professional Experience',
    subtitle:
      'Production engineering experience across ecommerce storefronts, frontend delivery, and API-driven integrations.',
    experiences: [
      {
        company: 'Econverse',
        role: 'Frontend Developer',
        period: 'Mar 2025 – present',
        summary:
          'Develop and maintain storefront applications for multiple ecommerce brands, with focus on production quality, UI performance, and integration reliability.',
        achievements: [
          'Build and maintain features using React, TypeScript, HTML, CSS, and SASS.',
          'Integrate frontend flows with Node.js and GraphQL backend services.',
          'Improve responsiveness, UI consistency, and performance across storefront platforms.',
          'Work across VTEX, Shopify, Wake, and Deco.cx environments.',
          'Lead development for VTEX FastStore clients.',
          'Participate in technical discussions with clients to define feasible implementation strategies.'
        ],
        technologies: 'React · TypeScript · HTML · CSS · SASS · Node.js · GraphQL · VTEX · Shopify · Wake · Deco.cx'
      },
      {
        company: 'Econverse',
        role: 'Software Developer Intern',
        period: 'Jun 2024 – Mar 2025',
        summary:
          'Contributed to ecommerce client deliveries by building frontend components and connecting them to backend APIs.',
        achievements: [
          'Developed storefront UI components with HTML, CSS, and JavaScript.',
          'Built product features with React and TypeScript.',
          'Integrated frontend interfaces with backend APIs.',
          'Collaborated with development teams delivering client-focused ecommerce features.'
        ],
        technologies: 'React · TypeScript · JavaScript · HTML · CSS · SASS · APIs'
      }
    ]
  },
  pt: {
    title: 'Experiências Profissionais',
    subtitle:
      'Experiência em engenharia de software para ecommerce em produção, com entrega frontend e integrações orientadas a APIs.',
    experiences: [
      {
        company: 'Econverse',
        role: 'Desenvolvedor Frontend',
        period: 'mar 2025 – atual',
        summary:
          'Desenvolvimento e manutenção de storefronts para múltiplas marcas de ecommerce, com foco em qualidade de produção, performance de UI e confiabilidade de integrações.',
        achievements: [
          'Construção e manutenção de features com React, TypeScript, HTML, CSS e SASS.',
          'Integração de fluxos frontend com serviços Node.js e GraphQL.',
          'Melhorias de responsividade, consistência de UI e performance entre plataformas.',
          'Atuação nos ecossistemas VTEX, Shopify, Wake e Deco.cx.',
          'Liderança de desenvolvimento para clientes VTEX FastStore.',
          'Participação em discussões técnicas com clientes para definir estratégias de implementação viáveis.'
        ],
        technologies: 'React · TypeScript · HTML · CSS · SASS · Node.js · GraphQL · VTEX · Shopify · Wake · Deco.cx'
      },
      {
        company: 'Econverse',
        role: 'Estagiário em Desenvolvimento de Software',
        period: 'jun 2024 – mar 2025',
        summary:
          'Contribuição em entregas para clientes de ecommerce com construção de componentes frontend e integração com APIs backend.',
        achievements: [
          'Desenvolvimento de componentes de storefront com HTML, CSS e JavaScript.',
          'Construção de funcionalidades com React e TypeScript.',
          'Integração de interfaces frontend com APIs backend.',
          'Colaboração com times de desenvolvimento na entrega de funcionalidades para clientes de ecommerce.'
        ],
        technologies: 'React · TypeScript · JavaScript · HTML · CSS · SASS · APIs'
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
