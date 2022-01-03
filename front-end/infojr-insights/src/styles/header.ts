import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem 1rem 10rem;
  z-index: 1000;
  background: #191919;

  @media (max-width: 768px) {
    padding: 2rem 3rem;
    justify-content: space-between;
    div img {
      width: 16vw;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 2rem 5.5rem 1rem 4rem;
  }
`

export const MenuItem = styled.a`
  a: hover {
    color: ${props => props.theme.colors.second};
  }
`

export const Button = styled.button`
  height: max-content;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.colors.primary};
  padding: 1.1rem;
  &: hover {
    background-color: ${props => props.theme.colors.second};
  }
  a {
    padding: 1.1rem 2.3rem;
  }
  @media (max-width: 768px) {
    a {
      padding: 0.6rem 2.3rem;
    }
  }
`

export const Menu = styled.menu`
  #btn-menu {
    display: none;
  }
  nav {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    #btn-menu {
      display: flex;
    }
    .menuOpen {
      flex-direction: column;
      justify-content: center;
      position: absolute;
      width: 60vw;
      top: 7rem;
      right: 20%;
      height: 50vh;
      border-radius: 1.2rem;
      background-color: ${props => props.theme.colors.background};
      overflow: hidden;
    }
    .menuClose {
      display: none;
    }
    #btn-menu {
      background-color: transparent;
    }
  }
`

export const Background = styled.div`
  width: 100vw;
  background: rgba(26, 28, 23, 0, 6);
  position: absolute;
  z-index: 1;
  background-color: black;
  opacity: 0.2;
  position: absolute;
`
