import React from 'react'

import { ContainerButton } from './style'

interface ButtonProps {
  backgroundColor: string
  hoverColor: string
  color: string
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor = 'red',
  hoverColor = 'white',
  children = 'Adicionar Link',
  color = 'black',
}) => (
  <ContainerButton backgroundColor={backgroundColor} hoverColor={hoverColor}>
    {children}{' '}
  </ContainerButton>
)

export default Button
