import Film from './Film'

// Extraemos este componente para que la función no se vuelva a crear cada vez que se renderiza
// el componente pp
export default function ListOfMovies ({ movies }) {
  'Componente que devuleve una lista de Films pasada'
  return (
    movies.map((movie) => {
      return (<Film title={movie.title} year={movie.year} poster={movie.poster} key={movie.id} />)
    })
  )
}
