import { styled } from "styled-components";

export const Container = styled.header`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    background-color: var(--black);
    color: var(--white);
    
    p {
        font-size: 20px;
        font-weight: 600;
    }

    nav {
        display: flex;
        width: 45vw;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
            color: var(--white);

            &:hover {
                text-decoration: underline;
            }
        }
    }
`