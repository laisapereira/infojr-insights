import React from 'react';
import { Container, ContainerForms, DescrpForms, Buttons, EachForm} from '../../styles/form'


const Ideia: React.FC = () => (
    <Container>
        <h1>Adicionar link</h1>



        <ContainerForms>
            <EachForm>
                <label htmlFor="titulo">Título do link</label>
                <input type="text" id="titulo" placeholder='Escreva um título para o link'/>
            </EachForm>

            <EachForm>
            <label htmlFor="categorias">Categoria</label>
            <select name="Categoria" id="categoria">
                <option value="--">--</option>
                <option value="Design UI/UX">Design UI/UX</option>
                <option value="Web básico">Web básico</option>
                <option value="Front-end">Front-end</option>
                <option value="Back-end">Back-end</option>
             </select>
            </EachForm>
             
        </ContainerForms>

        <ContainerForms>
            <EachForm>
                <label htmlFor="link1">Link principal</label>
                <input type="url" id="link1" placeholder='Ex. https://www.linkutil.com'/>
            </EachForm>
             
             <EachForm>
                <label htmlFor="link2">Link secundário (opcional)</label>
                <input type="url" id="link2" placeholder='Escreva um link alternativo'/>
             </EachForm>
             
        </ContainerForms>

        <EachForm>
             <label htmlFor="descrrip"><span>Digite uma</span> Descrição <span>para este link</span></label>
             <textarea id="descrip" placeholder='Escreva uma descrição'/>
        </EachForm>

        <Buttons>
            <input id="cancel" type="button" value="Cancelar"/>
            <input id="submit"type="button" value="Cadastrar"/>
        </Buttons>
        
        

        
        
        
            
       

        
        
        

        

        



    </Container>
    
  )
  
      
  export default Ideia