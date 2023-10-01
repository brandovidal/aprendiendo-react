import { useEffect, useState } from 'react'
import { getImageUrl } from '../services/image-url'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  const refreshImageUrl = () => {
    getImageUrl(fact).then(setImageUrl)
  }

  useEffect(refreshImageUrl, [fact])

  return { imageUrl }
}
