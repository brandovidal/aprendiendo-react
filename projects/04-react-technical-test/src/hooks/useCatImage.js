import { useEffect, useState } from 'react'

import { getImageUrl } from '../services/image-url'

import { CAT_ENDPOINT_IMAGE_URL } from '../contants'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  const refreshImageUrl = () => {
    getImageUrl(fact).then(setImageUrl)
  }

  useEffect(refreshImageUrl, [fact])

  return { imageUrl: imageUrl && `${CAT_ENDPOINT_IMAGE_URL}/${imageUrl}` }
}
