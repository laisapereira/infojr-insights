import React from 'react';
import { Container, SocialNetwork, Contact } from '../../styles/footer';

const Header: React.FC = () => (

  <Container>
    
        <SocialNetwork>
            <a href="/index"><img src="/Logo Infojr.svg" alt="logo" /></a>
            <div>
                <img src="/linkedin.svg" alt="linkedin"/>
                <img src="/be.svg" alt="behance"/>
                <img src="/dribble.svg" alt="dribble"/>
                <img src="/instagram.svg" alt="instagram"/>
                <img src="/facebook.svg" alt="facebook"/>
                <img src="/youtube.svg" alt="youtube"/>
                <img src="/spotify.svg" alt="spotify"/>
            </div>


        </SocialNetwork>


        <Contact>
            <p><strong>Email:</strong> contato@infojr.com.br | <strong>Telefone:</strong> 71 3283-6268</p>
            <p>Copyright @ 2020 INFO JR UFBA - Av. Adhemar de Barros, Ondina – Instituto de computação da UFBA</p>
        </Contact> 


        

        


    </Container>
)

    
export default Header
