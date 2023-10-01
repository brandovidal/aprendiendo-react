import { CAT_ENDPOINT_IMAGE_URL } from '../contants'

export async function getImageUrl (fact) {
  if (!fact) return null

  const firstWord = fact.split(' ')[0]

  const response = await fetch(
    `${CAT_ENDPOINT_IMAGE_URL}/cat/says/${firstWord}?width=300&json=true`
  )
  const data = await response.json()

  const { url } = data
  return url
}
