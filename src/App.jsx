import { useState } from "react"
import Completed from "./components/Completed"
import Difficulty from "./components/Difficulty"
import Homepage from "./components/Homepage"
import Timer from "./components/Timer"
import Workouts from "./components/Workouts"
import displayContext from "./displayContext"

function App() {
  const [display, setDisplay] = useState("timer")
  const [obj, setObj] = useState({})
  console.log(obj)

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
    <displayContext.Provider value={{ setDisplay, setObj }}>
      <div className="text-sm bg-dark-full text-dark-10 min-h-screen">
        {checkDisplay()}
      </div>
    </displayContext.Provider>
  )
}

export default App
