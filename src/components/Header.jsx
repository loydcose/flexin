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
    <header className="isolate relative h-screen min-h-[500px] flex overflow-hidden">
      <HeaderBg />
      <div className="w-[90%] max-w-[1300px] mx-auto flex flex-col">
        <a href="/" className="block w-fit mt-12">
          <img
            src={Logo}
            alt="flexin logo"
            className="w-[110px] select-none pointer-events-none"
          />
        </a>
        <article className="my-auto">
          <h1 className="text-3xl font-bold italic tracking-tight mb-4 md:text-6xl animate__animated animate__fadeInUp max-w-[20ch]">
            Achieve your fitness goals at home with&nbsp;
            <span className="text-orange relative">
              <img
                src={Check}
                alt=""
                className="absolute -bottom-1 left-0 right-0  pointer-events-none select-none"
              />
              FlexIn
            </span>
            !
          </h1>
          <p className="text-dark-40 mb-16 leading-6 md:text-base max-w-[530px] animate__animated animate__fadeInUp">
            Achieve your fitness goals from home with FlexIn! Our personalized
            fitness plans help you get fit on your own terms.Start your journey
            towards a healthier, happier you today!
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href="#focus"
              className="group hover:scale-[103%] hover:shadow-xl hover:shadow-orange/[.15] transition-transform relative overflow-hidden text-dark-10 rounded-md py-4 px-10 flex items-center justify-center gap-3 isolate"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-yellow to-orange -z-20"></div>
              <div className="group-hover:opacity-100 transition-opacity absolute inset-0 bg-gradient-to-r from-yellow to-orange -z-10 opacity-0"></div>
              <BiDumbbell className="text-2xl" />
              <span className="font-semibold md:text-base">GET STARTED</span>
            </a>
            {isValidAttributes && (
              <button
                className="border-orange z-10 flex items-center justify-center gap-2 py-4 px-8 rounded-md border text-orange hover:bg-orange/[.10] transition-all focus:ring-2 focus:ring-orange active:bg-transparent"
                onClick={() => setDisplay("workouts")}
              >
                <span className="font-semibold md:text-base">
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
