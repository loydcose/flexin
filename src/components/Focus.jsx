import SectionTitle from "./common/SectionTitle"
import Abs from "../assets/abs.png"
import Chest from "../assets/chest.png"
import Arm from "../assets/arm.png"
import Back from "../assets/back.png"
import Leg from "../assets/leg.png"
import CardStyle from "./common/CardStyle"
import { useContext } from "react"
import displayContext from "../displayContext.js"
import Blob from "../assets/blob.svg"

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
    <section id="focus" className="relative isolate overflow-hidden">
      <img
        src={Blob}
        alt=""
        className="select-none pointer-events-none block absolute blur-3xl opacity-30 md:opacity-20 w-[55vw] right-40 scale-150 top-0 rotate-90"
      />
      <div className="py-32 w-[90%] mx-auto max-w-[1026px] lg:py-48">
        <SectionTitle>Choose your focus</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {parts.map((part) => (
            <button
              key={part.id}
              className="aspect-[4/3] relative isolate group overflow-hidden rounded-sm"
              onClick={() => handleClick(part.name)}
            >
              <CardStyle item={part} type={"focus"} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
