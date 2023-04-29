import { useState } from "react"
import Completed from "./components/Completed"
import Difficulty from "./components/Difficulty"
import Homepage from "./components/Homepage"
import Timer from "./components/Timer"
import Workouts from "./components/Workouts"
import displayContext from "./displayContext"
import { useAttributes } from "./hooks/useAttributes"
import "animate.css"

function App() {
  const [display, setDisplay] = useState("homepage")
  const [workoutAttributes, setWorkoutAttributes] = useState({})
  const [workouts, setWorkouts] = useState([])

  // check for past workouts
  useAttributes(workoutAttributes, setWorkoutAttributes)

  const selectPage = () => {
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
      value={{
        setDisplay,
        workoutAttributes,
        setWorkoutAttributes,
        workouts,
        setWorkouts,
      }}
    >
      <div className="text-sm bg-dark-full text-dark-10 min-h-screen">
        {selectPage()}
      </div>
    </displayContext.Provider>
  )
}

export default App
