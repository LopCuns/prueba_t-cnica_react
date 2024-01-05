import { FACT_ENDPOINT } from '../constants'

// Nótese que aquí no se incluye el setFact, sino que simplemente se devuelve el
// fact.Esto es así porque el setFact forma parte del componente y no se debería
// extraer fuera de él
export const getRandomFact = async () => {
  try {
    const request = await fetch(FACT_ENDPOINT)
    if (!request.ok) {
      throw new Error(`${request.status}:${request.statusText}`)
    }
    const json = await request.json()
    return json.fact
  } catch (error) {
    // Podriamos usar un effect para mostrar una modal en caso de error
    // Imprimir el error en la consola
    console.info(error)
  }
}
