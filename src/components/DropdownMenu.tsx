import { useState } from "react";

export function DropdownMenu() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className="md:hidden" onClick={() => setIsOpened(!isOpened)}>
      <img src="/hamburguerMenu.svg" alt="Menu hamburguer" className="sm:w-8 sm:h-8" />

        {isOpened &&
          <ul className="absolute bg-light-gray w-screen left-0 top-14 h-screen flex flex-col items-center pt-2 text-xl font-serif font-medium">
            <li><a href="#About">Sobre Mim</a></li>
            <li className="py-6"><a href="#Projects">Projetos</a></li>
            <li><a href="#Skills">Habilidades</a></li>
          </ul>
        }
    </nav>
  );
}