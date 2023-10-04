import { useState } from 'react'
import './App.css'

import { Movies } from './components/Movies'

import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { search, uptadeSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = event => {
    event.preventDefault()
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = event => {
    uptadeSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Search App</h1>

        <form className='form' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              value={search}
              onChange={handleChange}
              placeholder='Avengers, Star wars, Interstelar'
            />
            <input type='checkbox' onChange={handleSort} value={sort} />
            <button type='submit'>Search</button>
          </div>
          {error && <small style={{ color: 'red' }}>{error}</small>}
        </form>
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
