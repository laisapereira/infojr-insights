import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'

import {
  Background,
  Button,
  Container,
  Menu,
  MenuItem,
} from '../../styles/header'

const Header: React.FC = () => {
  const [menuAtivado, setmenuAtivado] = useState(false)

  function toggleMenu() {
    setmenuAtivado(!menuAtivado)
  }

  return (
    <Container>
      <div>
        <a href="/">
          <img src="Logo Infojr.svg" alt="logo" />
        </a>
      </div>

      <Menu className={menuAtivado ? 'open' : 'closed'} onClick={toggleMenu}>
        <button id="btn-menu" onClick={toggleMenu}>
          {' '}
          {menuAtivado === false ? (
            <MdMenu size="25" color="#0000" />
          ) : (
            <MdClose size="25" color="#7CB124" />
          )}
        </button>

        <nav className={menuAtivado ? 'menuOpen' : 'menuClose'}>
          <MenuItem onClick={toggleMenu}>
            <a href="/">Início</a>
          </MenuItem>
          <MenuItem onClick={toggleMenu}>
            <a href="/filter">Todos os links</a>
          </MenuItem>
          <Button onClick={toggleMenu}>
            <a href="/form">Adicionar Link</a>
          </Button>
        </nav>

        <Background className={menuAtivado ? 'overlay' : 'backClose'} />
      </Menu>
    </Container>
  )
}

export default Header
