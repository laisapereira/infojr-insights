import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width: 90vw;
    margin: 15rem auto;
    gap: 3rem;
    
    @media(max-width: 768px) {
        width: 90vw;
        margin: 4rem 0 0 5rem;
        gap: 2rem;
    }
    @media screen and (min-width: 769px) and (max-width: 1300px) {
        margin: 7rem auto;
        width: 90vw;
       
        
        
    }
`
export const Title = styled.div`
    display:flex;
    flex-direction:column;
    gap: 0.2rem;
    #title {
        width: 19vw;
    }
    #subtitle {
        width: 13vw;
    }
    @media(max-width: 1024px) {
        #title {
            width: 30vw;
        }
        #subtitle {
            width: 20vw;
        }
        
    }
`
export const Main = styled.div`
    display:flex;
    flex-direction:column;
    gap: 1.5rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    p {
        font-weight: 400;
    }
    span {
        color: ${props => props.theme.colors.primary}
    }
    @media(max-width: 800px) {
        
        width: 80%;
    }
    @media screen and (min-width: 801px) and (max-width: 1300px) {
        width: 35vw;
       
        
        
    }
`
export const Buttons = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap: 1rem;
 
    #button-aside-two {
        padding: 1rem 7.7rem;
        border-radius: 3rem;
        height:max-content;
        &:hover {
            cursor:pointer;
        }

    }
    span {
        color:  ${props => props.theme.colors.primary}
    }

    

    @media(max-width: 768px) {
        
        width: 80%;
        margin: 0;
        align-items:center;
        
    }

            
        
    
    
`
