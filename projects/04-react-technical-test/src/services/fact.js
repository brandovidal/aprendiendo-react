import { CAT_ENDPOINT_RANDOM_FACT_URL } from '../contants'

export async function getRandomFact () {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
  const data = await response.json()

  const { fact } = data
  return fact
}
