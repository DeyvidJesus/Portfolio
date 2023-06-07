import { Burger } from "@/components/Header/Burger/burger";
import { Menu } from "@/components/Header/Menu/menu";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Container } from "./style";
import { useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <p>Portfolio</p>
            <nav className="bigger-menu">
                <Link href={"#Sobre-mim"}>Sobre Mim</Link>
                <Link href={"#Projetos"}>Projetos</Link>
                <Link href={"#Habilidades"}>Habilidades</Link>
                <Link href={"https://github.com/DeyvidJesus"} target="_blank"><AiFillGithub size={30} /></Link>
                <Link href={"https://www.linkedin.com/in/deyvid-g/"} target="_blank"><AiFillLinkedin size={30} /></Link>
            </nav>
            <nav className="responsive-menu">
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} />
            </nav>
        </Container>
    )
}