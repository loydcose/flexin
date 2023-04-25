import { useEffect, useState } from "react"

export const useSetWorkouts = (restDuration, workoutList) => {
  const [workouts, setWorkouts] = useState([
    {
      id: 0,
      title: "",
      image: "",
      type: "",
      longevity: 0,
    },
  ])

  const restItem = {
    title: "",
    type: "rest",
    longevity: restDuration,
  }

  const loadWorkouts = () => {
    // inserting rest obj alternately in the work list
    const newWorkoutList = workoutList
      .map((workout, index) => {
        if (index < workoutList.length - 1) {
          const currentItem = { ...workout, id: index + index + 1 }
          const nextItem = {
            ...restItem,
            id: index + index + 2,
            title: workoutList[index + 1].title,
          }
          return [currentItem, nextItem]
        } else {
          return [workout]
        }
      })
      .flat()
    setWorkouts(newWorkoutList)
  }

  useEffect(loadWorkouts, [])
  return { workouts }
}
