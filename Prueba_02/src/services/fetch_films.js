import { FILM_SEARCH_ENDPOINT } from '../constants'

export const fetchNewFilms = async ({ search }) => {
  try {
    // Hacer la petición
    const fetching = await fetch(`${FILM_SEARCH_ENDPOINT}${search}`)
    if (!fetching.ok) {
      throw new Error('Error en la búsqueda')
    }
    // Extraer las películas de la petición
    const json = await fetching.json()
    const movies = await json.Search
    // Poner la lista de resultados en vacío
    if (!movies) return []
    // Mappear la respuesta
    const mappedMovies = movies?.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    })
    // Actualizar la lista de resultados
    return mappedMovies
  } catch (err) {
    console.error(`%c${err}`, 'color:blue;font-size;2rem')
  }
}
