import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export default function PrevNextBtn({ direction }) {
  const buttonClasses = `absolute w-[47px] aspect-square rounded-lg hover:bg-dark-90 transition-all flex top-50% -translate-y-1/2 ${
    direction === "prev" ? "left-0" : "right-0"
  }`

  const iconComponent =
    direction === "prev" ? (
      <FiChevronLeft className="m-auto text-dark-50 text-2xl" />
    ) : (
      <FiChevronRight className="m-auto text-dark-50 text-2xl" />
    )

  return <button className={buttonClasses}>{iconComponent}</button>
}
