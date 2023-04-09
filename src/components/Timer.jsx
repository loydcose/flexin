import TimerControls from "./TimerControls"
import { useEffect, useState } from "react"
import { AiOutlinePause } from "react-icons/ai"
import { BsStopFill } from "react-icons/bs"
import PushUp from "../assets/workouts/pushup.gif"
import FlutterKicks from "../assets/workouts/flutter-kicks.gif"
import JumpingJacks from "../assets/workouts/jumping-jacks.gif"
import RussianTwist from "../assets/workouts/russian-twist.gif"
import SitUp from "../assets/workouts/sit-up.gif"

const exercises = [
  {
    id: 1,
    name: "Push up",
    image: PushUp,
    type: "repetition",
    longevity: 8,
  },
  {
    id: 2,
    name: "Flutter kicks",
    image: FlutterKicks,
    type: "duration",
    longevity: 5,
  },
  {
    id: 3,
    name: "Jumping jacks",
    image: JumpingJacks,
    type: "duration",
    longevity: 5,
  },
  {
    id: 4,
    name: "Russian twist",
    image: RussianTwist,
    type: "repetition",
    longevity: 12,
  },
  {
    id: 5,
    name: "Sit up",
    image: SitUp,
    type: "repetition",
    longevity: 8,
  },
]

export default function Timer() {
  const [width, setWidth] = useState(100)
  const [isRest, setIsRest] = useState(false)
  const [index, setIndex] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const exercise = exercises[index]
  const { id, name, image, type, longevity } = exercise

  useEffect(() => {
    const { type } = exercise
    let lengthInterval
    let duration = longevity
    setWidth(100)
    setSeconds(longevity)

    if (type === "duration") {
      const cut = 100 / longevity
      lengthInterval = setInterval(() => {
        if (duration < 0) {
          setIndex(prev => prev + 1)
        }

        setWidth((prev) => prev - cut / 100)
        setSeconds((prev) => prev - 0.01)
        duration = duration - 0.01
      }, 10)
    }

    return () => clearInterval(lengthInterval)
  }, [index])

  return (
    <section className="py-20 lg:py-32">
      <div className="w-[90%] max-w-[530px] mx-auto">
        {/* top text */}
        <TimerControls
          arrLength={exercises.length}
          index={index}
          setIndex={setIndex}
          exercise={exercise}
        >
          <p className="md:text-base text-dark-50 mb-2 text-center">
            {index + 1} / {exercises.length}
          </p>
          <p className="text-center font-bold italic text-lg md:text-xl mb-12">
            {name.toUpperCase()}
          </p>
          {/* timer */}
          <div className="relative isolate w-[250px] h-[250px] mb-6">
            <div
              style={{
                backgroundImage: `conic-gradient(brown ${width}%, transparent 0%)`,
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

              {/* space padding */}
              <div className="bg-dark-full absolute inset-[10px] rounded-full"></div>
              {/* picture */}
              <div className="absolute inset-[20px] rounded-full overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* longevity */}
          <span className="text-center block text-orange font-bold text-5xl mb-6">
            {type === "repetition"
              ? `x${longevity}`
              : `${seconds.toString().split(".").slice(0, 1).join("")}s`}
          </span>
        </TimerControls>
      </div>
    </section>
  )
}
