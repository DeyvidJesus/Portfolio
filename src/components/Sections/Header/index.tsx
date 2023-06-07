import { Burger } from "@/components/Burger/burger";
import { Menu } from "@/components/Menu/menu";
import { Container } from "./style";
import { useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <p>Portfolio</p>
            <nav>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} />
            </nav>
        </Container>
    )
}