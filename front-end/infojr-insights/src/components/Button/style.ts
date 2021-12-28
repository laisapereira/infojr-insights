import styled from "styled-components";


interface ContainerProps {
    backgroundColor:string;
    hoverColor:string;
}

export const ContainerButton = styled.button<ContainerProps>`

width: 20rem;
height: 5rem;
border-radius: 0.5rem;
font-weight: bold;

background-color: ${(props) => props.backgroundColor};

&: hover {
    background-color: ${(props) => props.hoverColor}
}

color: ${(props) => props.color};




`;