import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin: 12rem auto;
    width: 70vw;
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
    width: 32%;
    display:flex;
    flex-direction:column;
    gap: 1.5rem;

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
    align-items:center; 
    margin-left: -40rem;
    gap: 2.2rem;

    #button-aside-one, 
    #button-aside-two {
        padding: 1rem 7rem;
        border-radius: 3rem;
        height:max-content;

        &:hover {
            cursor:pointer;
        }
    }

    #button-aside-two {
        background-color: transparent;
        border:1px solid ${props => props.theme.colors.primary};
        padding: 1rem 6rem;

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
    