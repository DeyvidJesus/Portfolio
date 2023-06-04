import Link from "next/link";
import Image from "next/image";
import { Container } from "./style";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai"

export function Intro() {
    return (
        <Container>
            <div>
                <h1>Olá, me chamo <br /> <strong>Deyvid :)</strong></h1>
                <h2>Desenvolvedor Frontend</h2>
                <div className="button-container">
                    <Link href={""} download>Baixar CV <AiOutlineDownload size={25}/></Link>
                    <Link href={"mailto:deyvidgondim@outlook.com"}>E-mail <AiOutlineMail size={25}/></Link>
                </div>
            </div>
            <Image width={400} height={400} src={"Animation.svg"} alt={""} />
        </Container>
    )
}