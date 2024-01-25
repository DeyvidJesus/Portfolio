import { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';

export function ResponsiveMenu() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className="md:hidden" onClick={() => setIsOpened(!isOpened)}>

      <div className={`fixed top-3 right-6 z-50 cursor-pointer ${isOpened ? 'open' : ''}`}>
        <div className="icon-container" onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
        {isOpened &&
          <nav className="fixed bg-light-gray w-screen left-0 top-14 h-screen flex flex-col items-center pt-8 text-xl font-medium">
            <ul className="flex flex-col h-1/2 justify-between items-center">
              <li><a className="link" href="#Home">Início</a></li>
              <li><a className="link" href="#About">Sobre Mim</a></li>
              <li><a className="link" href="#Projects">Projetos</a></li>
              <li><a className="link" href="#Skills">Habilidades</a></li>
              <li><a href="https://github.com/DeyvidJesus" target="_blank"><img className="w-7" src="/githubIcon.svg" alt="" /></a></li>
              <li><a href="https://www.linkedin.com/in/deyvid-g/" target="_blank"><img className="w-7" src="/linkedinIcon.svg" alt="" /></a></li>
            </ul>
          </nav>
        }
      </div>
    </nav>
  );
}