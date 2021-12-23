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

    display:flex;
    flex-direction:column;
    gap: 0.2rem


`
export const Main = styled.div`
    width: 32%;
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
    
    




`
    