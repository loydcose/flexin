import { useContext, useState } from "react"
import { BsChevronDoubleRight, BsStopFill } from "react-icons/bs"
import { AiOutlinePause, AiOutlineStop } from "react-icons/ai"
import { BsFillPlayFill } from "react-icons/bs"
import { BsCheckLg } from "react-icons/bs"

import { FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi"
import { FiChevronLeft } from "react-icons/fi"
import TimerButton from "./common/TimerButton"
import displayContext from "../displayContext"
import PrevNextBtn from "./common/PrevNextBtn"

export default function TimerControls({
  children,
  arrLength,
  index,
  setIndex,
  exercise,
  isRest,
  setIsRest,
  workoutType,
  isPause,
  setIsPause,
}) {
  const { setDisplay } = useContext(displayContext)

  const prevNextClass =
    "absolute w-[47px] aspect-square rounded-lg hover:bg-dark-90 transition-all flex top-50% -translate-y-1/2"
  const prevNextIconClass = "m-auto text-dark-50 text-2xl"

  const handlePrevNext = (type) => {
    if (type === "prev") {
      index >= 1 && setIndex((prev) => prev - 1)
    } else {
      index < arrLength - 1 && setIndex((prev) => prev + 1)
    }
  }

  const handlePauseAndContinue = () => {
    setIsPause(!isPause)
  }

  return (
    <div className="flex flex-col items-center justify-center relative">
      <button
        className={prevNextClass + " left-0"}
        onClick={() => handlePrevNext("prev")}
      >
        <FiChevronLeft className={prevNextIconClass} />
      </button>
      <button
        className={prevNextClass + " right-0"}
        onClick={() => handlePrevNext("next")}
      >
        <FiChevronRight className={prevNextIconClass} />
      </button>

      {children}

      {/* bottom controls */}
      <div className="flex items-center gap-3">
        {exercise.type === "repetition" || isRest ? (
          <button
            className="border-orange flex items-center gap-2 py-4 px-8 rounded-xl border text-orange"
            onClick={() => handlePrevNext("next")}
          >
            <BsCheckLg />
            <span className="text-base">Done</span>
          </button>
        ) : (
          <TimerButton onClick={handlePauseAndContinue}>
            {isPause ? (
              <>
                <BsFillPlayFill />
                <span>Continue</span>
              </>
            ) : (
              <>
                {" "}
                <AiOutlinePause />
                <span>Pause</span>
              </>
            )}
          </TimerButton>
        )}
        <TimerButton onClick={() => setDisplay("workouts")}>
          <BsStopFill />
          <span>Stop</span>
        </TimerButton>
      </div>
    </div>
  )
}
