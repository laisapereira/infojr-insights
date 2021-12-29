import { ContainerCard, Inform } from '../../styles/card';

const Card: React.FC = () => {

    return (


    
      <ContainerCard>
        <div>
            <a href="/ideia"><img src={'icon_ideia.svg'} alt="logo" /></a>
        </div>


        <Inform>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</h4>
            <h5> Curso </h5>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu fermentum feugiat ipsum in in quis. 
            Mattis sit ac, posuere eu tellus risus sed leo vel. Purus sagittis, arcu... </p>
            <a href="/ideia"> Ir para ideia </a>
        </Inform>
        
         
          

      </ContainerCard>

                
                  

                


   
    );

}

  

    
export default Card