import { useState, useEffect } from "react"

export const useLoadImages = (images) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = image
        img.onload = () => resolve(image)
        img.onerror = (err) => reject(err)
      })
    }

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setIsLoaded(true))
      .catch((err) => console.log("Failed to load images", err))
  }, [images])

  return { isLoaded }
}
