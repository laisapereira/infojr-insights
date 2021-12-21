import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    width: 100vw;
    padding-top: 5rem; /*retirar quando colocar o corpo da página*/
    



`
export const SocialNetwork = styled.div`

    background-color: rgba(37, 40, 34, 1);
    width: 100vw;

    display:flex;
    align-items:center;
    justify-content: space-around;
    padding: 7.5rem 0 7.5rem 0;


    img {
        width: 18vw;
    }

    div {
        display:flex;
        gap: 2rem;
    }

    div img {
        width:3vw;
        
    }

    @media(max-width:768px) {
        flex-direction:column;
        padding: 6.4rem 0 6.4rem 0;

    
    }

`
export const Contact = styled.div`

    padding: 3.5rem 0 3.5rem 0;

    p {
        text-align:center;
    }


    @media(max-width:768px) {
        width: 80%;

        div img {
            width:5vw;
            
        }
    
    }

`