export default function SectionTitle({ children }) {
  return (
    <h1 className="text-center md:text-left font-bold italic text-2xl relative w-fit mx-auto mb-24 lg:mb-32 lg:ml-0">
      {children}
      <span className="absolute -bottom-2 lg:-bottom-4 bg-gradient-to-r from-orange to-yellow left-[15%] lg:left-0 right-[15%] h-[3px]"></span>
    </h1>
  )
}
