import { RxCursorArrow } from "react-icons/rx"
import { AiOutlineMenu } from "react-icons/ai"
import { BiDumbbell } from "react-icons/bi"
import SectionTitle from "./common/SectionTitle"

export default function HowItWorks() {
  const contexts = [
    {
      id: 1,
      icon: <RxCursorArrow />,
      title: "Select your focus & difficulty",
      description:
        "Choose the part of your body you want to work on (e.g. abs, arms, legs) and your difficulty level (beginner to advanced).",
    },
    {
      id: 2,
      icon: <AiOutlineMenu />,
      title: "Get your workout list",
      description:
        "Flexin generates a list of exercises for you, with images and recommended reps/sets.",
    },
    {
      id: 3,
      icon: <BiDumbbell />,
      title: "Start your workout",
      description:
        'Click "Start Workout" to begin. Flexin displays each exercise in order, with a timer. Pause, skip ahead, or stop your workout anytime.',
    },
  ]

  return (
    <section className="bg-[#151515] relative overflow-x-hidden">
      <div className="py-32 w-[90%] mx-auto max-w-[1246px] lg:py-48">
        <SectionTitle>How it works?</SectionTitle>
        <div className="grid gap-24 lg:grid-cols-3">
          {contexts.map((context) => (
            <div
              key={context.id}
              className="flex flex-col items-center lg:items-start lg:text-start text-center animate__animated animate__fadeInRight"
            >
              <div className="bg-dark-90/[.25] p-5 md:p-6 rounded-lg mb-6 text-orange text-2xl">
                {context.icon}
              </div>
              <h2 className="font-bold text-lg mb-2">{context.title}</h2>
              <p className="text-dark-40 max-w-[315px] md:text-base">
                {context.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
