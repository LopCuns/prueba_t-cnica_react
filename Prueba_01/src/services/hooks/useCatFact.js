import { useEffect, useState } from 'react'
import { getRandomFact } from '../getFact'

// Hook que cambia el facto de gatos
export function useCatFact () {
  // Estados --> Usados para almacernar cualidades reativas del componente
  const [fact, setFact] = useState(null) // Valor null para que no muestre la imagen
  // Funciones
  const handleFactChange = async () => {
    // Obtener un hecho aleatorio de gatos
    const fact = await getRandomFact()
    // Actualizar el estado
    return setFact(fact)
  }
  // Efectos --> Usados para ejecutar código arbitrario cuando cambian las dependencias
  // Los efectos en React deben tener una única responsabilidad
  useEffect(() => {
    handleFactChange()
  }, []) // [] como dependencias para que sólo se ejecute después del renderizado inicial

  return { fact, handleFactChange }
}
