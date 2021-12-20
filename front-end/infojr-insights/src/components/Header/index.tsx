import React from 'react';
import { Container, MenuItem, Button } from '../../styles/header';

const Header: React.FC = () => (

  <Container>
      <div>
        <a href="/index"><img src="/Logo Infojr.svg" alt="logo" /></a>
      </div>
        

        <nav>
          <MenuItem><a href="/index">Início</a></MenuItem>
          <MenuItem><a href="/filter">Todos os links</a></MenuItem>
          <Button><a href="/form">Adicionar Link</a></Button>
        </nav>


    </Container>
)

    
export default Header