import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #desk-image {
    display: flex;
    width: 100vw;
  }

  #mob-image {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    #desk-image {
      display: none;
    }

    #mob-image {
      display: flex;
      width: 100vw;
    }
  }
`
export const ContainerIdeia = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12rem 16rem;
  gap: 2.4rem;

  h1 {
    padding-bottom: 3rem;
    color: ${props => props.theme.colors.second};
  }

  button {
    padding: 1rem 4rem;
    border-radius: 3rem;
    width: 24vw;
    height: max-content;
    margin-top: 3rem;
  }

  button:hover {
    background-color: ${props => props.theme.colors.second};
  }

  p {
    text-align: justify;
    font-size: 1.6rem;
    width: 90%;
  }

  @media (max-width: 500px) {
    padding: 4.4rem;

    h1 {
      font-size: 2.4rem;
    }

    p {
      text-align: initial;
    }

    button {
      width: 60vw;
    }
  }

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    p {
      text-align: initial;
      font-size: 1.6rem;
      width: 70vw;
    }

    button {
      width: 40vw;
    }
  }
`
