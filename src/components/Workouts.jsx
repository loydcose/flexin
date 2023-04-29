import { HiOutlineChevronDoubleRight } from "react-icons/hi"
import displayContext from "../displayContext"
import { useContext } from "react"
import capitalize from "../capitalize"
import { useGetWorkouts } from "../hooks/useGetWorkouts"
import WorkoutList from "./WorkoutList"

export default function Workouts() {
  const { setDisplay, workoutAttributes, workouts, setWorkouts } =
    useContext(displayContext)

  // fetches workouts
  const { loading } = useGetWorkouts(workouts, workoutAttributes, setWorkouts)

  return (
    <section className="py-20 lg:py-32 relative isolate">
      {!loading && (
        <div className="fixed inset-x-0 bottom-0 h-[135px] md:h-[200px] flex bg-gradient-to-t from-dark-full/[.75] to-transparent z-20">
          <button
            className="m-auto relative w-[170px] h-[60px] md:w-[220px] md:h-[67px] isolate group hover:scale-105 delay-100"
            onClick={() => setDisplay("timer")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange to-yellow -z-20 -skew-x-[30deg] rounded-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-orange to-yellow opacity-0 transition-opacity group-hover:opacity-100 -z-10 -skew-x-[30deg] rounded-lg"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
              <span className="font-bold italic text-sm md:text-base">
                START
              </span>
              <HiOutlineChevronDoubleRight className="opacity-50 text-xl" />
            </div>
          </button>
        </div>
      )}
      <div className="w-[90%] mx-auto max-w-[675px]">
        <div className="text-center mb-4">
          <h2 className="italic font-bold text-2xl md:text-4xl mb-3">
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
          <div className="grid gap-3 mb-20">
            {workouts.map((workout, index) => (
              <WorkoutList key={index} index={index} workout={workout} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
