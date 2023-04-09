import Background from "../assets/background.png"
import Blob from "../assets/blob.svg"

export default function HeaderBg() {
  return (
    <>
      {/* blob */}
      <div className="absolute inset-0 flex items-center overflow-hidden -z-10">
        <img src={Blob} alt="" className="scale-125 blur-3xl opacity-30" />
      </div>

      {/* mobile */}
      <div className="absolute inset-0 bg-dark-full opacity-90 -z-20"></div>
      <div className="absolute inset-0 overflow-hidden -z-30 lg:hidden">
        <img
          src={Background}
          alt="Girl standing"
          className="absolute w-[394px] -right-[200px] md:-right-[100px] -z-20 select-none pointer-events-none"
        />
      </div>

      {/* desktop */}
      <div className="absolute inset-y-0 right-0 w-[50%] isolate">
        <div className="triangle absolute inset-0 bg-gradient-to-t from-orange to-yellow hidden lg:block"></div>
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          <img
            src={Background}
            alt=""
            className="absolute top-32 left-[30%] w-[426px] drop-shadow-2xl select-none pointer-events-none"
          />
        </div>
      </div>
    </>
  )
}
