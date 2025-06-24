"use client";

import IUsersFeedback from "@/app/models/feedback.interface";
import IconToCardFeedback from "@/public/svg/icon-to-card-feedback";

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

export default function FeedbackCarrosel() {
  return (
    <div className="xl:hidden">
      <div className="flex flex-col gap-6 px-4">
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
  );
}
