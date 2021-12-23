import React from 'react'
import { Container,  Title, Main, Buttons} from '../../styles/asidehome'
import { Button } from '../../styles/header'

const AsideHome: React.FC = () => (
    <Container>
        <Title>
            <h1>infoJr<span>insights</span></h1>
            <p>Ideias para a crise</p>
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
            <a href="#"><Button id="first">Adicionar link</Button></a>
            <a href="#"><button id="second">Ver todos os links</button></a>
            <p>Feito com 💚 <span>Info Jr UFBA</span></p>
            
        </Buttons>

        
        
        

        

        



    </Container>
    
  )
  
      
  export default AsideHome