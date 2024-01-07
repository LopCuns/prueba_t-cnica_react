import { useEffect, useRef, useState } from 'react'
import { fetchNewFilms } from '../services/fetch_films'
// import withoutResult from '../mocks/withoutResult.json'

export const useMovies = ({ search }) => {
  const [responseMovies, setResponseMovies] = useState([])
  const isFirstSearch = useRef(true)
  useEffect(() => {
    if (isFirstSearch.current) isFirstSearch.current = false
    else if (search) fetchNewFilms({ search }).then(movies => setResponseMovies(movies))
  }, [search])
  return { responseMovies }
}
