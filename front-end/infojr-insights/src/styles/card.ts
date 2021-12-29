import styled from "styled-components";

export const ContainerCards = styled.div `
    display:flex;
    flex-direction:column;
    gap: 2.4rem;
    height: 80vh;
    width: 233vw;
    overflow:auto;
    ::-webkit-scrollbar {
        display:none;
    }
    @media(max-width: 1024px) {
        width:80vw;
        height: 100vh;
        
        
       
    
    }
    
`

export const ContainerCard = styled.div `
    display:flex;
    gap: 2.9rem;
    align-items:center;
    justify-content:center;
    background-color:rgba(37, 40, 34, 1);
    height: max-content;
    padding: 2rem;
    border-radius: 1rem;
        &:hover{
            box-shadow: red;
            
        }
    
    @media(max-width: 800px) {
       
        flex-direction:column;
        gap:0;
        
        
        img {
            display:none;
        }
    }

    @media screen and (min-width: 801px) and (max-width: 1200px) {
       
        padding: 1.5rem;
    }


    
`

export const Inform = styled.div `
    display:flex;
    flex-direction:column;
    gap: 0.5rem;
    p {
        padding-top: 0.5rem;
        font-weight: 400;
    }
    h5 {
        font-weight: lighter;
    }
    a {
        color: ${props => props.theme.colors.primary};
        padding-top: 0.5rem;
    }
    @media(max-width: 768px) {
        overflow: hidden;
        
        
        
    }
`