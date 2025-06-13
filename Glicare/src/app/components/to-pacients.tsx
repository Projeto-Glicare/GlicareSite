import DropDown from "@/app/components/ui/dropdown"
import Image from "next/image"
import IQuestions from "@/app/models/questions.interface"

const questionsToPacients: IQuestions[] = [
    {
        question: "✨ Registro de glicemia",
        response: "Anote seus níveis de glicose em segundos de um jeito simples e rápido.",
        id: 1
    },
    {
        question: "⏰ Lembretes que cuidam de você",
        response: "Configure alertas para medir a glicemia, tomar seus medicamentos e se alimentar no horario certo. Nunca mais perca um compromisso importante!",
        id: 2
    },
    {
        question: "📊 Acompanhamento visual",
        response: "Veja suas medições em gráficos claros e entenda melhor como seu corpo responde.",
        id: 3
    },
    {
        question: "📱 Tudo na tela do celular",
        response: "Acesse seus dados rapidamente com widgets práticos na tela inicial.",
        id: 4
    },
    {
        question: "🆘 Botão de emergência",
        response: "Em situações urgentes, acione um alerta para um contato de confiança ou ligue direto para serviços de emergência.",
        id: 5
    },
]


export default function ToPacients() {
    return <section id="app" className="px-6 pt-16 md:pb-6 lg:pb-0 lg:px-20">

        <h1 className="font-medium text-2xl text-gray-dark pb-4">Nosso aplicativo</h1>
        <p className="text-secondary-gray text-lg pr-20 md:text-xl md:w-624 lg:w-720">O Glicare é um aplicativo dedicado a pacientes de diabetes, médicos, nutricionistas e demais profissionais da saúde que desejam maior simplicidade, praticidade e facilidade no acompanhamento, controle da evolução da doença e sintomas.
        </p>

        <div className="mt-14 bg-white rounded-3xl relative md:grid md:grid-cols-2">

            <div className="lg:pl-4">
                <div className="pt-6 pl-6 pb-9 pr-14 lg:pt-10">
                    <h2 className="font-medium text-2xl text-primary pb-4">Para pacientes</h2>
                    <p className="text-secondary-gray pr-8 md:pr-4">O Glicare foi feito para facilitar seu cuidado com o diabetes, trazendo praticidade e controle para sua rotina.
                    </p>
                </div>
                <div className="flex flex-col gap-4 px-6 pb-10">
                    {questionsToPacients.map(({ question, response, id }) => {
                        return <DropDown key={id} title={question} description={response} background="primary-gray" />
                    })}
                </div>
            </div>

            <span className="hidden md:block md:absolute md:-top-8 md:right-16 md:mt-16 lg:mt-0">
                <Image src={"/image/smartphone-right.png"} width={365} height={692} alt="smartphone" />
            </span>
        </div>

    </section>
}