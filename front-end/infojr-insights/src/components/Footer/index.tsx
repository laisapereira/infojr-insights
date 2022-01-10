import React from 'react'

import { Contact, Container, SocialNetwork } from '../../styles/footer'

const Footer: React.FC = () => (
  <Container>
    <SocialNetwork>
      <a href="/index">
        <img src="/logo_infojr.svg" alt="logo" />
      </a>
      <div>
        <a href="#">
          <img src="/linkedin.svg" alt="linkedin" />
        </a>
        <a href="#">
          <img src="/be.svg" alt="behance" />
        </a>
        <a href="#">
          <img src="/dribble.svg" alt="dribble" />
        </a>
        <a href="#">
          <img src="/instagram.svg" alt="instagram" />
        </a>
        <a href="#">
          <img src="/facebook.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="/youtube.svg" alt="youtube" />
        </a>
        <a href="#">
          <img src="/spotify.svg" alt="spotify" />
        </a>
      </div>
    </SocialNetwork>

    <Contact>
      <p>
        <strong>Email:</strong> contato@infojr.com.br |{' '}
        <strong>Telefone:</strong> 71 3283-6268
      </p>
      <p>
        Copyright @ 2020 INFO JR UFBA - Av. Adhemar de Barros, Ondina –
        Instituto de computação da UFBA
      </p>
    </Contact>
  </Container>
)

export default Footer
