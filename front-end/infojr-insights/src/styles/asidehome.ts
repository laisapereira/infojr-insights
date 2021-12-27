import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width: 90vw;
    margin: 12rem auto;
    gap: 3rem;

    @media(max-width: 768px) {
        
        margin: 4rem auto;
        gap: 2rem;
    }

    @media screen and (min-width: 769px) and (max-wdith: 1300px) {

        margin: 7rem auto;
        

        
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

    @media(max-width: 900px) {

        #title {
            width: 50vw;
        }

        #subtitle {
            width: 40vw;
        }
        
    }

    @media and (min-width: 901px) and (max-width:1340px) {


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
        line-height: 1.4rem;
    }

    span {
        color: ${props => props.theme.colors.primary}
    }

    @media(max-width: 800px) {
        
        width: 100%;



    }


`
export const Buttons = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap: 1rem;

    #button-aside-one, 
    #button-aside-two {
        padding: 1rem 5.7rem;
        border-radius: 3rem;
        height:max-content;

        &:hover {
            cursor:pointer;
        }
    }

    #button-aside-two {
        background-color: transparent;
        border:1px solid ${props => props.theme.colors.primary};
        padding: 1rem 4.7rem;

        &:hover {
           background-color:  ${props => props.theme.colors.primary};
        }
    }

    span {
        color:  ${props => props.theme.colors.primary}

    }

    @media(max-width: 768px) {
        
        width: 100%;
        margin: 0;

        #button-aside-one, 
        #button-aside-two {
            padding: 1rem 5rem;
        }

        #button-aside-two {
            padding: 1rem 4rem;
        }


    }

        @media screen and (min-width: 769px) and (max-wdith: 1300px) {

            
                margin: 7rem auto;
                width: 58%;
                background-color:red;

            
        
    
    




`
    