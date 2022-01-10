import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { AboutCard, ContainerCard, ImagCard, Inform } from '../../styles/card'

interface ICard {
  id: number
  title: string
  description_idea: string
  classification: string
  ideia_url: string
  image_url?: string
  created_at?: Date
}

const defaultCards: ICard[] = []

const Card: React.FC = () => {
  const [cards, setCards] = React.useState<ICard[]>(defaultCards)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    ;(async () => {
      try {
        const response = await axios.get(
          'https://api-infoinsights.herokuapp.com/api/vitrine'
        )
        setCards(response.data.results)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <ContainerCard>
      <Inform>
        {cards.map(card => (
          <section key={card.id}>
            <ImagCard>
              <a href="/ideia">
                <img src={card.image_url} alt="logo" />
              </a>
            </ImagCard>

            <AboutCard>
              <h4>{card.title}</h4>
              <h5> {card.classification} </h5>
              <p>{card.description_idea}</p>
              <a href="/ideia"> Ir para a ideia </a>
            </AboutCard>
          </section>
        ))}
      </Inform>
    </ContainerCard>
  )
}

export default Card
