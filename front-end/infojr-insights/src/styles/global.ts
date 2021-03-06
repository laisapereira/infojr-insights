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
    background-color: ${props => props.theme.colors.background};
    font-size:1.6rem;
    
}
body, html, #root {
    overflow-x:hidden;
    width:100vw;
    height: 100vh;
}

html {
    font-size: 62.5%;
}

a:hover,
button:hover {
    cursor:pointer;
}

.container-home {
    display:flex;
    padding:3vw 6vw 5vw 8vw;
    align-items:center;
    gap: 8rem;
}
@media(max-width: 850px) {
        
    .container-home {
        flex-direction: column;
        gap: 5rem;
        padding-bottom: 16.4rem;
    }
}
@media screen and (min-width: 851px) and (max-width: 1200px) {
    .container-home {
        flex-direction:row;
        gap: 5rem;
        padding-bottom: 16.4rem;
    }
}
`