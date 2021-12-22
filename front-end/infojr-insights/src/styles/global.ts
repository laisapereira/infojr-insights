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
    font-family: 'Poppins', sans-serif;
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





`