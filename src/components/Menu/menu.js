import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './style';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <Link href={"#Sobre-mim"}>Sobre Mim</Link>
      <Link href={"#Projetos"}>Projetos</Link>
      <Link href={"#Habilidades"}>Habilidades</Link>
      <Link href={"https://github.com/DeyvidJesus"} target="_blank"><AiFillGithub size={30} /></Link>
      <Link href={"https://www.linkedin.com/in/deyvid-g/"} target="_blank"><AiFillLinkedin size={30} /></Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}