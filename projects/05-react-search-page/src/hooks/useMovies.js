import { useRef, useState } from 'react'

import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const prevoiusSearch = useRef(search)

  const getMovies = async () => {
    if (search === prevoiusSearch.current) return

    try {
      setLoading(true)
      setError(null)

      prevoiusSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, error }
}
