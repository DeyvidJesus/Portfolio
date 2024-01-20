import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-[#F0F0F0]">
        <Main />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App;