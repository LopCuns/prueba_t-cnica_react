import '../public/App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

// useRef crea una referencia mutable que persiste en todo el ciclo de vida de nuestro componente, es decir,
// puede cambiar su valor sin provocar un nuevo renderizado del componente y no es reiniciado si el componente se reinicia
// Convertimos todas las funcionalidades del componente en customHooks para:
// 1.- Poder reutilizar dichas funcionalidades
// 2.- Tener el componente limpio
// 3.- Sacar la lógica de los componentes fuera de ellos( en el componente solo el HTML dentro del componente, sin lógica)
// el useSearch podría ser optimizado y usado en cualquier componente de formulario
// el useMovies podría ser usado en cualquier componente que requiera la información de las películas
// En el rederizado de una lista, usar como key el id de la API mejor que el index
export default function App () {
  // Obtener el valor de búsqueda
  const { search, handleSubmit, handleSearchChange, error } = useSearch()
  // Obtener los resultados del fetch con el valor de búsqueda
  const { responseMovies } = useMovies({ search })
  return (
    <div className='page'>
      <header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleSearchChange} name='search' type='search' placeholder='Wall Street Wolverine, 300, Troy ...' />
          <button type='submit'>Buscar</button>
        </form>
        {error ? <p style={{ color: 'red' }}>{error}</p> : ''}
      </header>
      <main>
        <Movies movies={responseMovies} />
      </main>
    </div>
  )
}
