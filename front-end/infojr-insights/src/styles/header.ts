import styled from "styled-components"

export const Container = styled.div `
    display:flex;
    justify-content: space-around;
    align-items:center;
    padding-top: 2rem;
            

    nav {
        display:flex;
        align-items:center;
        gap: 3rem;




@media (max-width: 660px) {



}
    

`

export const MenuItem = styled.a `

    a: hover {
        color: rgba(124, 177, 36, 1); 

    }

    a::before {
        color: white

    }

    a::after {
        color: rgba(124, 177, 36, 1);  
    }

`



export const Button = styled.button`
    
    height: 40px;
    border-radius: 0.8rem;
    background-color: rgba(124, 177, 36, 1);

    &: hover {
        background-color: rgba(140, 190, 46, 1);
    }

    a {
        padding: 1.1rem 2.3rem;
    }






    `;