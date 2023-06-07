import { Burger } from "@/components/Burger/burger"
import { Menu } from "@/components/Menu/menu"
import { About } from "@/components/Sections/About"
import { Header } from "@/components/Sections/Header"
import { Intro } from "@/components/Sections/Introduction"
import { useState } from "react"

export default function Home() {


  return (
    <>
      <Header />
      <Intro />
      <About />
    </>
  )
}
