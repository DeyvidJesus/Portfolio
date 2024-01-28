export function Projects() {
  return (
    <section id="Projects" className="sm:w-full md:w-10/12 flex flex-col items-center">
      <h2 className="font-serif font-semibold my-6 text-3xl border-b-2 border-royal-blue text-center">Experiências</h2>
      <ul>
        <li className="flex flex-col items-center mb-16">
          <div className="flex justify-center bg-white w-5/6 rounded-lg shadow-xl sm:flex-col-reverse lg:flex-row">
            <div className="font-serif font-medium p-7 sm:w-full lg:w-3/5">
              <span className="flex items-center mb-2">
                <h3 className="text-xl font-sansSerif">Nossas Mulheres</h3>
                <img className="w-8 ml-2" src="/laco.svg" alt="" />
              </span>
              <p className="text-justify">Durante o curso técnico, integrei um time de 8 alunos em um projeto para <strong>agilizar a identificação e tratamento do câncer de mama</strong>. Minha contribuição central foi desenvolver a <strong>estrutura e validação dos formulários</strong>, assegurando a <strong>inserção precisa dos dados no banco</strong>. Essa experiência não apenas fortaleceu minha capacidade técnica, mas também ressaltou a importância da <strong>colaboração em equipe</strong> no desenvolvimento web para <strong>otimização de processos de saúde</strong>.</p>
              <p className="text-royal-blue flex my-4">O site foi retirado do ar, após o fim da campanha!</p>
              <ul className="flex justify-around sm:text-sm md:text-md">
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/htmlIcon.svg" alt="" />
                  HTML5
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/cssIcon.svg" alt="" />
                  CSS3
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/phpIcon.svg" alt="" />
                  PHP
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/mysqlIcon.svg" alt="" />
                  MySQL
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/gitIcon.svg" alt="" />
                  Git
                </li>
              </ul>
            </div>
            <div className="sm:w-full sm:h-64 md:h-80 lg:h-auto lg:w-2/5 bg-[url('/nossasMulheres.svg')] bg-cover lg:border-l-2 rounded">
            </div>
          </div>
        </li>
        <li className="flex flex-col items-center mb-16">
          <div className="flex justify-center bg-white w-5/6 rounded-lg shadow-xl sm:flex-col-reverse lg:flex-row">
            <div className="font-serif font-medium p-7 sm:w-full lg:w-3/5">
              <span className="flex items-center mb-2">
                <h3 className="text-xl font-sansSerif">All.do</h3>
                <img className="w-8 ml-2" src="/alldoIcon.svg" alt="" />
              </span>
              <p className="text-justify">Com a capacidade de <strong>criar projetos</strong>, <strong>adicionar tarefas</strong> e personalizar a experiência com <strong>modo claro/escuro</strong>, o all.do visa ajudar na organização diária.
                <br />
                Apesar de ser um projeto individual, integrei <strong>MongoDB</strong> para armazenamento e utilizei <strong>integrações com Github e Facebook para autenticação</strong>. Enfrentei desafios ao aprender novas tecnologias, configurar logins sociais e fazer deploy do aplicativo, resultando em valiosas lições sobre padronização e configuração eficiente.</p>
              <span className="flex">
                <a href="https://all-do.vercel.app" target="_blank" className="link text-royal-blue flex my-4 !mr-6">Site no ar!</a>
                <a href="https://github.com/DeyvidJesus/all.do" target="_blank" className="link text-royal-blue flex my-4">Repositório do projeto</a>
              </span>
              <ul className="flex justify-around sm:text-sm md:text-md">
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/nextIcon.svg" alt="" />
                  NextJS
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/typescriptIcon.svg" alt="" />
                  Typescript
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/mongodbIcon.svg" alt="" />
                  MongoDB
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/tailwindIcon.svg" alt="" />
                  Tailwind
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/gitIcon.svg" alt="" />
                  Git
                </li>
              </ul>
            </div>
            <div className="sm:w-full sm:h-64 md:h-80 lg:h-auto lg:w-2/5 bg-[url('/alldo.svg')] bg-cover lg:border-l-2 rounded"></div>
          </div>
        </li>
        <li className="flex flex-col items-center mb-16">
          <div className="flex justify-center bg-white w-5/6 rounded-lg shadow-xl sm:flex-col-reverse lg:flex-row">
            <div className="font-serif font-medium p-7 sm:w-full lg:w-3/5">
              <span className="flex items-center mb-2">
                <h3 className="text-xl font-sansSerif">Consulado Fitness</h3>
                <img className="w-8 ml-2" src="/consuladoFitnessIcon.png" alt="" />
              </span>
              <p className="text-justify">Desenvolvi um projeto responsável por criar treinos personalizados para os usuários. O destaque é justamente o <strong>algoritmo</strong> responsável pela <strong>geração dos treinos personalizados com base nas informações do usuário</strong> como idade, sexo, preferência de treino e quantidade de treinos semanais. O projeto abrangeu uma <strong>biblioteca de exercícios, perfil do usuário e download de treinos em planilhas Excel</strong>. O site está ativo online, oferecendo aos usuários acesso contínuo a treinos personalizados.</p>
              <span className="flex">
                <a href="http://consuladofitness.atwebpages.com/" target="_blank" className="link text-royal-blue flex my-4 !mr-6">Site no ar!</a>
                <a href="https://github.com/DeyvidJesus/consuladofitness" target="_blank" className="link text-royal-blue flex my-4">Repositório do projeto</a>
              </span>
              <ul className="flex justify-around sm:text-sm md:text-md">
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/htmlIcon.svg" alt="" />
                  HTML5
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/cssIcon.svg" alt="" />
                  CSS3
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/phpIcon.svg" alt="" />
                  PHP
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/javascriptIcon.svg" alt="" />
                  JavaScript
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/mysqlIcon.svg" alt="" />
                  MySQL
                </li>
              </ul>
            </div>
            <div className="sm:w-full sm:h-64 md:h-80 lg:h-auto lg:w-2/5 bg-[url('/consuladoFitness.svg')] bg-cover lg:border-l-2 rounded">
            </div>
          </div>
        </li>
        <li className="flex flex-col items-center mb-16">
          <div className="flex justify-center bg-white w-5/6 rounded-lg shadow-xl sm:flex-col-reverse lg:flex-row">
            <div className="font-serif font-medium p-7 sm:w-full lg:w-3/5">
              <span className="flex items-center mb-2">
                <h3 className="text-xl font-sansSerif">Design Agency</h3>
                <img className="w-8 ml-2" src="/designAgencyIcon.svg" alt="" />
              </span>
              <p className="text-justify">
                A página foi meticulosamente projetada para refletir a identidade inovadora da agência, destacando seu portfólio de forma envolvente e estratégica. Com uma abordagem <strong>reativa, estilo visual impecável e foco na conversão</strong>, a Landing Page se destaca como uma poderosa ferramenta de apresentação, convidando os visitantes a explorar e se envolver com a criatividade única da agência.
              </p>
              <span className="flex">
                <a href="https://ddesign-agency.vercel.app/" target="_blank" className="link text-royal-blue flex my-4 !mr-6">Site no ar!</a>
                <a href="https://github.com/DeyvidJesus/designAgency" target="_blank" className="link text-royal-blue flex my-4">Repositório do projeto</a>
              </span>
              <ul className="flex justify-around sm:text-sm md:text-md">
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/reactIcon.svg" alt="" />
                  React
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/tailwindIcon.svg" alt="" />
                  Tailwind
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/typescriptIcon.svg" alt="" />
                  TypeScript
                </li>
                <li className="flex flex-col items-center">
                  <img className="w-12" src="/gitIcon.svg" alt="" />
                  Git
                </li>
              </ul>
            </div>
            <div className="sm:w-full sm:h-64 md:h-80 lg:h-auto lg:w-2/5 bg-[url('/designAgency.png')] bg-cover lg:border-l-2 rounded">
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
