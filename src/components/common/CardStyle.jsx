export default function CardStyle({ item, type }) {
  return (
    <>
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover -z-20 group-hover:scale-[103%] transition-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/[.75] to-black/[.15] group-hover:opacity-50 transition-opacity"></div>
      <h3
        className={`${
          type === "focus" ? "left-4" : "left-1/2 -translate-x-1/2"
        } font-bold text-base absolute bottom-4`}
      >
        {item.name.toUpperCase()} WORKOUT
        <br />
      </h3>
    </>
  )
}
