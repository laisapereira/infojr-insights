import React, {useState} from 'react';
import { Container, MenuItem, Button, Menu, Background } from '../../styles/header';


const Header: React.FC = () => {

    const [menuAtivado, setmenuAtivado] = useState(false)

    function toggleMenu () {
        setmenuAtivado(!menuAtivado)

    }

    return (

      <Container>

        <Background className={menuAtivado ? "open" : "closed"} onClick ={toggleMenu}>

        </Background>

        <div>
          <a href="/index"><img src={'Logo Infojr.svg'} alt="logo" /></a>
        </div>
        
        <Menu className={menuAtivado ? "open" : "closed"} onClick ={toggleMenu}>
          <p>menu</p>
        </Menu> 

        <nav className={menuAtivado ? "menuOpen" : "menuClose"} >
          <MenuItem><a href="/index">Início</a></MenuItem>
          <MenuItem><a href="/filter">Todos os links</a></MenuItem>
          <Button><a href="/form">Adicionar Link</a></Button>
        </nav>


    </Container>
    );

}

  

    
export default Header