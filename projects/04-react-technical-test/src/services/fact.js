import { CAT_ENDPOINT_RANDOM_FACT } from '../contants'

export async function getRandomFact () {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await response.json()

  const { fact } = data
  return fact
}
