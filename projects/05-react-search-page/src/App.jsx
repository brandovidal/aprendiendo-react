import { useRef } from 'react'

import './App.css'

import { Movies } from './components/movies'

import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const inputRef = useRef()

  const handleClick = event => {
    event.preventDefault()

    const form = Object.fromEntries(new window.FormData(event.target))
    // const value = form.get('query')
    console.log({ form })
  }

  return (
    <div className='page'>
      <header>
        <h1>Search App</h1>

        <form className='form' onSubmit={handleClick}>
          <input
            ref={inputRef}
            name='query'
            type='text'
            placeholder='Avengers, Star wars, Interstelar'
          />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
