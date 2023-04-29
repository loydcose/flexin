import SectionTitle from "./common/SectionTitle"
import Beginner from "../assets/beginner.png"
import Intermediate from "../assets/intermediate.png"
import Advanced from "../assets/advanced.png"
import CardStyle from "./common/CardStyle"
import displayContext from "../displayContext"
import { useContext } from "react"
import { HiOutlineChevronLeft } from "react-icons/hi"
import { useLoadImages } from "../hooks/useLoadImages"
import Blob from "../assets/blob.svg"

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

  const { setDisplay, setWorkoutAttributes } = useContext(displayContext)

  // download all the images first before rendering this component
  const { isLoaded } = useLoadImages(difficulties.map((item) => item.image))

  const handleClick = (difficulty) => {
    setWorkoutAttributes((prev) => {
      return { ...prev, difficulty }
    })
    setDisplay("workouts")
  }

  return (
    <section className="grid place-items-center min-h-screen relative overflow-hidden">
      {!isLoaded ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-dark-full">
          <div className="w-14 h-14 animate-[spinner_1s_infinite_linear] rounded-[50%] border-r-orange border-[9px] border-solid border-dark-90"></div>
        </div>
      ) : (
        <>
          <img
            src={Blob}
            alt=""
            className=" select-none pointer-events-none block absolute blur-3xl opacity-30 md:opacity-20 w-[60vw] right-30 scale-150 top-0 rotate-90"
          />
          <div className="py-20 w-[90%] mx-auto max-w-[726px] lg:py-32 animate__animated animate__fadeIn">
            <SectionTitle>Choose your difficulty</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {difficulties.map((item) => (
                <button
                  key={item.id}
                  className="relative isolate group overflow-hidden h-[150px] md:h-auto"
                  onClick={() => handleClick(item.name)}
                >
                  <CardStyle item={item} type={"difficulty"} />
                </button>
              ))}
            </div>
            <button
              className="flex font-medium items-center gap-2 bg-dark-90/[.50] hover:bg-dark-90/[.35] transition-all py-4 px-8 basis-full rounded-md text-sm"
              onClick={() => setDisplay("homepage")}
            >
              <HiOutlineChevronLeft />
              <span>Back</span>
            </button>
          </div>
        </>
      )}
    </section>
  )
}
