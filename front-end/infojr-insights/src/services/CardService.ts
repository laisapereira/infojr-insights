import { Api } from "../providers"
import { CardIdea } from "../interfaces/CardIdea"

const getAll = () => Api.get<CardIdea[]>('/api/insights&page=1')

export const CardService = {
  getAll,
}
