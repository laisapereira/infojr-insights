import styled from "styled-components"


export const Container = styled.div `
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 2rem 10rem 1rem 10rem; 
    z-index: 1000;
    background: #191919;

            
    @media (max-width: 768px) {
        padding: 2rem 5rem;
        justify-content: space-between;


        div img {
            width: 16vw;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
        padding: 2rem 5.5rem 1rem 4rem;
    }

    

`

export const MenuItem = styled.a `

    a: hover {
        color:  ${props => props.theme.colors.second}

    }
`



export const Button = styled.button`
    
    height: max-content;
    border-radius: 0.8rem;
    background-color:  ${props => props.theme.colors.primary};
    padding: 1.1rem;

    &: hover {
        background-color:  ${props => props.theme.colors.second};
    }

    a {
        padding: 1.1rem 2.3rem;
    }

    @media (max-width: 768px) {

        

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
    

        @media (max-width: 768px) {
            #btn-menu{
                display:flex;
            }

            .menuOpen {
                flex-direction:column;
                justify-content:center;
                position:absolute;
                width:70vw;
                top: 6rem;
                right: 15%;
                height: 50vh;
                border-radius: 1.2rem;
                background-color: ${props => props.theme.colors.background};
                overflow:hidden;
                z-index: 10;

            
            }

            .menuClose {
                display:none;
            }

            #btn-menu {
                background-color: transparent;
            }

            .overlay {
                bottom: 0;
                left: 0;
                position: fixed;
                right: 0;
                top: 6rem;
                backdrop-filter: blur(0.15rem);
                background-color: rgba(0, 0, 0, 0.5);
            }
            
            

        
        






        

    }


    
    `

    export const Background = styled.div `

        
                .overlay:before {
                    content:"";
                    width:100vw;
                    background: rgba(26, 28, 23, 0,6);
                    position:absolute;
                    z-index: -1;
                    left:0;

                    background-color: blue;
                    opacity: 0.2;
                    position:absolute;
                    height: 50vh;

                    -webkit-filter: blur(15px);
                    -moz-filter: blur(15px);
                    -o-filter: blur(15px);
                    -ms-filter: blur(15px);
                    filter: blur(15px);



                }


                .overlay {
                    position:absolute;
                    left: 0;
                    z-index:0;

                }
                
                
            


        

        

    
    
    `