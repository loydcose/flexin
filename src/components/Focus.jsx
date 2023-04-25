import SectionTitle from "./common/SectionTitle"
import Abs from "../assets/abs.png"
import Chest from "../assets/chest.png"
import Arm from "../assets/arm.png"
import Back from "../assets/back.png"
import Leg from "../assets/leg.png"
import CardStyle from "./common/CardStyle"
import { useContext } from "react"
import displayContext from "../displayContext.js"

export default function Focus() {
  const { setDisplay, setWorkoutAttributes } = useContext(displayContext)
  const parts = [
    {
      id: 1,
      name: "abs",
      image: Abs,
    },
    {
      id: 2,
      name: "chest",
      image: Chest,
    },
    {
      id: 3,
      name: "arm",
      image: Arm,
    },
    {
      id: 4,
      name: "back",
      image: Back,
    },
    {
      id: 5,
      name: "leg",
      image: Leg,
    },
  ]

  const handleClick = (part) => {
    setWorkoutAttributes((prev) => {
      return { ...prev, part }
    })
    setDisplay("difficulty")
  }

  return (
    <section
      id="focus"
      className="py-20 w-[90%] mx-auto max-w-[1026px] lg:py-32"
    >
      <SectionTitle>Choose your focus</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parts.map((part) => (
          <button
            key={part.id}
            className="aspect-[4/3] relative isolate group overflow-hidden"
            onClick={() => handleClick(part.name)}
          >
            <CardStyle item={part} type={"focus"} />
          </button>
        ))}
      </div>
    </section>
  )
}
