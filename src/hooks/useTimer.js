import { useEffect, useRef, useState } from "react"

export const useTimer = (
  workouts,
  longevity,
  isPause,
  setIsPause,
  workoutIndex,
  setWorkoutIndex,
  restDuration,
  type,
  setDisplay
) => {
  const circleTimerInterval = useRef(null)
  const secondsTimerInterval = useRef(null)
  const [isRest, setIsRest] = useState(false)

  const timerDuration = useRef(null)
  const [circleTimerLength, setCircleTimerLength] = useState(100)
  const [secondsTimer, setSecondsTimer] = useState(0)

  let previousCircleLength = 0

  const clearTimers = () => {
    clearInterval(circleTimerInterval.current)
    clearInterval(secondsTimerInterval.current)
    clearTimeout(timerDuration.current)
  }

  const runTimer = (duration) => {
    setIsRest(type === "rest")
    const isLastWorkout =
      workoutIndex !== 0 && workoutIndex === workouts.length - 1
    const hasToBeContinue = type === "duration" && previousCircleLength
    const margin = 100 / duration

    circleTimerInterval.current = setInterval(() => {
      setCircleTimerLength((prev) => prev - margin / 100)
    }, 10)
    secondsTimerInterval.current = setInterval(() => {
      setSecondsTimer((prev) => prev - 1)
    }, 1000)

    // run this after the countdown
    timerDuration.current = setTimeout(() => {
      clearTimers()
      if (isLastWorkout) {
        setDisplay("completed")
        return
      }
      setWorkoutIndex((prev) => prev + 1)
    }, 1000 * (hasToBeContinue ? secondsTimer : duration))
  }

  const selectingWorkouts = () => {
    setIsPause(false)
    clearTimers()
    setIsRest(false)
    setCircleTimerLength(100)

    previousCircleLength = 0
    if (type === "rest") {
      setSecondsTimer(restDuration)
      runTimer(restDuration)
    }
    if (type === "duration") {
      setSecondsTimer(longevity)
      runTimer(longevity)
    }
    return () => {
      clearTimers()
    }
  }

  const handlePauseAndContinue = () => {
    // prevents running at the initial workout
    if (longevity === 0) return
    if (!isPause) {
      previousCircleLength = 100 / (longevity / secondsTimer)
      setCircleTimerLength(previousCircleLength)
      setSecondsTimer(secondsTimer)
      runTimer(longevity)
      return
    }
    clearTimers()
  }

  useEffect(selectingWorkouts, [workoutIndex, workouts])
  useEffect(handlePauseAndContinue, [isPause])

  return { circleTimerLength, secondsTimer, isRest }
}
