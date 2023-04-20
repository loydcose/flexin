import TimerControls from "./TimerControls"
import { useContext, useEffect, useState } from "react"
import displayContext from "../displayContext"

export default function Timer() {
  const { workouts: workoutList } = useContext(displayContext)
  const [isPause, setIsPause] = useState(false)
  const [width, setWidth] = useState(100)
  const [isRest, setIsRest] = useState(false)
  const [index, setIndex] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [workouts, setWorkouts] = useState([
    {
      id: 0,
      title: "",
      image: "",
      type: "",
      longevity: 0,
    },
  ])
  const restDuration = 3

  const workout = workouts[index]
  const { id, title, image, type, longevity } = workout

  useEffect(() => {
    const restObj = {
      title: "",
      type: "rest",
      longevity: restDuration,
    }

    const arrCopy = workoutList
      .map((workout, index) => {
        if (index < workoutList.length - 1) {
          const currentItem = { ...workout, id: index + index + 1 }
          const nextItem = {
            ...restObj,
            id: index + index + 2,
            title: workoutList[index + 1].title,
          }
          return [currentItem, nextItem]
        } else {
          return [workout]
        }
      })
      .flat()
    setWorkouts(arrCopy)
  }, [])

  useEffect(() => {
    let lengthInterval, secondsInterval, countdownTimeout

    setIsRest(false)
    setWidth(100)

    console.log("runs inside useEffect?")

    const runCountdown = (duration) => {
      setIsRest(type === "rest")
      setSeconds(duration)

      const cut = 100 / duration
      lengthInterval = setInterval(() => {
        setWidth((prev) => prev - cut / 100)
      }, 10)
      secondsInterval = setInterval(() => {
        setSeconds((prev) => prev - 1)
      }, 1000)
      countdownTimeout = setTimeout(() => {
        clearInterval(lengthInterval)
        clearInterval(secondsInterval)
        setIndex((prev) => prev + 1)
      }, 1000 * duration)
    }

    if (type === "rest") {
      runCountdown(restDuration)
    } else if (type === "duration") {
      console.log("runs inside duration?")

      runCountdown(longevity)
    }

    return () => {
      clearInterval(lengthInterval)
      clearInterval(secondsInterval)
      clearTimeout(countdownTimeout)
    }
  }, [index, workouts])

  useEffect(() => {
    if (isPause) {
      console.log("Stop it!")
    } else {
      console.log("Run!")
    }
  }, [isPause])

  return (
    <section className="py-20 lg:py-32">
      <div className="w-[90%] max-w-[530px] mx-auto">
        <TimerControls
          arrLength={workouts.length}
          index={index}
          setIndex={setIndex}
          exercise={workout}
          isRest={isRest}
          setIsRest={setIsRest}
          workoutType={workout.type}
          isPause={isPause}
          setIsPause={setIsPause}
        >
          <p className="md:text-base text-dark-50 mb-2 text-center">
            {Math.floor((index + 3) / 2)} / {Math.ceil(workouts.length / 2)}
          </p>
          <p className="text-center font-bold italic text-lg md:text-xl mb-12">
            {title.toUpperCase()}
          </p>
          <div className="relative isolate w-[250px] h-[250px] mb-6">
            <div
              style={{
                backgroundImage: `conic-gradient(${
                  isRest ? "#4d4c4b" : "#e76456"
                } ${width}%, transparent 0%)`,
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
              ? `${seconds}s`
              : type === "repetition"
              ? `x${longevity}`
              : `${seconds}s`}
          </span>
        </TimerControls>
      </div>
    </section>
  )
}
