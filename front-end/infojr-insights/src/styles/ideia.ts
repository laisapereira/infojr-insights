import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    
    #desk-image{
        width: 100vw;
        
    }

    #mob-image {
        display:none;
    }

    div {
        display:flex;
        flex-direction:column;
    }

    @media(max-width:500px) {
        
        #desk-image{
            display:none;
            
        }
    
        #mob-image {
            display:flex;
            width:100vw;
            
        }
    }

    @media screen and (min-width:501px) {
        #desk-image{
            display:none;
            
        }
    
        #mob-image {
            display:flex;
            width:100%;
            height:80vh;
            
        }
    
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