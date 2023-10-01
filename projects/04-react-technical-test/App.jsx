import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    async function getRandomFact () {
      const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const data = await response.json()

      const { fact } = data
      setFact(fact)
    }

    getRandomFact()

    return () => {
      setFact()
    }
  }, [])

  useEffect(() => {
    async function getImageUrl () {
      if (!fact) return

      const firstWord = fact.split(' ')[0]

      const response = await fetch(
        `${CAT_ENDPOINT_IMAGE_URL}/cat/says/${firstWord}?width=300&json=true`
      )
      const data = await response.json()

      const { url } = data
      setImageUrl(url)
    }

    getImageUrl()

    return () => {
      setImageUrl()
    }
  }, [fact])

  return (
    <main>
      <div>App de gatitos</div>

      {fact && <p>{fact}</p>}

      {imageUrl && (
        <img
          src={`${CAT_ENDPOINT_IMAGE_URL}/${imageUrl}`}
          alt={`Image extracted using the first word for ${fact}`}
        />
      )}
    </main>
  )
}

export default App
