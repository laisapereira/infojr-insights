import styled from "styled-components";

export const Container = styled.div `

    display:flex;
    gap: 2.9rem;
    width: 233vw;
    align-items:center;
    justify-content:center;
    background-color:rgba(37, 40, 34, 1);
    height: max-content;
    padding: 2rem;
    border-radius: 1rem;




`

export const Inform = styled.div `
    display:flex;
    flex-direction:column;
    gap: 0.5rem;

    p {
        padding-top: 0.5rem;
        font-weight: 400;
    }

    h5 {
        font-weight: lighter;

    }

    a {
        color: ${props => props.theme.colors.primary};
        padding-top: 0.5rem;
    }




`