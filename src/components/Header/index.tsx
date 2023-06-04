import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai"
import { Container } from "./style";

export function Header() {
    return(
        <Container>
            <p>Portfolio</p>
            <nav>
                <Link href={"#Sobre-mim"}>Sobre Mim</Link>
                <Link href={"#Projetos"}>Projetos</Link>
                <Link href={"#Habilidades"}>Habilidades</Link>
                <Link href={"https://github.com/DeyvidJesus"} target="_blank"><AiFillGithub size={30}/></Link>
                <Link href={"https://www.linkedin.com/in/deyvid-g/"} target="_blank"><AiFillLinkedin size={30}/></Link>
            </nav>
        </Container>
    )
}