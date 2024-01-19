import { DropdownMenu } from "./DropdownMenu";

export default function Header() {
  return (
    <header className="h-14 flex items-center px-6 justify-between">
      <p className="text-xl font-sansSerif font-bold text-dark-gray">Deyvid.dev</p>
      <DropdownMenu />
      <nav className="sm:hidden md:flex justify-end w-1/2">
        <ul className="w-full flex items-center font-serif font-medium justify-between">
          <li><a href="#About">Sobre Mim</a></li>
          <li className="py-6"><a href="#Projects">Projetos</a></li>
          <li><a href="#Skills">Habilidades</a></li>
        </ul>
      </nav>
    </header>
  )
}