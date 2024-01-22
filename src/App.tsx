import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import BackToTopButton from "./components/BackToTopBtn";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-[#F0F0F0]">
        <Main />
        <About />
        <Projects />
        <Skills />
        <BackToTopButton />
      </main>
      <footer className="flex items-center justify-center p-4 text-lg font-sansSerif">
        <p>Criado por <strong>DEYVID GONDIM</strong></p>
      </footer>
    </>
  )
}

export default App;