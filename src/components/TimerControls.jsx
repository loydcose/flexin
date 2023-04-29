import { useContext } from "react"
import { BsStopFill, BsFillPlayFill, BsCheckLg } from "react-icons/bs"
import { AiOutlinePause } from "react-icons/ai"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import displayContext from "../displayContext"

export default function TimerControls({
  children,
  arrLength,
  workout,
  isRest,
  isPause,
  setIsPause,
  workoutIndex,
  setWorkoutIndex,
}) {
  const { setDisplay } = useContext(displayContext)
  const canBeSkip = workout.type === "repetition" || isRest
  const prevNextClass =
    "absolute w-[47px] aspect-square rounded-lg hover:bg-dark-90/[.50] active:bg-transparent transition-all flex top-50% -translate-y-1/2"
  const prevNextIconClass = "m-auto text-dark-50 text-2xl"
  const buttonClass =
    "border-dark-85 flex items-center gap-2 py-4 px-10 rounded-xl border text-dark-50 text-base hover:bg-dark-90/[.25] transition-opacity focus:ring-2 focus:ring-dark-85 active:bg-transparent"

  const handlePrevNext = (type) => {
    isPause && setIsPause(false)
    // short delay for interval cleanup
    setTimeout(() => {
      if (type === "prev") {
        workoutIndex >= 1 && setWorkoutIndex((prev) => prev - 1)
      } else {
        const isLastWorkout =
          workoutIndex !== 0 && workoutIndex === arrLength - 1
        if (isLastWorkout) {
          setDisplay("completed")
        } else {
          setWorkoutIndex((prev) => prev + 1)
        }
      }
    }, 10)
  }

  return (
    <div className="flex flex-col items-center justify-center relative">
      <button
        className={prevNextClass + " left-0 md:left-4"}
        onClick={() => handlePrevNext("prev")}
      >
        <FiChevronLeft className={prevNextIconClass} />
      </button>
      <button
        className={prevNextClass + " right-0 md:right-4"}
        onClick={() => handlePrevNext("next")}
      >
        <FiChevronRight className={prevNextIconClass} />
      </button>
      {children}
      <div className="flex items-center gap-5">
        {canBeSkip ? (
          <button
            className="border-orange flex items-center gap-2 py-4 px-10 rounded-xl border text-orange hover:bg-orange/[.10] transition-all  focus:ring-2 focus:ring-orange active:bg-transparent"
            onClick={() => handlePrevNext("next")}
          >
            <BsCheckLg />
            <span className="text-base">Done</span>
          </button>
        ) : (
          <button className={buttonClass} onClick={() => setIsPause(!isPause)}>
            {isPause ? (
              <>
                <BsFillPlayFill />
                <span>Continue</span>
              </>
            ) : (
              <>
                <AiOutlinePause />
                <span>Pause</span>
              </>
            )}
          </button>
        )}
        <button className={buttonClass} onClick={() => setDisplay("workouts")}>
          <BsStopFill />
          <span>Stop</span>
        </button>
      </div>
    </div>
  )
}
