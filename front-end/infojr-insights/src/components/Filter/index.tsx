import { Container,CardFilter } from '../../styles/filter';
import { EachForm } from '../../styles/form';
import { ContainerCard} from '../../styles/card';


const PageFilter: React.FC = () => {

    return (

      <Container>

          <h1>Todos os links</h1>
        
        <div>
            <EachForm id="card-filter">
                <label htmlFor="categorias">Filtro</label>
                <select name="Categoria" id="filter">
                    <option value="--">Todos</option>
                    <option value="Design UI/UX">Design UI/UX</option>
                    <option value="Web básico">Web básico</option>
                    <option value="Front-end">Front-end</option>
                    <option value="Back-end">Back-end</option>
                </select>

                
            </EachForm>
        </div>

        <CardFilter>
            <ContainerCard />
        </CardFilter>

        



      


        
        
         
          

      </Container>

    

                
                  

                


   
    );

}

  

    
export default PageFilter