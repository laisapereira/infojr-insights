import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

*{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing:border-box;
    text-decoration: none; 
    scroll-behavior: smooth;
}

body{
    background-color: #1A1C17;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
}

body, html, #root {
    overflow-x:hidden;
    width:100vw;
    height: 100vh;
}





`