import { AiOutlinePause } from "react-icons/ai"
import { BsStopFill } from "react-icons/bs"

export default function TimerButton({ children, onClick }) {
  return (
    <button
      className="border-dark-85 flex items-center gap-2 py-4 px-8 rounded-xl border text-dark-50 text-base"
      onClick={onClick}
    >
      {children}
      
    </button>
  )
}
