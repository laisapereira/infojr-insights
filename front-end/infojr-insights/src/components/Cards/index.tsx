import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { isNullishCoalesce } from 'typescript'

import { CardContainer, ContainerCard, Inform } from '../../styles/card'

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
          'https://api-infoinsights.herokuapp.com/api/insights&page=1'
        )
        setCards(response.data.results)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  console.log(cards)
  return (
    <ContainerCard>
      <CardContainer>
        <div>
          <a href="/ideia">
            <img src="icon_ideia.svg" alt="logo" />
          </a>
        </div>

        <Inform>
          {cards.map(card => (
            <div key={card.id}>
              <h4>{card.title}</h4>
              <h5> {card.classification} </h5>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                fermentum feugiat ipsum in in quis. Mattis sit ac, posuere eu
                tellus risus sed leo vel. Purus sagittis, arcu...{' '}
              </p>
              <a href="/ideia"> Ir para ideia </a>
            </div>
          ))}
        </Inform>
      </CardContainer>
    </ContainerCard>
  )
}

export default Card
