import React from 'react'

import { Button } from '../../styles/header'
import { Container, ContainerIdeia } from '../../styles/ideia'

export const Ideia: React.FC = () => (
  <Container>
   
    <div>
      <a href="#">
        <img id="desk-image" src="image-ideia.svg" alt="ideia" />
      </a>
      <a href="#">
        <img id="mob-image" src="img-mobile.svg" alt="ideia" />
      </a>
    </div>

    <ContainerIdeia>
      <h1>oi </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        quis consectetur eleifend nulla malesuada augue a, tristique. Id cum
        risus enim dui. Magna lectus eget habitasse ultrices velit quam non. Eu
        convallis dui ullamcorper a cursus nascetur varius quam consectetur. Sit
        etiam adipiscing amet, quis eleifend sed nibh mattis. Ultrices iaculis
        orci senectus cursus auctor nunc. Facilisi pretium ac malesuada nec nibh
        dignissim libero egestas. Dignissim nunc diam integer vel in a sociis.
        Cras a elit facilisi placerat est mauris consequat eget.
      </p>
      <p>
        Aliquet vel adipiscing purus, eu turpis. Egestas sit varius pellentesque
        sed cursus sollicitudin. Id mi quis ornare enim et. Urna aenean risus eu
        risus venenatis sit quam massa. In nam fermentum donec viverra est.
        Ornare sit lectus ipsum accumsan senectus cras facilisis. Suspendisse
        sit metus, faucibus bibendum diam fermentum commodo maecenas. Diam vel
        eget diam ac nunc adipiscing quisque convallis mattis. Amet, pharetra
        dolor in faucibus in diam facilisi mi. Tempus id maecenas porttitor
        condimentum massa faucibus egestas. Facilisis pretium pellentesque
        fringilla sit dignissim dignissim etiam. Id eget curabitur leo facilisi
        nec volutpat scelerisque.
      </p>
      <a href="#">
        <Button>Saiba mais</Button>
      </a>
    </ContainerIdeia>
  </Container>
)
