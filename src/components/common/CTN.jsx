import { CiDumbbell } from "react-icons/ci"

export default function CTN({ children }) {
  return (
    <button className="text-dark-10 bg-gradient-to-r from-orange to-yellow rounded-md py-3 px-8 font-semibold text-base flex items-center justify-center gap-3">
      <CiDumbbell className="text-2xl" />
      {children}
    </button>
  )
}
