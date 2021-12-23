import styled from "styled-components"


export const Container = styled.div `
    display:flex;
    justify-content: space-around;
    align-items:center;
    padding-top: 2rem;
    z-index: 1000;
            
    @media (max-width: 660px) {
        


        div img {
            width: 16vw;
        }
    }

    

`

export const MenuItem = styled.a `

    a: hover {
        color: rgba(124, 177, 36, 1); 

    }
`



export const Button = styled.button`
    
    height: 2.5rem;
    border-radius: 0.8rem;
    background-color: #7CB124;

    &: hover {
        background-color: rgba(140, 190, 46, 1);
    }

    a {
        padding: 1.1rem 2.3rem;
    }

    @media (max-width: 660px) {

        

        a {
            padding: 0.6rem 2.3rem;
        }

    }




`;


    export const Menu = styled.menu `

        #btn-menu {
            display:none
        }

        nav {
            display:flex;
            align-items:center;
            gap: 3rem;
        }
    

        @media (max-width: 660px) {
            #btn-menu{
                display:flex;
            }

            .menuOpen {
                flex-direction:column;
                justify-content:center;
                position:absolute;
                width:60vw;
                top: 7rem;
                right: 20%;
                height: 50vh;
                border-radius: 1.2rem;
                background-color: ${props => props.theme.colors.background};
                overflow:hidden;

            
            }

            .menuClose {
                display:none;
            }

            #btn-menu {
                background-color: transparent;
            }

        
        






        

    }


    
    `

    export const Background = styled.div `
        
        width:100vw;
        background: rgba(26, 28, 23, 0,6);
        position:absolute;
        z-index: 1;
        background-color: black;
        opacity: 0.2;
        position:absolute;

        

    
    
    `