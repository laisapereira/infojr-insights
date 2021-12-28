import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    
    img{
        width: 100vw;
        
    }

    div {
        display:flex;
        flex-direction:column;
    }

    

`
export const ContainerIdeia = styled.div`
        display:flex;
        align-items:center;
        flex-direction:column;
        padding: 12rem 16rem;
        gap:2.4rem;

        h1{
            padding-bottom: 3rem;
            color: ${props => props.theme.colors.second}
        }

        button {
            padding: 1rem 4rem;
            border-radius: 3rem;
            width: 18rem;
            height:max-content;
            margin-top: 3rem;
            
        }

        button:hover {
            background-color: ${props => props.theme.colors.primary}
            
        }


        p {
            text-align:justify;
        }

            


`