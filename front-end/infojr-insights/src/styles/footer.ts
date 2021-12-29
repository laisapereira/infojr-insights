import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    width: 100vw;
    



`
export const SocialNetwork = styled.div`

    background-color: rgba(37, 40, 34, 1);
    width: 100vw;

    display:flex;
    align-items:center;
    justify-content: space-around;
    padding: 7.5rem 0 7.5rem 0;


    img {
        width: 18vw;
    }

    div {
        display:flex;
        gap: 2rem;
    }

    div img {
        width:5vw;
        
    }

    img:hover {
        transform:scale(1.1)
        
        
    }

    @media(max-width:768px) {
        flex-direction:column;
        padding: 3.4rem 0 3.4rem 0;
        gap: 3rem;
        
        img {
            width:32vw;
        }


        div {
            gap: 1.5rem;
            flex-wrap: wrap;
        }

        div img {
            width:7vw;
            
        }

       
        
    
    }

`
export const Contact = styled.div`

    padding: 3.5rem 0 3.5rem 0;

    p {
        text-align:center;
        width: 80vw;
        
    
        
    }


    @media(max-width:600px) {
        width:70%;
        padding-bottom: 0;
        
        p {
            padding-bottom: 2.4rem;
            
        }

        
    
    }

`