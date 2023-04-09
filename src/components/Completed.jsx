import { BiDumbbell } from "react-icons/bi"
import { BsCheckCircle } from "react-icons/bs"

export default function Completed() {
  return (
    <section className="py-20 lg:py-32">
      <div className="w-[90%] max-w-[530px] mx-auto">
        <div className="flex flex-col gap-3 items-center justify-center mb-16">
          <BsCheckCircle className="text-orange text-6xl" />
          <span className="text-3xl md:text-4xl font-bold">GREAT JOB!</span>
        </div>
        <button className="text-dark-10 bg-gradient-to-r from-orange to-yellow rounded-md py-4 px-8 font-bold text-base flex items-center justify-center gap-3 relative isolate mx-auto">
          <BiDumbbell className="text-2xl" />
          <span>SEE ME NEXT TIME</span>
        </button>
      </div>
    </section>
  )
}

// <button className="text-dark-10 bg-gradient-to-r from-orange to-yellow rounded-md py-4 px-8 font-bold text-base flex items-center justify-center gap-3 relative isolate">
// <BiDumbbell className="text-2xl" />
// <span>GET STARTED</span>
// </button>
