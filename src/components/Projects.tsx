export function Projects() {
  return (
    <section id="Projects" className="sm:w-full md:w-10/12 flex flex-col items-center">
      <h2 className="font-serif font-semibold my-6 text-3xl border-b-2 border-royal-blue text-center">Experiências</h2>
      <ul>
        <li className="flex flex-col items-center mb-16">
          <div className="flex justify-center bg-white rounded-lg shadow-xl sm:flex-col-reverse lg:flex-row">
            <div className="font-serif font-medium p-7 sm:w-full lg:w-3/5">
              <span className="flex items-center mb-2">
                <h3 className="text-xl font-sansSerif">Nossas Mulheres</h3>
                <img className="w-8 ml-2" src="/laco.svg" alt="" />
              </span>
              <p className="text-justify">O projeto visava desenvolver um site para inscrições e divulgação de uma campanha de mamografia. Enfrentei dois <strong>principais desafios</strong>: <strong>validar dados</strong> para inserção correta no banco de dados e tornar o <strong>formulário mais intuitivo</strong> para um público mais velho. Para isso, <strong>criei expressões regulares</strong> e funções para validar os campos do formulário como RG e CPF, utilizando <strong>jQuery</strong> para facilitar a <strong>visualização e correção dos dados</strong> através da formatação dos mesmos. Com essas ações e o trabalho de marketing, alcançamos <strong>mais de 2 mil inscrições</strong> e reduzimos a taxa de evasão do site.</p>
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
          <div className="flex justify-center bg-white rounded-lg shadow-xl sm:flex-col-reverse lg:flex-row">
            <div className="font-serif font-medium p-7 sm:w-full lg:w-3/5">
              <span className="flex items-center mb-2">
                <h3 className="text-xl font-sansSerif">All.do</h3>
                <img className="w-8 ml-2" src="/alldoIcon.svg" alt="" />
              </span>
              <p className="text-justify">O projeto foi uma <strong>aplicação web de gerenciamento de tarefas e projetos</strong>, desenvolvida exclusivamente por mim. Enfrentei diversos desafios, incluindo a <strong>criação de rotas de API para operações CRUD</strong>, a implementação de <strong>autenticação social</strong> com o next-auth e o desenvolvimento do <strong>dark/light mode</strong>.

                Após estudar a <strong>documentação do Next.js</strong>, criei e integrei as rotas de API. Para autenticação, configurei contas nos <strong>provedores sociais</strong> e os integrei à aplicação, por fim construi toda a paleta do modo escuro e apliquei a lógica utilizando <strong>contextos</strong> no mesmo. Com isso, consegui integrar a aplicação com um <strong>banco de dados MongoDB</strong>, estabelecendo uma aplicação totalmente funcional.</p>
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
          <div className="flex justify-center bg-white rounded-lg shadow-xl sm:flex-col-reverse lg:flex-row">
            <div className="font-serif font-medium p-7 sm:w-full lg:w-3/5">
              <span className="flex items-center mb-2">
                <h3 className="text-xl font-sansSerif">Consulado Fitness</h3>
                <img className="w-8 ml-2" src="/consuladoFitnessIcon.png" alt="" />
              </span>
              <p className="text-justify">O Consulado Fitness foi um projeto de conclusão de curso desenvolvido por dois desenvolvedores, com o objetivo de criar um <strong>aplicativo que oferecesse treinos personalizados</strong> e uma biblioteca de exercícios para os usuários. Meu principal desafio foi <strong>criar um algoritmo</strong> eficiente <strong>para gerar os treinos</strong> e apresentá-los de forma organizada em tabelas. <strong>Após estruturar o algoritmo</strong> e estudar a documentação do PHP, <strong>implementei as funcionalidades gradualmente e refatorei o código</strong> para melhorar o desempenho. O resultado foi um site intuitivo, permitindo que os usuários acessem treinos de alta qualidade e gerenciem suas informações facilmente, proporcionando uma experiência completa de treinamento físico.</p>
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
          <div className="flex justify-center bg-white rounded-lg shadow-xl sm:flex-col-reverse lg:flex-row">
            <div className="font-serif font-medium p-7 sm:w-full lg:w-3/5">
              <span className="flex items-center mb-2">
                <h3 className="text-xl font-sansSerif">Design Agency</h3>
                <img className="w-8 ml-2" src="/designAgencyIcon.svg" alt="" />
              </span>
              <p className="text-justify">
                É uma <strong>Landing Page</strong> para uma agência de design fictícia, com o propósito de apresentar a empresa. Meu principal desafio foi trabalhar com <strong>responsividade</strong> em todo o projeto, onde foi necessário pensar em como manter o <strong>conteúdo bem distribuído</strong> mesmo em telas menores. Para isso, busquei inspiração em alguns designs e fui aplicando conceitos ao projeto. O resultado foi uma página encantadora que <strong>transmitia a identidade da empresa</strong> independentemente do dispositivo, sempre focando na valorização da marca.
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
