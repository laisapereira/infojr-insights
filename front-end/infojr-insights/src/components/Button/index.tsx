import React from 'react'
import { Container } from "./style";

interface ButtonProps {
    backgroundColor:string;
    hoverColor:string;
    color: string;
}


const Button: React.FC <ButtonProps> = ({
    backgroundColor = "red",
    hoverColor = "white",
    children = "olá",
    color= "black" }) => (
    <Container backgroundColor={backgroundColor} hoverColor={hoverColor} >
    {children} </Container>
);

export default Button


