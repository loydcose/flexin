import { HiOutlineChevronDoubleRight } from "react-icons/hi"
import displayContext from "../displayContext"
import { useContext } from "react"
import capitalize from "../capitalize"
import { useGetWorkouts } from "../hooks/useGetWorkouts"

export default function Workouts() {
  const { setDisplay, workoutAttributes, workouts, setWorkouts } =
    useContext(displayContext)

  const { loading } = useGetWorkouts(workouts, workoutAttributes, setWorkouts)

  return (
    <section className="py-20 lg:py-32 relative isolate">
      {/* button container */}
      {!loading && (
        <div className="fixed inset-x-0 bottom-0 h-[200px] flex bg-gradient-to-t from-dark-full/[.75] to-transparent z-20">
          <button
            className="m-auto relative w-[220px] h-[67px] isolate group hover:scale-105"
            onClick={() => setDisplay("timer")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange to-yellow -z-20 -skew-x-[30deg] rounded-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-orange to-yellow opacity-0 transition-opacity group-hover:opacity-100 -z-10 -skew-x-[30deg] rounded-lg"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
              <span className="font-bold italic text-base">START</span>
              <HiOutlineChevronDoubleRight className="opacity-50 text-xl" />
            </div>
          </button>
        </div>
      )}

      {/* main content */}

      <div className="w-[90%] mx-auto max-w-[675px]">
        <div className="text-center mb-4">
          <h2 className="italic font-bold text-3xl md:text-4xl mb-3">
            {capitalize(workoutAttributes.part)} Workout
          </h2>
          <p className="text-orange md:text-base mb-12">
            {capitalize(workoutAttributes.difficulty)}
          </p>
          {!loading && (
            <p className="text-dark-40 italic text-base">
              {workouts.length} EXERCISES
            </p>
          )}
        </div>

        {loading ? (
          <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="w-14 h-14 animate-[spinner_1s_infinite_linear] rounded-[50%] border-r-orange border-[9px] border-solid border-dark-90"></div>
          </div>
        ) : (
          <div className="grid gap-3">
            {workouts.map((workout, index) => (
              <div key={index} className="bg-white/[.10] flex relative">
                <div className="absolute top-1/2 -translate-y-1/2 right-6 text-6xl md:text-7xl text-dark-85 font-bold">
                  {index + 1}
                </div>

                <div className="w-[118px] aspect-square">
                  <img
                    src={workout.image}
                    alt={workout.title}
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                </div>

                <div className="p-3">
                  <h3 className="font-bold text-base md:text-lg">
                    {workout.title}
                  </h3>
                  <span className="text-orange font-bold italic text-2xl md:text-3xl">
                    {workout.type === "duration"
                      ? `${workout.longevity}s`
                      : `x${workout.longevity}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
