import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'Experience',
    subtitle:
      'Production software engineering experience across ecommerce, headless commerce storefronts, API integrations and customer-facing web applications.',
    experiences: [
      {
        company: 'Econverse',
        role: 'Software Engineer',
        period: 'Mar 2025 – present',
        summary:
          'Build and maintain production web applications for multiple brands, working across React, Next.js, TypeScript, GraphQL and Node.js integrations in commerce environments.',
        impact: [
          'Deliver customer-facing features in production with attention to performance, responsiveness, accessibility and integration reliability.',
          'Work with headless commerce and storefront platforms including VTEX, FastStore, Shopify, Wake and Deco.cx.',
          'Connect frontend experiences to GraphQL and Node.js services, translating business requirements into resilient implementation plans.',
          'Participate in technical discussions with clients and internal teams to scope feasible delivery paths and reduce implementation risk.'
        ],
        stack: 'React · Next.js · TypeScript · GraphQL · Node.js · VTEX · FastStore · Shopify · Wake · Deco.cx',
        focus: 'Production delivery · Headless commerce · API integration · UI performance'
      },
      {
        company: 'Econverse',
        role: 'Software Developer Intern',
        period: 'Jun 2024 – Mar 2025',
        summary:
          'Contributed to client application delivery by building reusable interfaces, integrating APIs and learning production engineering practices inside a commerce-focused software team.',
        impact: [
          'Built reusable UI components with HTML, CSS, JavaScript, React and TypeScript.',
          'Integrated web interfaces with backend APIs and platform services.',
          'Collaborated with engineers on client-focused features, QA feedback and delivery iteration.',
          'Developed a foundation in production code review, cross-browser behavior and maintainable frontend architecture.'
        ],
        stack: 'React · TypeScript · JavaScript · HTML · CSS · SASS · APIs',
        focus: 'Reusable UI · API integration · Production collaboration'
      }
    ]
  },
  pt: {
    title: 'Experiência',
    subtitle:
      'Experiência em engenharia de software em produção com ecommerce, storefronts headless commerce, integrações via API e aplicações web para usuários reais.',
    experiences: [
      {
        company: 'Econverse',
        role: 'Software Engineer',
        period: 'mar 2025 – atual',
        summary:
          'Construção e manutenção de aplicações web em produção para múltiplas marcas, atuando com React, Next.js, TypeScript, GraphQL e integrações Node.js em ambientes de comércio.',
        impact: [
          'Entrega de funcionalidades voltadas ao usuário final com atenção a performance, responsividade, acessibilidade e confiabilidade de integrações.',
          'Atuação com headless commerce e plataformas de storefront como VTEX, FastStore, Shopify, Wake e Deco.cx.',
          'Conexão de experiências frontend com serviços GraphQL e Node.js, transformando requisitos de negócio em planos de implementação resilientes.',
          'Participação em discussões técnicas com clientes e times internos para definir caminhos viáveis de entrega e reduzir risco de implementação.'
        ],
        stack: 'React · Next.js · TypeScript · GraphQL · Node.js · VTEX · FastStore · Shopify · Wake · Deco.cx',
        focus: 'Entrega em produção · Headless commerce · Integração de APIs · Performance de UI'
      },
      {
        company: 'Econverse',
        role: 'Software Developer Intern',
        period: 'jun 2024 – mar 2025',
        summary:
          'Contribuição em entregas de aplicações para clientes através da construção de interfaces reutilizáveis, integração com APIs e aprendizado de práticas de engenharia em produção.',
        impact: [
          'Construção de componentes reutilizáveis com HTML, CSS, JavaScript, React e TypeScript.',
          'Integração de interfaces web com APIs backend e serviços de plataforma.',
          'Colaboração com engenheiros em features para clientes, ajustes de QA e iterações de entrega.',
          'Desenvolvimento de base em code review, comportamento cross-browser e arquitetura frontend sustentável.'
        ],
        stack: 'React · TypeScript · JavaScript · HTML · CSS · SASS · APIs',
        focus: 'UI reutilizável · Integração de APIs · Colaboração em produção'
      }
    ]
  }
};

export function Experience() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="experiencias" className="relative mx-auto max-w-[1440px] px-6 py-24" aria-labelledby="experience-title">
      <div className="pointer-events-none absolute inset-y-0 left-4 -z-10 hidden w-2 rounded-full bg-gradient-to-b from-aurora/50 via-sunrise/40 to-skyglass/40 dark:block" />
      <div className="pointer-events-none absolute inset-x-10 top-12 -z-20 h-[720px] rounded-3xl bg-white/70 blur-3xl dark:hidden" />

      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 id="experience-title" className="section-title text-slate-900 dark:text-white">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-12 space-y-8 border-l border-slate-200/70 pl-6 dark:border-white/10 md:pl-10">
        {content.experiences.map((experience, index) => (
          <Reveal key={`${experience.company}-${experience.role}`} delay={index * 120}>
            <article className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-aurora backdrop-blur-sm transition hover:-translate-y-1 hover:border-aurora hover:shadow-[0_35px_60px_-35px_rgba(31,157,109,0.55)] dark:border-white/10 dark:bg-white/5 dark:hover:border-neon/40 dark:hover:shadow-glow">
              <span className="absolute -left-3 top-6 h-5 w-5 rounded-full border-4 border-white bg-gradient-to-br from-aurora to-sunrise shadow-[0_10px_30px_-12px_rgba(31,157,109,0.8)] dark:border-charcoal dark:bg-aurora dark:shadow-glow" />
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {experience.role}
                    <span className="ml-2 text-base font-normal text-aurora dark:text-neon">@ {experience.company}</span>
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate/80">{experience.focus}</p>
                </div>
                <span className="text-sm font-mono uppercase tracking-wide text-slate-600 dark:text-slate/80">{experience.period}</span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate/90 md:text-base">{experience.summary}</p>

              <ul className="mt-5 grid gap-3 text-sm text-slate-700 dark:text-slate/80 md:grid-cols-2">
                {experience.impact.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-aurora to-sunrise dark:from-neon dark:to-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs font-mono uppercase tracking-wide text-aurora/80 dark:text-neon/80">
                {experience.stack}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
