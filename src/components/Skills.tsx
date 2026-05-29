import { Reveal } from './Reveal';
import { useLanguage } from '../hooks/useLanguage';

const CONTENT = {
  en: {
    title: 'Engineering Focus',
    subtitle:
      'The portfolio now organizes skills around engineering capability areas that matter to product teams, not percentage bars or isolated keywords.',
    areas: [
      {
        title: 'Backend architecture',
        description: 'Service boundaries, domain modeling, relational data, Java/Spring Boot evolution and API reliability.',
        proof: 'GoMech and Alerta360 emphasize backend-first decisions and maintainable service design.'
      },
      {
        title: 'API design and integration',
        description: 'GraphQL, REST, Node.js integrations, typed frontend contracts and resilient data flows.',
        proof: 'Production commerce work at Econverse connects user experiences to platform and backend services.'
      },
      {
        title: 'SaaS development',
        description: 'Multi-module product thinking, user workflows, billing-ready foundations, deployment concerns and iteration.',
        proof: 'GoMech is positioned as a SaaS product with durable architecture rather than a portfolio demo.'
      },
      {
        title: 'Cloud systems',
        description: 'AWS Cloud Practitioner preparation, Dockerized environments, deployment fundamentals and cloud architecture vocabulary.',
        proof: 'Current study path supports future cloud-ready product delivery and infrastructure collaboration.'
      },
      {
        title: 'Product engineering',
        description: 'Business problem framing, usable interfaces, technical tradeoffs and shipping increments that reduce user friction.',
        proof: 'Projects describe problem, solution, decisions and business value so hiring teams see judgment, not only stack.'
      },
      {
        title: 'Scalable applications',
        description: 'Performance-aware React/Next.js work, maintainable TypeScript, data contracts and systems that can evolve.',
        proof: 'Econverse experience proves production delivery across platforms with real users and commerce constraints.'
      }
    ]
  },
  pt: {
    title: 'Foco de Engenharia',
    subtitle:
      'O portfólio organiza habilidades por capacidades de engenharia relevantes para times de produto, sem barras de porcentagem ou palavras-chave soltas.',
    areas: [
      {
        title: 'Arquitetura backend',
        description: 'Fronteiras de serviço, modelagem de domínio, dados relacionais, evolução com Java/Spring Boot e confiabilidade de APIs.',
        proof: 'GoMech e Alerta360 destacam decisões backend-first e desenho de serviços sustentáveis.'
      },
      {
        title: 'Design e integração de APIs',
        description: 'GraphQL, REST, integrações Node.js, contratos tipados no frontend e fluxos de dados resilientes.',
        proof: 'A atuação em produção na Econverse conecta experiências de usuário a plataformas e serviços backend.'
      },
      {
        title: 'Desenvolvimento SaaS',
        description: 'Visão de produto multi-módulo, workflows de usuário, base preparada para evolução, deploy e iteração.',
        proof: 'GoMech é posicionado como produto SaaS com arquitetura durável, não como demo de portfólio.'
      },
      {
        title: 'Sistemas cloud',
        description: 'Preparação AWS Cloud Practitioner, ambientes Dockerizados, fundamentos de deploy e vocabulário de arquitetura cloud.',
        proof: 'A trilha atual de estudos apoia entregas cloud-ready e colaboração com infraestrutura.'
      },
      {
        title: 'Product engineering',
        description: 'Enquadramento de problema de negócio, interfaces usáveis, tradeoffs técnicos e entregas incrementais que reduzem atrito.',
        proof: 'Projetos descrevem problema, solução, decisões e valor de negócio para evidenciar julgamento, não só stack.'
      },
      {
        title: 'Aplicações escaláveis',
        description: 'React/Next.js com atenção a performance, TypeScript sustentável, contratos de dados e sistemas evolutivos.',
        proof: 'A experiência na Econverse prova entrega em produção entre plataformas com usuários reais e restrições de comércio.'
      }
    ]
  }
};

export function Skills() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section id="foco" className="relative mx-auto max-w-[1440px] px-6 py-24" aria-labelledby="focus-title">
      <div className="pointer-events-none absolute inset-x-6 top-16 -z-10 h-[420px] rounded-[36px] bg-light-layer opacity-90 blur-2xl dark:hidden" />
      <div className="pointer-events-none absolute inset-x-12 top-24 -z-10 hidden h-[420px] rounded-[32px] bg-gradient-to-r from-charcoal/85 via-midnight/80 to-charcoal/85 blur-3xl dark:block" />
      <Reveal>
        <div className="flex flex-col gap-4">
          <h2 id="focus-title" className="section-title text-slate-900 dark:text-white">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.areas.map((area, index) => (
          <Reveal key={area.title} delay={index * 90}>
            <article className="glass-panel relative h-full overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-aurora backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-card">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate/90">{area.description}</p>
              <p className="mt-5 rounded-2xl border border-aurora/15 bg-white/60 p-4 text-xs leading-5 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate/80">
                <strong className="text-aurora dark:text-neon">{language === 'en' ? 'Proof: ' : 'Prova: '}</strong>
                {area.proof}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
