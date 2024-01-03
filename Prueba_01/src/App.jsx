import { useState, useEffect } from 'react'
import { IMAGE_ENDPOINT, FACT_ENDPOINT } from './constants'
import '../public/cat.css'

const Cat = () => {
  // Estados --> Usados para almacernar cualidades reativas del componente
  const [fact, setFact] = useState(null) // Valor null para que no muestre la imagen
  const [imageUrl, setImageUrl] = useState(null)
  // Funciones
  const handleFactChange = async () => {
    // Obtener un hecho aleatorio de gatos
    try {
      const request = await fetch(FACT_ENDPOINT)
      if (!request.ok) {
        throw new Error(`${request.status}:${request.statusText}`)
      }
      const json = await request.json()
      const fact = json.fact
      // Recuperar la primera palabra
      const firstWord = fact.split(' ')[0]
      // Actualizar el estado
      setFact(fact)
      // Actualizar el url de la imagen
      setImageUrl(`${IMAGE_ENDPOINT}${firstWord}`)
    } catch (error) {
      // Podriamos usar un effect para mostrar una modal en caso de error
      // Imprimir el error en la consola
      console.info(error)
    }
  }
  // Efectos --> Usados para ejecutar código arbitrario cuando cambian las dependencias
  // Los efectos en React deben tener una única responsabilidad
  useEffect(() => {
    handleFactChange()
  }, []) // [] como dependencias para que sólo se ejecute después del renderizado inicial
  // Componente del gato
  return (
    imageUrl && (
      <article>
        <p>{fact}</p>
        <img src={imageUrl} alt={`Imagen de un gato con el texto ${fact}`} />
      </article>
    )

  )
}

export function App () {
  return (
    <main>
      <h1>App cat facts and images</h1>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </main>
  )
}
