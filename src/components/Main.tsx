import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { Reveal } from './Reveal';
import type { MouseEvent } from 'react';

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
  // tenta forçar o download do PDF (fallback para abrir em nova aba)
  const downloadResume = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const publicFilename = '/resume.pdf';
    const encoded = encodeURI(publicFilename);

    try {
      const res = await fetch(encoded);
      if (!res.ok) {
        // fallback: abrir em nova aba
        window.open(encoded, '_blank');
        return;
      }

      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'Deyvid-Gondim-Curriculo.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // se falhar, abre em nova aba
      window.open(encoded, '_blank');
    }
  };

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white/80 via-skyglass/40 to-transparent dark:from-transparent dark:via-transparent dark:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-pattern opacity-30 dark:opacity-60" />
      <div className="absolute -left-8 top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(248,179,123,0.45)_0%,_transparent_60%)] blur-3xl dark:hidden" />
      <div className="absolute -right-6 bottom-12 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(79,209,197,0.35)_0%,_transparent_60%)] blur-3xl dark:hidden" />
      <div className="absolute -left-10 top-16 hidden h-64 w-64 rounded-full bg-aurora/20 blur-3xl dark:block" />
      <div className="absolute -right-10 bottom-10 hidden h-64 w-64 rounded-full bg-neon/20 blur-3xl dark:block" />

      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center gap-12 px-6 pb-24 pt-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-1 text-sm font-medium text-aurora shadow-[0_14px_28px_-22px_rgba(31,157,109,0.65)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-neon">
            Desenvolvedor Fullstack · Arquitetura distribuída
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-6xl text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-6xl">
            Construo experiências digitais completas — do design da interface aos microsserviços em produção.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="max-w-4xl text-lg text-slate-700 dark:text-slate/90 md:text-xl">
            Eu ajudo empresas a lançarem e escalarem produtos. Lidero arquiteturas modernas, crio interfaces de alta performance e integro serviços confiáveis em ambientes conteinerizados.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:deyvidgondim@outlook.com"
              className="group flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-base font-semibold text-white dark:text-charcoal transition hover:bg-aurora/90 dark:hover:bg-neon"
            >
              Vamos construir juntos
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href={encodeURI('/resume.pdf')}
              onClick={downloadResume}
              download="Deyvid-Gondim-Curriculo.pdf"
              className="group flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_18px_38px_-28px_rgba(31,157,109,0.6)] backdrop-blur-sm transition hover:border-aurora hover:text-aurora dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-neon/60 dark:hover:text-neon"
            >
              Baixar CV
              <FiDownload className="transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((highlight, index) => (
            <Reveal key={highlight.label} delay={400 + index * 120}>
              <div className="glass-panel relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-aurora backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-card">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aurora via-emerald-400 to-sunrise dark:from-neon dark:via-emerald-400 dark:to-aurora" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{highlight.label}</h3>
                <p className="text-sm text-slate-700 dark:text-slate/90">{highlight.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
