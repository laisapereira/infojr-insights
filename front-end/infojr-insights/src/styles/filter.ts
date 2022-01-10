import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12rem;
  margin: 0 auto;

  select {
    display: flex;
    width: 20vw;
    align-items: flex-start;
  }

  h1 {
    color: ${props => props.theme.colors.second};
    text-align: center;
    font-size: 3.6rem;
  }

  #card-filter {
    padding: 10rem;
    align-items: flex-end;
  }
`

export const CardFilter = styled.div``
