import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { Reveal } from './Reveal';

const HIGHLIGHTS = [
  {
    label: 'SaaS multi-tenant end-to-end',
    description: 'Arquitetura completa, microsserviços de IA, deploy em Docker/Nginx e governança técnica.'
  },
  {
    label: 'APIs e microsserviços escaláveis',
    description: 'Domínio de React, Next.js, Java, Spring Boot, Node.js e Python para produtos prontos para produção.'
  },
  {
    label: 'Governança & performance',
    description: 'CI/CD, observabilidade, LGPD, ISO 38500 e práticas de segurança aplicadas em projetos reais.'
  }
];

export function Main() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-pattern opacity-60" />
      <div className="absolute -left-10 top-16 h-64 w-64 rounded-full bg-aurora/30 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-neon/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-6 pb-24 pt-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm font-medium text-neon">
            Desenvolvedor Fullstack · Arquitetura distribuída
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Construo experiências digitais completas — do design da interface aos microsserviços em produção.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-3xl text-lg text-slate/90 md:text-xl">
            Eu ajudo empresas a lançarem e escalarem produtos. Lidero arquiteturas modernas, crio interfaces de alta performance e integro serviços confiáveis em ambientes conteinerizados.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:deyvidgondim.dev@gmail.com"
              className="group flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-base font-semibold text-charcoal transition hover:bg-neon"
            >
              Vamos construir juntos
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="/Deyvid Gondim - Curriculo.pdf"
              download
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-neon/60 hover:text-neon"
            >
              Baixar CV
              <FiDownload className="transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((highlight, index) => (
            <Reveal key={highlight.label} delay={400 + index * 120}>
              <div className="glass-panel flex h-full flex-col gap-3 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white">{highlight.label}</h3>
                <p className="text-sm text-slate/90">{highlight.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
