import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, uptadeSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError(' Not searched a movie with a empty string')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Not search a mavie with a number')
      return
    }

    if (search.length < 3) {
      setError('Too short')
      return
    }
    setError(null)
  }, [search])

  return { search, uptadeSearch, error }
}
