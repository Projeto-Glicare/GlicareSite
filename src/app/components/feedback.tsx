"use client";

import IconToCardFeedback from "@/public/svg/icon-to-card-feedback";
import IUsersFeedback from "@/app/models/feedback.interface";

const usersFeedback: IUsersFeedback[] = [
  {
    id: 1,
    feedback:
      "Desde que comecei a usar o Glicare, ficou muito mais fácil acompanhar minha diabetes.",
    user: "Rosângela Amaral",
    img: "/image/img-rosangela.jpeg",
  },
  {
    id: 2,
    feedback:
      "Meus pacientes adoram. Meu trabalho é mais fácil e posso ver a evolução de cada um.",
    user: "Dr. Mauro Cordeiro",
    img: "/image/img-dr-mauro.jpeg",
  },
  {
    id: 3,
    feedback: "Ficou muito mais simples de acompanhar a condição da minha mãe.",
    user: "Ana Carolina Medeiros",
    img: "/image/img-ana.jpeg",
  },
];

export default function Feedback() {
  return (
    <section id="depoimentos">
      <div className="flex flex-col gap-8 px-6 pt-14 md:pt-36 md:px-20 md:gap-16">
        <div className="flex flex-col gap-6 px-2">
          <h1 className="text-gray-dark font-medium pl-4 text-2xl w-72 md:w-full md:text-28">
            O que estão dizendo do Glicare?
          </h1>
          <p className="w-56 md:w-624 md:text-xl pl-4 text-secondary-gray">
            Muitos usuários já estão usando o Glicare para simplificarem a
            rotina e o controle da diabetes.
          </p>
        </div>

        <div className="hidden xl:flex justify-center gap-16">
          {usersFeedback.map((feedback) => (
            <div
              key={feedback.id}
              className="flex flex-col w-336 justify-center items-center text-center gap-6 p-6 rounded-2xl bg-white font-inter"
            >
              <IconToCardFeedback />
              <div className="h-20 flex items-center px-4 md:px-8">
                <p className="font-normal text-gray-dark text-base">
                  {feedback.feedback}
                </p>
              </div>
              <img
                src={feedback.img}
                alt="Feedback-img"
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="font-normal text-base text-secondary-gray">
                {feedback.user}
              </p>
            </div>
          ))}
        </div>

        <div className="xl:hidden flex flex-col gap-6 px-4">
          {usersFeedback.map((feedback) => (
            <div key={feedback.id} className="w-full max-w-md mx-auto">
              <div className="flex flex-col justify-center items-center text-center gap-4 p-6 rounded-2xl bg-white font-inter shadow-sm w-180 h-90">
                <IconToCardFeedback />
                <p className="font-normal text-gray-dark text-base px-6">
                  {feedback.feedback}
                </p>
                <img
                  src={feedback.img}
                  alt="Feedback-img"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <p className="font-normal text-base text-secondary-gray">
                  {feedback.user}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
