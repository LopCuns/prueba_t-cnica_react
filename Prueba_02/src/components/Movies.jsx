import ListOfMovies from './ListOfMovies'
import NoResult from './NoResult'

// Creamos un componente con la lógica
export default function Movies ({ movies }) {
  return (
    movies.length > 0 ? <ListOfMovies movies={movies} /> : <NoResult />
  )
}
