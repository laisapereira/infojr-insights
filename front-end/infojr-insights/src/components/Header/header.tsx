import React from 'react';
import styled from 'styled-components'; 

const Header: React.FC = () => {
  return (
    <div>
      <header>
        <img src="/Logo Infojr.svg" alt="logo" />

        <nav>
          <a>Início</a>
          <a>Todos os links</a>
          <button>Adicionar link</button>
        </nav>


      </header>

      
    </div>

  );
}

export default Header