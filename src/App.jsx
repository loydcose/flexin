import { useEffect, useState } from "react"
import Completed from "./components/Completed"
import Difficulty from "./components/Difficulty"
import Homepage from "./components/Homepage"
import Timer from "./components/Timer"
import Workouts from "./components/Workouts"
import displayContext from "./displayContext"

function App() {
  const [display, setDisplay] = useState("homepage")
  const [workoutAttributes, setWorkoutAttributes] = useState({})
  const [workouts, setWorkouts] = useState([])
  const localStorageName = "flexinWorkout"

  const isValidAttributes = (obj) => {
    return obj.hasOwnProperty("part") && obj.hasOwnProperty("difficulty")
  }

  // check if device has past workouts
  useEffect(() => {
    const storage = localStorage.getItem(localStorageName)
    if (!storage) return

    const pastWorkout = JSON.parse(storage)
    if (typeof pastWorkout === "object") {
      if (isValidAttributes(pastWorkout)) {
        setWorkoutAttributes(pastWorkout)
      }
    }
  }, [])

  // save workout by saving to local storage
  useEffect(() => {
    if (isValidAttributes(workoutAttributes)) {
      localStorage.setItem(localStorageName, JSON.stringify(workoutAttributes))
    }
  }, [workoutAttributes])

  const checkDisplay = () => {
    switch (display) {
      case "difficulty":
        return <Difficulty />
      case "workouts":
        return <Workouts />
      case "timer":
        return <Timer />
      case "completed":
        return <Completed />
      default:
        return <Homepage />
    }
  }

  return (
    <displayContext.Provider
      value={{ setDisplay, workoutAttributes, setWorkoutAttributes, workouts, setWorkouts }}
    >
      <div className="text-sm bg-dark-full text-dark-10 min-h-screen">
        {checkDisplay()}
      </div>
    </displayContext.Provider>
  )
}

export default App
