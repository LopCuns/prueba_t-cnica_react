import { useState } from 'react'

export const useSearch = () => {
  // Estados
  const [search, setSearch] = useState()
  const [error, setError] = useState(false)
  // VALIDACIÓN DE FORMA NO CONTROLADA (preferible antes que la controlada)
  const handleSubmit = (event) => {
    event.preventDefault()
    // Accedemos al valor actual de la referencia
    const form = event.target
    // Obtener el formData
    const data = new FormData(form)
    // Obtener la búsqueda
    const newSearch = data.get('search')
    // Comprobar que se haya introducido información
    if (!newSearch || newSearch.startsWith(' ')) return setError('Búsqueda vacía')
    // Cambiar el valor del error
    setError(false)
    // Cambiar el valor de la búsqueda (afectará al useMovies)
    setSearch(newSearch)
    // Reiniciar el formulario
    form.reset()
  }
  // VALIDACIÓN DE FORMA CONTROLADA (más renders pero mayor control sobre los cambios del componente)
  // Permite hacer más fácil la validación de formularios
  const handleSearchChange = (e) => {
    // // Código que se ejecutará después de cada cambio de valor en el input search
    // // Obtener el nuevo valor del search y cambiarlo
    // const newSearch = e.target.value
    // setSearch(newSearch)
    // // Validaciones
    // // Como evitar que se renderice el componente si no se cumple cierta validación
    // if (newSearch.startsWith(' ')) return
    // // Aquí si que se volvería renderizar al cambiar el state error
    // if (newSearch === '') return setError('La búsqueda no puede estar vacía')
    // else setError(null)
  }

  return { search, handleSubmit, handleSearchChange, error }
}
