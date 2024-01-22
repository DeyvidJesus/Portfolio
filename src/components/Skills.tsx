export function Skills() {
  return (
    <section id="Skills" className="sm:w-full md:w-9/12 flex flex-col items-center">
      <h2 className='font-serif font-semibold my-6 text-3xl border-b-2 border-royal-blue text-center'>Habilidades</h2>
      <ul className="flex items-center flex-wrap justify-center mb-5">
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/htmlIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">HTML5</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/cssIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">CSS3</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/phpIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">PHP</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/javascriptIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">JAVASCRIPT</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/typescriptIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">TYPESCRIPT</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/reactIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">REACT</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/nextIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">NEXTJS</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/tailwindIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">TAILWIND</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/mongodbIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">MONGODB</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/mysqlIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">MYSQL</p>
        </li>
        <li className="flex flex-col bg-white p-5 rounded shadow-lg items-center w-36 mx-10 my-6">
          <img className="w-24" src="/gitIcon.svg" alt="" />
          <p className="text-lg font-semibold mt-2">GIT</p>
        </li>
      </ul>
    </section>
  );
}