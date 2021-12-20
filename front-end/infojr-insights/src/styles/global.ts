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
    color: #ffffff;  
}

body{
    background-color: #1A1C17;
    
}

body, html, #root {
    overflow-x:hidden;
    width:100vw;
    height: 100vh;
}





`