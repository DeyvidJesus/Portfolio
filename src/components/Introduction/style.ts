import { styled } from "styled-components";

export const Container = styled.main`
    width: 100vw;
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;

    h1 {
        font-weight: 300;
        font-size: 24px;
        line-height: 2.5rem;

        strong {
            font-family: 'Orbitron', monospace;
            font-size: 32px;
        }
    }

    h2 {
        margin-top: 1rem;
        font-weight: 300;
        color: var(--aqua);
    }

    .button-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;

            a {
            width: 130px;
            padding: .7rem;
            text-decoration: none;
            color: var(--white);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            border: .2rem var(--aqua) solid;

            &:first-child {
                background: var(--aqua);
            }
        }
    }

    @media(max-width: 768px) {
        padding: 0 2rem;

        .Animation {
            width: 300px;
            height: 300px;
        }
    }

    @media (max-width: 425px) {
        justify-content: center;

        .button-container a {
            width: 110px;
            padding: .4rem;
        }

        .Animation {
            display: none;
            visibility: hidden;
        }
    }
`