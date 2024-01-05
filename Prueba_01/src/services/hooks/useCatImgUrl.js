import { useState, useEffect } from 'react'
import { IMAGE_ENDPOINT } from '../../constants'

// Custom hook que cambia el url de la imagen pasandole el facto
export function useCatImageUrl ({ fact, limit = 1 }) {
  // Estados internos del custom hook
  const [imageUrl, setImageUrl] = useState(null)
  // Función que gestiona el cambio de imagen
  const handleImageChange = () => {
    if (!fact) return
    // Recuperar la primera palabra
    const firstWord = fact.split(' ', limit)
    // Actualizar el url de la imagen
    setImageUrl(`${IMAGE_ENDPOINT}${firstWord}`)
  }
  // Efecto para cambiar la imagen cuando cambia el fact
  useEffect(handleImageChange, [fact])
  // Retornar el imageUrl
  return { imageUrl }
} // --> { imageUrl }
