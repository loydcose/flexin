import { useEffect, useState } from "react"

export const useGetWorkouts = (workouts, workoutAttributes, setWorkouts) => {
  const [loading, setLoading] = useState(false)

  const getWorkouts = () => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { part, difficulty } = workoutAttributes
        const URL = `https://flexin-workout-api.onrender.com/workouts?part=${part}&difficulty=${difficulty}`
        const response = await fetch(URL)
        const data = await response.json()
        setWorkouts(data)
      } catch (error) {
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    if (workouts.length === 0) {
      fetchData()
    }
  }

  useEffect(getWorkouts, [])
  return { loading }
}
