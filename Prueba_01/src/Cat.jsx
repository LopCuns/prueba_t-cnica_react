import { useCatFact } from './services/hooks/useCatFact'
import { useCatImageUrl } from './services/hooks/useCatImgUrl'
import '../public/cat.css'

export function Cat () {
  // SIEMPRE QUE SE VEA UN USEEFFECT EN EL CUERPO DE UN COMPONENTE, preguntarse si es necesario y si se podría convertir en un
  // custom hook,Nótese lo limpio que ha quedado el componente una vez extraidos todos los useEffect
  // La funcinoalidad ha sido simplificada y limpiada con custom hooks (services/hooks;donde se encuentran los hooks)
  // Para ver la versión sin custom hooks acudir a la versión anterior del repositorio
  // Los custom hooks siguen las mimas reglas que los hooks normales (deben formar parte del primer nivel de un componente)
  // es decir, no pueden estar dentro de ifs, bucles, llamarse en funciones que no sean componentes...
  // los custom hooks deben empezar por use
  const { fact, handleFactChange } = useCatFact()
  // buena práctica usar los parámetros nombrados (con objetos) para mejor escalabilidad del código
  const { imageUrl } = useCatImageUrl({ fact }) // Obtiene el valor de retorno del customHook
  // Como useImgUrl tiene un useEffect que depende del fact, al cambiar este se renderiza el componente y se
  // Llama de nuevo a useImageUrl, devolviendo así el enlace actualizado
  return (
    imageUrl && (
      <article>
        <div>
          <p>{fact}</p>
          <img src={imageUrl} alt={`Imagen de un gato con el texto ${fact}`} />
        </div>
        <button onClick={handleFactChange}>Cambiar facto</button>
      </article>
    )

  )
}
