import SectionTitle from "./common/SectionTitle"
import Beginner from "../assets/beginner.png"
import Intermediate from "../assets/intermediate.png"
import Advanced from "../assets/advanced.png"
import CTN from "./common/CTN"
import { CiDumbbell } from "react-icons/ci"
import CardStyle from "./common/CardStyle"
import displayContext from "../displayContext"
import { useContext } from "react"

export default function Difficulty() {
  const difficulties = [
    {
      id: 1,
      name: "beginner",
      image: Beginner,
    },
    {
      id: 2,
      name: "intermediate",
      image: Intermediate,
    },
    {
      id: 3,
      name: "advanced",
      image: Advanced,
    },
  ]

  const { setDisplay, setObj } = useContext(displayContext)

  const handleClick = (difficulty) => {
    setObj((prev) => {
      return { ...prev, difficulty }
    })
    setDisplay("workouts")
  }

  return (
    <section className="py-20 w-[90%] mx-auto max-w-[1026px] lg:py-32">
      <SectionTitle>Choose your difficulty</SectionTitle>
      <div className="grid grid-cols-3 gap-4 mb-12">
        {difficulties.map((item) => (
          <button
            key={item.id}
            className="relative isolate group overflow-hidden"
            onClick={() => handleClick(item.name)}
          >
            <CardStyle item={item} type={"difficulty"} />
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 text-base font-bold">
        <button className="text-dark-10 bg-gradient-to-r from-orange to-yellow rounded-md py-3 font-semibold text-base flex items-center justify-center gap-3 basis-full">
          <CiDumbbell className="text-2xl" />
          GENERATE WORKOUT
        </button>
        <button className="bg-dark-90 py-3 basis-full">BACK</button>
      </div>
    </section>
  )
}
