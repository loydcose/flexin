import TimerControls from "./TimerControls"
import { useContext, useState } from "react"
import { useSetWorkouts } from "../hooks/useSetWorkouts"
import { useTimer } from "../hooks/useTimer"
import displayContext from "../displayContext"

export default function Timer() {
  const { setDisplay, workouts: workoutList } = useContext(displayContext)
  const [isPause, setIsPause] = useState(false)
  const [workoutIndex, setWorkoutIndex] = useState(0)
  const restDuration = 10
  const { workouts } = useSetWorkouts(restDuration, workoutList)
  const workout = workouts[workoutIndex]
  const { title, image, type, longevity } = workout
  const cardNumber = Math.floor((workoutIndex + 3) / 2)
  const totalNumber = Math.ceil(workouts.length / 2)
  const { circleTimerLength, secondsTimer, isRest } = useTimer(
    workouts,
    longevity,
    isPause,
    setIsPause,
    workoutIndex,
    setWorkoutIndex,
    restDuration,
    type,
    setDisplay,
    workoutList
  )

  return (
    <section className="py-20 lg:py-32 min-h-screen grid place-items-center">
      <div className="w-[90%] max-w-[530px] mx-auto">
        <TimerControls
          arrLength={workouts.length}
          workout={workout}
          isRest={isRest}
          isPause={isPause}
          setIsPause={setIsPause}
          workoutIndex={workoutIndex}
          setWorkoutIndex={setWorkoutIndex}
        >
          <p className="md:text-base text-dark-50 mb-2 text-center">
            {cardNumber} / {totalNumber}
          </p>
          <p className="text-center font-bold italic text-lg md:text-xl mb-12">
            {title.toUpperCase()}
          </p>
          <div className="relative isolate w-[250px] h-[250px] mb-6">
            <div
              style={{
                backgroundImage: `conic-gradient(${
                  isRest ? "#4d4c4b" : "#e76456"
                } ${circleTimerLength}%, transparent 0%)`,
              }}
              className="rounded-full w-full h-full mb-4"
            >
              {/* center text */}
              {isRest && (
                <div className="absolute rounded-full inset-[20px] bg-dark-85 z-20 flex">
                  <p className="m-auto font-bold text-xl md:text-2xl">
                    Take a rest
                  </p>
                </div>
              )}

              <div className="bg-dark-full absolute inset-[10px] rounded-full"></div>
              <div className="absolute inset-[20px] rounded-full overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <span
            className={`${
              isRest ? "text-dark-50" : "text-orange"
            }  text-center block font-bold text-5xl mb-6`}
          >
            {isRest
              ? `${secondsTimer}s`
              : type === "repetition"
              ? `x${longevity}`
              : `${secondsTimer}s`}
          </span>
        </TimerControls>
      </div>
    </section>
  )
}
