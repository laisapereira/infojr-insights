import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

*{
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing:border-box;
    text-decoration: none; 
    scroll-behavior: smooth;
    font-family: ${props => props.theme.colors.font};
    color: ${props => props.theme.colors.text};
}

body{
    background-color: ${props => props.theme.colors.background}
    
}

body, html, #root {
    overflow-x:hidden;
    width:100vw;
    height: 100vh;
}


.container-home {
    display:flex;
    padding:0vw 10vw 5vw 12vw;
    align-items:center;
    gap: 8rem;
}

@media(max-width: 768px) {
        
    .container-home {
        flex-direction: column;
        gap: 0;
        padding-bottom: 16.4rem;
    }
}


@media screen and (min-width: 769px) and (max-width: 1200px) {

    .container-home {
        flex-direction: column;
        gap: 0;
        padding-bottom: 16.4rem;
    }

}
`