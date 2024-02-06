export function Main() {
  return (
    <section id="Home" className="max-w-full sm:w-screen flex sm:flex-col sm:h-[32rem] items-center sm:justify-center sm:bg-[url('/background.svg')] bg-cover bg-fixed lg:h-screen">
      <h1 className="sm:text-xl lg:text-2xl font-serif text-dark-gray font-medium text-center">Olá, eu sou o <strong className="sm:text-3xl md:text-4xl font-sansSerif">Deyvid!</strong></h1>
      <h2 className="font-serif font-semibold text-royal-blue text-xl sm:my-2">Desenvolvedor Web</h2>
      <div className="flex sm:flex-col lg:flex-row justify-around lg:w-1/4 items-center sm:h-48 lg:h-24">
        <a href="/Deyvid Gondim - Curriculo.pdf" target="_blank" download className="bg-royal-blue lg:h-14 flex sm:p-2 lg:p-3 rounded text-white font-semibold items-center justify-between sm:w-44 lg:w-36 cursor-pointer">Baixar CV
          <img src="/downloadIcon.svg" alt="Ícone de download" className="sm:w-6 sm:h-6" />
        </a>
        <a href="mailto:deyvidgondim@outlook.com" className="bg-white border-2 lg:h-14 border-royal-blue flex sm:p-2 lg:p-3 rounded text-black font-semibold items-center justify-between sm:w-44 lg:w-36">E-mail
          <img src="/emailIcon.svg" alt="Ícone de e-mail" className="sm:w-6 sm:h-6" />
        </a>
      </div>
      <div className="flex justify-around items-center">
        <a href="https://github.com/DeyvidJesus" target="_blank"><img src="/githubIcon.svg" alt="Ícone do Github" className="sm:w-10 sm:h- mr-4" /></a>
        <a href="https://www.linkedin.com/in/deyvid-g/" target="_blank"><img src="/linkedinIcon.svg" alt="Ícone do Linkedin" className="sm:w-10 sm:h-10 ml-4" /></a>
      </div>
    </section>
  );
}