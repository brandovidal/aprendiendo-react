function mappedMovies (movies = []) {
  return movies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type
  }))
}

export async function searchMovies ({ search }) {
  if (search === '') return []

  try {
    return fetch(`https://www.omdbapi.com/?apikey=46dde19a&s=${search}`)
      .then(response => response.json())
      .then(data => mappedMovies(data.Search))
  } catch (error) {
    console.error({ error })
    throw new Error('Error searching movies')
  }
}
