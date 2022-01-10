import { Container,CardFilter } from '../../styles/filter';
import { EachForm } from '../../styles/form';
import {ContainerCard} from '../../styles/card';


const PageFilter: React.FC = () => {

    return (

      <Container>

          <h1>Todos os links</h1>
        
        <div>
            <EachForm id="card-filter">
                <label htmlFor="categorias">Filtro</label>
                <select name="Categoria" id="filter">
                    <option value="--">Todos</option>
                    <option value="Front-end">Front-end</option>
                    <option value="Back-end">Back-end</option>
                    <option value="Web básico">Mobile</option>
                    <option value="Design UI/UX">Design</option>
                    
                    
                </select>

                
            </EachForm>

            <div>
                <ContainerCard />
                <ContainerCard />
            </div>

        </div>

        
        



      


        
        
         
          

      </Container>

    

                
                  

                


   
    );

}

  

    
export default PageFilter