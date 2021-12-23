import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin: 12rem auto;
    width: 70vw;
    gap: 3rem;



    span {
        color: ${props => props.theme.colors.primary}
    }

`
export const Title = styled.div`

    span {
        font-weight: lighter; 
        color:white;
    } 
    
    p {
        color: ${props => props.theme.colors.primary}
    }


`
export const Main = styled.div`
    width: 31%;
    display:flex;
    flex-direction:column;
    gap: 1.5rem;

    span {
        color: ${props => props.theme.colors.primary}
    }


`
export const Buttons = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 18em;

    
    
    




`
    