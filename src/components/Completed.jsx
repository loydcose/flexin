import { useContext, useEffect } from "react"
import { BiDumbbell } from "react-icons/bi"
import { BsCheckCircle } from "react-icons/bs"
import displayContext from "../displayContext"
import confetti from "canvas-confetti"
import Blob from "../assets/blob.svg"

export default function Completed() {
  const { setDisplay } = useContext(displayContext)

  // congratulation confetti
  useEffect(() => {
    confetti({
      particleCount: 50,
      spread: 100,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={Blob}
        alt=""
        className="select-none pointer-events-none block absolute blur-3xl opacity-50 md:opacity-20 w-[50vw] left-40 top-1/2 scale-150"
      />

      <div className="py-20 lg:py-32 min-h-screen grid place-items-center">
        <div className="w-[90%] max-w-[530px] mx-auto">
          <div className="flex flex-col gap-3 items-center justify-center mb-16">
            <BsCheckCircle className="text-orange text-6xl rotate-animation" />
            <span className="text-3xl md:text-4xl font-bold">GREAT WORK!</span>
          </div>
          <div className="animate__animated animate__fadeInUpBig">
            <button
              className="group hover:scale-105 hover:shadow-xl hover:shadow-orange/[.15] transition-transform relative overflow-hidden text-dark-10 rounded-md py-4 px-8 font-bold text-base flex items-center justify-center gap-3 isolate mx-auto"
              onClick={() => setDisplay("homepage")}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-yellow to-orange -z-20"></div>
              <div className="group-hover:opacity-100 transition-opacity absolute inset-0 bg-gradient-to-r from-yellow to-orange -z-10 opacity-0"></div>
              <BiDumbbell className="text-2xl" />
              <span>SEE ME NEXT TIME</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
