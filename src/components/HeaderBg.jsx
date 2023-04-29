import Background from "../assets/background.png"
import Blob from "../assets/blob.svg"

export default function HeaderBg() {
  return (
    <>
      <div className="absolute inset-0 flex items-center overflow-x-hidden -z-10">
        <img
          src={Blob}
          alt=""
          className="scale-125 blur-3xl opacity-30 md:opacity-20"
        />
      </div>
      <div className="absolute inset-0 bg-dark-full opacity-90 -z-20"></div>
      {/* mobile */}
      <div className="absolute inset-0 overflow-hidden -z-30 lg:hidden">
        <img
          src={Background}
          alt="girl standing"
          className="absolute w-[394px] -right-[200px] md:-right-[100px] -z-20 select-none pointer-events-none animate__animated animate__fadeInRight"
        />
      </div>
      {/* desktop */}
      <div className="absolute inset-y-0 right-0 w-[50%] isolate">
        <div className="triangle absolute inset-0 bg-gradient-to-t from-orange to-yellow hidden lg:block opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden hidden lg:block animate__animated animate__fadeInRight">
          <img
            src={Background}
            alt="girl standing"
            className="absolute bottom-0 left-[30%] w-[400px] drop-shadow-2xl select-none pointer-events-none"
          />
        </div>
      </div>
    </>
  )
}
