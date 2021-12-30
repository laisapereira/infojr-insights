import styled from "styled-components";

export const ContainerCards = styled.div `
    display:flex;
    flex-direction:column;
    height: 500px;
    width: 233vw;
    overflow:auto;
    ::-webkit-scrollbar {
        display:none;
    }
    @media(max-width: 1024px) {
        width:80vw;
        height: 100vh;
        margin-left: -5vw;
        
        
       
    
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
    width: 55vw;
    margin: 0 auto 2.9rem 0;
    margin-bottom: 2.9rem;
        &:hover{
            box-shadow: red;
            
        }
    
    @media(max-width: 800px) {
        width: 80vw;
       
        flex-direction:column;
        gap:0;
        
        
        img {
            display:none;
        }
    }

    @media screen and (min-width: 801px) and (max-width: 1200px) {
        width: 80vw;
        padding: 1.5rem;
        margin
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