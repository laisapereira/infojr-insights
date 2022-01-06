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
    titulo: '',
    categorias: '',
    descrip: '',
    link1: '',
    link2: '',
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    axios
      .post('/form', {
        titulo: formFields.titulo,
        categorias: formFields.categorias,
        descrip: formFields.descrip,
        link1: formFields.link1,
        link2: formFields.link2,
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Adicionar link</h1>

      <ContainerForms>
        <EachForm>
          <label htmlFor="titulo">Título do link</label>
          <input
            name="titulo"
            type="text"
            id="titulo"
            value={formFields.titulo}
            onChange={createChangeHandler('titulo')}
            placeholder="Escreva um título para o link"
          />
        </EachForm>

        <EachForm>
          <label htmlFor="categorias">Categoria</label>
          <select
            onChange={createChangeHandler('categorias')}
            value={formFields.categorias}
            name="categorias"
            id="categorias"
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
          <label htmlFor="link1">Link principal</label>
          <input
            type="url"
            id="link1"
            value={formFields.link1}
            onChange={createChangeHandler('link1')}
            placeholder="Ex. https://www.linkutil.com"
          />
        </EachForm>

        <EachForm>
          <label htmlFor="link2">Link secundário (opcional)</label>
          <input
            type="url"
            id="link2"
            value={formFields.link2}
            onChange={createChangeHandler('link2')}
            placeholder="Escreva um link alternativo"
          />
        </EachForm>
      </ContainerForms>

      <EachForm>
        <label htmlFor="descrrip">
          <span>Digite uma</span> Descrição <span>para este link</span>
        </label>
        <textarea
          id="descrip"
          value={formFields.descrip}
          onChange={createChangeHandler('descrip')}
          placeholder="Escreva uma descrição"
        />
      </EachForm>

      <Buttons>
        <input id="cancel" type="button" value="Cancelar" />
        <input id="submit" type="submit" value="Cadastrar" />
      </Buttons>
    </Form>
  )
}

export default IdeiaForm
