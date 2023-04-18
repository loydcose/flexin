import TimerControls from "./TimerControls"
import { useContext, useEffect, useState } from "react"
import displayContext from "../displayContext"

export default function Timer() {
  const [width, setWidth] = useState(100)
  const [isRest, setIsRest] = useState(false)
  const [index, setIndex] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [restCountdown, setRestCountdown] = useState(3)

  const { workouts } = useContext(displayContext)
  const workout = workouts[index]
  const { id, title, image, type, longevity } = workout

  useEffect(() => {
    setWidth(100)

    if (type === "duration") {
      setSeconds(longevity)

      const cut = 100 / longevity
      var lengthInterval = setInterval(() => {
        setWidth((prev) => prev - cut / 100)
      }, 10)
      var countdownInterval = setInterval(() => {
        setSeconds((prev) => prev - 1)
      }, 1000)

      setTimeout(() => {
        clearInterval(lengthInterval)
        clearInterval(countdownInterval)
      }, longevity * 1000)
    }

    return () => {
      clearInterval(lengthInterval)
      clearInterval(countdownInterval)
    }
  }, [index])

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
        >
          <p className="md:text-base text-dark-50 mb-2 text-center">
            {index + 1} / {workouts.length}
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
