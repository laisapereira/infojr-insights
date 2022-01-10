import styled from 'styled-components'

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 233vw;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 90vw;
    margin-left: -5vw;
  }
`

export const ContainerCard = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.3rem;
  display: flex;
  flex-direction: column;
`

export const ImagCard = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 18rem;
  }
`

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;

  p {
    max-height: 5rem;
    overflow: auto;
  }
`

export const Inform = styled.div`
  display: flex;
  flex-direction: column;
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

    &:hover {
      text-decoration: underline;
    }
  }

 

  section {
    display: flex;
    gap: 2.9rem;
    background-color: rgba(37, 40, 34, 1);
    height: max-content;
    padding: 2rem;
    border-radius: 1rem;
    width: 55vw;
    margin: 0 auto;
    margin-bottom: 2rem;

   

    &:hover{
        cursor:pointer;
        box-shadow: 1px 1px 2px 2px ${props => props.theme.colors.primary};
        
    }

    @media(max-width: 840px) {
        width: 80vw;
    
        flex-direction:column;
        gap:0;
        
        
        img {
            display:none;
        }
    }

    @media screen and (min-width: 841px) and (max-width:900px ) {
        width: 40vw;
    
        flex-direction:column;
        gap:0;
        
        
        img {
            display:none;
        }
    }

    @media screen and (min-width: 901px) and (max-width: 1300px) {
        width: 40vw;
        padding: 1.5rem;
        margin
    }

    @media (max-width: 768px) {
    overflow: hidden;
  }
  }
  
`
