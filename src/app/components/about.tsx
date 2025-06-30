import IQuestions from "@/app/models/questions.interface";
import DropDown from "@/app/components/ui/dropdown";

const questionsAbout: IQuestions[] = [
  {
    question: "O que é a diabetes?",
    response:
      "Diabetes (ou diabetes mellitus) é uma doença crônica onde o corpo não produz insulina suficiente (hormônio que regula o açúcar no sangue) ou não a utiliza corretamente. Isso leva ao acúmulo de glicose no sangue, que pode causar complicações se não for controlado.",
    id: 1,
  },
  {
    question: "Quais são os tipos de diabetes?",
    response:
      "Pré- diabetes: Níveis de glicose acima do normal, mas ainda não caracterizam diabetes. Reversível com alimentação balanceada e exercícios. Diabetes gestacional: Acontece durante a gravidez devido a alterações hormonais. Requer acompanhamento para evitar riscos à mãe e ao bebê. Tipo 1 : Doença autoimune onde o pâncreas para de produzir insulina. Tipo 2 : O corpo produz insulina, mas não a usa bem (resistência à insulina).",
    id: 3,
  },
  {
    question: "Como é feito o diagnóstico da diabetes?",
    response:
      "O diagnóstico é simples e feito através de exames de sangue: Teste de glicemia em jejum: mede seu açúcar no sangue após 8 horas sem comer. Hemoglobina glicada (HbA1c): mostra sua média de glicose nos últimos 3 meses.",
    id: 2,
  },

  {
    question: "Quais são os sintomas mais comuns da diabetes?",
    response:
      "Sede e fome excessivas, vontade frequente de urinar, perda de peso sem motivo, cansaço e irritabilidade, formigamento nas mãos/pés, visão embaçada, feridas que demoram a cicatrizar, infecções frequentes.",
    id: 4,
  },
  {
    question: "Quais as diferenças entre a diabetes tipo 1 e do tipo 2?",
    response:
      "A diabetes tipo 1 é uma doença autoimune onde o  sistema imunológico ataca e destrói as células do pâncreas que são responsáveis pela produção de insulina, já no tipo 2 o corpo tem uma resistência à insulina, não utilizando de forma eficaz ou então não produz insulina o suficiente.",
    id: 5,
  },
  {
    question: "Como é o tratamento para a diabetes?",
    response:
      "Mudanças no estilo de vida, monitoramento constante, medicamentos e, em alguns casos, insulina diária.",
    id: 6,
  },
  {
    question: "Qual médico devo procurar?",
    response:
      "Endocrinologista é o especialista mais indicado. Para interpretar esses exames e, junto com você, criar o melhor plano de tratamento sempre pensando no seu bem-estar e qualidade de vida.",
    id: 7,
  },
  {
    question: "Tem tratamento no SUS?",
    response:
      "Sim, o SUS oferece tratamento integral e gratuito para diabetes por meio das suas unidades básicas de saúde (UBS), oferecendo acompanhamento médico, medicamentos, além de promover programas de educação para os pacientes e os familiares, visando ensinar a doença e os cuidados necessários.",
    id: 8,
  },
];

export default function About() {
  return (
    <section id="sobre" className="lg:px-20 ">
      <div className="pl-6 pr-20 pb-9">
        <h1 className="font-medium text-2xl text-gray-dark pb-4 pl-4">
          Sobre Diabetes
        </h1>
        <p className="text-secondary-gray pl-4 text-lg md:text-xl md:w-624 lg:w-720">
          Ficou com dúvidas sobre diabetes, condições, sitomas e tratamento?
        </p>
      </div>

      <div className="w-full px-8 flex flex-col gap-4 pb-16  md:items-start">
        {questionsAbout.map(({ question, response, id }) => {
          return (
            <DropDown
              key={id}
              title={question}
              description={response}
              background="white"
            />
          );
        })}
      </div>
    </section>
  );
}
