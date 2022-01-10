import React from 'react';
import { Container,  Title, Main, Buttons} from '../../styles/asidehome'
import { Button } from '../../styles/header'


const AsideHome: React.FC = () => (
    <Container>
        <Title>
            <img id="title" src={'infoJrinsights.svg'} alt="logo" />
            <img id="subtitle"src={'subtitle.svg'} alt="subtitle" />
        </Title>

        <Main>
            <p>A internet possibilita o infinito acesso a todo tipo de conhecimento </p>
            <p>
                 Por isso, iremos catalogar ideias, sites, cursos, aulas, livros, assuntos, palestras, toda sorte de 
                             links que sejam úteis e bons para conhecimento
            </p>
            <p>Comece a contribuir clicando no botão  “<span>adicionar link</span>”.</p>        
            
            </Main>


        <Buttons>
            <a href="/filter" ><Button id="button-aside-two" >Ver todos os links</Button></a>
            <p style={{textAlign:"center", padding:"2rem"}}>Feito com 💚 <span>Info Jr UFBA</span></p>
            
        </Buttons>

        
        
        

        

        



    </Container>
    
  )
  
      
  export default AsideHome