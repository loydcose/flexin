import Logo from "../assets/logo.svg"
import { BiDumbbell } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"
import Check from "../assets/check.svg"
import HeaderBg from "./HeaderBg"
import { useContext } from "react"
import displayContext from "../displayContext"

export default function Header() {
  const { setDisplay, workoutAttributes } = useContext(displayContext)
  const isValidAttributes =
    workoutAttributes?.part && workoutAttributes?.difficulty

  return (
    <header className="isolate relative h-screen min-h-[500px] flex">
      <HeaderBg />
      <div className="w-[90%] max-w-[1246px] mx-auto flex flex-col">
        <a href="/" className="block w-fit mt-12">
          <img
            src={Logo}
            alt="flexin logo"
            className="w-[110px]  select-none pointer-events-none"
          />
        </a>
        <article className="my-auto">
          <h1 className="text-4xl font-bold italic tracking-tight mb-4 md:text-5xl">
            Achieve your fitness <br />
            goals at home with{" "}
            <span className="text-orange relative">
              <img
                src={Check}
                alt=""
                className="absolute -bottom-2 left-0 right-0 scale-[110%] pointer-events-none select-none"
              />
              FlexIn
            </span>
            !
          </h1>
          <p className="text-dark-40 mb-16 leading-6 md:text-base max-w-[530px]">
            Achieve your fitness goals from home with FlexIn! Our personalized
            fitness plans help you get fit on your own terms.Start your journey
            towards a healthier, happier you today!
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href="#focus"
              className="text-dark-10 bg-gradient-to-r from-orange to-yellow rounded-md py-4 px-10 flex items-center justify-center gap-3 relative isolate"
            >
              <BiDumbbell className="text-2xl" />
              <span className="font-semibold text-base">GET STARTED</span>
            </a>
            {isValidAttributes && (
              <button
                className="gradient-border flex items-center justify-center gap-3 text-orange "
                onClick={() => setDisplay("workouts")}
              >
                <span className="font-semibold text-base">
                  CONTINUE WORKOUT
                </span>
                <BsArrowRight className="text-2xl" />
              </button>
            )}
          </div>
        </article>
      </div>
    </header>
  )
}
