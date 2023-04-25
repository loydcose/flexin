import { useEffect } from "react"

export const useAttributes = (workoutAttributes, setWorkoutAttributes) => {
  const localStorageName = "flexinWorkout"

  const isValidAttributes = (obj) => {
    return obj.hasOwnProperty("part") && obj.hasOwnProperty("difficulty")
  }

  const checkPastWorkout = () => {
    const storage = localStorage.getItem(localStorageName)
    if (!storage) return
    const pastWorkout = JSON.parse(storage)
    if (typeof pastWorkout === "object") {
      if (isValidAttributes(pastWorkout)) {
        setWorkoutAttributes(pastWorkout)
      }
    }
  }

  const saveWorkout = () => {
    if (isValidAttributes(workoutAttributes)) {
      localStorage.setItem(localStorageName, JSON.stringify(workoutAttributes))
    }
  }

  useEffect(checkPastWorkout, [])
  useEffect(saveWorkout, [workoutAttributes])
}
