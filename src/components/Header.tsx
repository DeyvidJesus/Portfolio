import { DropdownMenu } from "./DropdownMenu";
import '../styles/global.css';

export function Header() {
  return (
    <header className="z-50 fixed bg-white w-screen h-14 flex items-center px-6 justify-between">
      <p className="text-xl font-sansSerif font-bold text-dark-gray">Deyvid.dev</p>
      <DropdownMenu />
      <nav className="sm:hidden md:flex justify-end md:w-3/5 lg:w-2/5 px-4">
        <ul className="w-full flex items-center font-serif font-medium justify-between">
          <li><a className="link" href="#Home">Início</a></li>
          <li><a className="link" href="#About">Sobre Mim</a></li>
          <li><a className="py-6 link" href="#Projects">Projetos</a></li>
          <li><a className="link" href="#Skills">Habilidades</a></li>
          <li><a href="https://github.com/DeyvidJesus" target="_blank"><img className="w-7" src="/githubIcon.svg" alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/deyvid-g/" target="_blank"><img className="w-7" src="/linkedinIcon.svg" alt="" /></a></li>
        </ul>
      </nav>
    </header>
  )
}