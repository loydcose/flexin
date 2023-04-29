import TimerControls from "./TimerControls"
import { useContext, useState } from "react"
import { useSetWorkouts } from "../hooks/useSetWorkouts"
import { useTimer } from "../hooks/useTimer"
import displayContext from "../displayContext"
import Blob from "../assets/blob.svg"

export default function Timer() {
  const { setDisplay, workouts: workoutList } = useContext(displayContext)
  const [isPause, setIsPause] = useState(false)
  const [workoutIndex, setWorkoutIndex] = useState(0)
  const restDuration = 20
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
    <section className="py-20 lg:py-32 min-h-screen grid place-items-center overflow-hidden relative">
      <img
        src={Blob}
        alt=""
        className="select-none pointer-events-none block absolute blur-3xl opacity-40 md:opacity-10 w-[90vw] left-1/4 top-0 scale-125"
      />
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
          <p className="text-center font-bold italic text-xl md:text-2xl mb-12">
            {title.toUpperCase()}
          </p>
          <div className="relative isolate w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
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
                <div className="absolute rounded-full md:inset-[26px] inset-[24px] bg-dark-85 z-20 flex">
                  <p className="m-auto font-bold text-xl md:text-2xl">
                    Take a rest
                  </p>
                </div>
              )}

              <div className="bg-dark-full absolute inset-[10px] md:inset-[12px]  rounded-full"></div>
              <div className="absolute md:inset-[26px] inset-[24px] rounded-full overflow-hidden">
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
            }  text-center block font-bold text-5xl md:text-6xl my-12`}
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
