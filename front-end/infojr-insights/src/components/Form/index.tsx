/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios'
import React from 'react'

import { useFormFields } from '../../hooks/formfields'
import {
  Buttons,
  ContainerForms,
  DescrpForms,
  EachForm,
  Form,
} from '../../styles/form'

const IdeiaForm: React.FC = () => {
  const { formFields, createChangeHandler } = useFormFields({
    title: '',
    classification: '',
    description_idea: '',
    ideia_url: '',
    image_url: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    axios
      .post('https://api-infoinsights.herokuapp.com/api/insights&page=1', {
        title: formFields.title,
        classification: formFields.classification,
        description_idea: formFields.description_idea,
        ideia_url: formFields.ideia_url,
        image_url: formFields.image_url,
      })
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response)
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Adicionar link</h1>

      <ContainerForms>
        <EachForm>
          <label htmlFor="title">Título do link</label>
          <input
            name="title"
            type="text"
            id="title"
            value={formFields.title}
            onChange={createChangeHandler('title')}
            placeholder="Escreva um título para o link"
          />
        </EachForm>

        <EachForm>
          <label htmlFor="classification">Categoria</label>
          <select
            onChange={createChangeHandler('classification')}
            value={formFields.classification}
            name="classification"
            id="classification"
          >
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
          <label htmlFor="ideia_url">Link principal</label>
          <input
            type="url"
            id="ideia_url"
            value={formFields.ideia_url}
            onChange={createChangeHandler('ideia_url')}
            placeholder="Ex. https://www.linkutil.com"
          />
        </EachForm>

        <EachForm>
          <label htmlFor="image_url">Link secundário (opcional)</label>
          <input
            type="url"
            id="image_url"
            value={formFields.image_url}
            onChange={createChangeHandler('image_url')}
            placeholder="Escreva um link alternativo"
          />
        </EachForm>
      </ContainerForms>

      <EachForm>
        <label htmlFor="descrrip">
          <span>Digite uma</span> Descrição <span>para este link</span>
        </label>
        <textarea
          id="description_idea"
          value={formFields.description_idea}
          onChange={createChangeHandler('description_idea')}
          placeholder="Escreva uma descrição"
        />
      </EachForm>

      <Buttons>
        <input id="cancel" type="button" value="Cancelar" />
        <input id="submit" type="submit" value="Submit" />
      </Buttons>
    </Form>
  )
}

export default IdeiaForm
