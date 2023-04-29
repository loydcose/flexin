export default function WorkoutList({index, workout}) {
  return (
    <div className="bg-white/[.10] flex relative animate__fadeIn animate__animated">
      <div className="absolute top-1/2 -translate-y-1/2 right-6 text-6xl md:text-7xl text-dark-90/[.25] font-bold">
        {index + 1}
      </div>
      <div className="max-w-[118px] aspect-square">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-full object-cover pointer-events-none select-none"
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold text-base md:text-lg">{workout.title}</h3>
        <span className="text-orange font-bold italic text-2xl md:text-3xl">
          {workout.type === "duration"
            ? `${workout.longevity}s`
            : `x${workout.longevity}`}
        </span>
      </div>
    </div>
  )
}
