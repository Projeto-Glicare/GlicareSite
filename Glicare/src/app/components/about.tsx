
import IQuestions from "@/app/models/questions.interface"
import DropDown from "@/app/components/ui/dropdown"

const questionsAbout: IQuestions[] = [
    {
        question: "O que é a diabetes?",
        response: "Diabetes é uma condição crônica onde o corpo não produz insulina suficiente (hormônio que regula o açúcar no sangue) ou não a utiliza corretamente. Isso leva ao acúmulo de glicose no sangue, que pode causar complicações se não for controlado.",
        id: 1
    }, {
        question: "Quais são os sintomas mais comuns da diabetes?",
        response: "Sede e fome excessivas, vontade frequente de urinar,  perda de peso sem motivo,  cansaço e irritabilidade, formigamento nas mãos/pés, visão embaçada, feridas que demoram a cicatrizar, infecções frequentes ",
        id: 2
    }, {
        question: "Quais as diferenças entre a pré-diabetes, diabetes gestacional,  diabetes tipo 1 e do tipo 2?",
        response: "Pré- diabetes: Níveis de glicose acima do normal, mas ainda não caracterizam diabetes. Reversível com alimentação balanceada e exercícios. Diabetes gestacional: Acontece durante a gravidez devido a alterações hormonais. Requer acompanhamento para evitar riscos à mãe e ao bebê. Tipo 1 : Doença autoimune onde o pâncreas para de produzir insulina. Tipo 2 : O corpo produz insulina, mas não a usa bem (resistência à insulina).",
        id: 3
    }, {
        question: "Como é feito o diagnóstico da diabetes?",
        response: "O diagnóstico é simples e feito através de exames de sangue: Teste de glicemia em jejum: mede seu açúcar no sangue após 8 horas sem comer. Hemoglobina glicada (HbA1c): mostra sua média de glicose nos últimos 3 meses. Endocrinologista é o especialista mais indicado. Para interpretar esses exames e, junto com você, criar o melhor plano de tratamento sempre pensando no seu bem-estar e qualidade de vida. Dica do Dr. Glico! Se notar sintomas como muita sede, cansaço ou visão embaçada, converse com seu médico sobre a possibilidade de fazer esses exames. Quanto antes descobrir, mais fácil é controlar!",
        id: 4
    }, {
        question: "Como é o tratamento para a diabetes?",
        response: "Mudanças no estilo de vida, monitoramento constante, medicamentos e, em alguns casos, insulina diaria",
        id: 5
    }, {
        question: "Como o Glicare pode te ajudar no controle do diabetes?",
        response: "O Glicare é seu parceiro no dia a dia, facilitando o monitoramento da glicemia, a organização dos medicamentos e a rotina alimentar.  Além de conectar você ao seu médico de forma prática e segura.",
        id: 6
    }, {
        question: "Como meu médico acompanha meus dados?",
        response: "Seu médico acessa suas informações de forma segura pelo aplicativo, mas somente se você autorizar o compartilhamento. Você tem total controle sobre seus dados.",
        id: 7
    }, {
        question: "Preciso me cadastrar para usar o Glicare?",
        response: "Sim, mas é rápido e gratuito! Basta baixar o app e criar sua conta em poucos passos.",
        id: 8
    }, {
        question: "Em quais dispositivos funciona?",
        response: "Disponível para todos: smartphones Android e iPhone (iOS).",
        id: 9
    }, {
        question: "O Glicare é pago?",
        response: "Para pacientes: 100% gratuito! Para profissionais de saúde: oferecemos planos premium com recursos avançados de acompanhamento.",
        id: 10
    },
]


export default function About() {
    return <section id="sobre" className="lg:px-20 pt-16">
        <div className="pl-6 pr-20 pb-9">
            <h1 className="font-medium text-2xl text-gray-dark pb-4">Sobre diabetes e o Glicare</h1>
            <p className="text-secondary-gray text-lg md:text-xl md:w-624 lg:w-720">Ficou com dúvidas sobre diabetes, condições e o Glicare? Tire elas aqui.</p>
        </div>

        <div className="w-full px-6 flex flex-col gap-4 pb-16 md:grid md:grid-cols-2 md:items-start">
            {questionsAbout.map(({ question, response, id }) => {
                return <DropDown key={id} title={question} description={response} background="white" />
            })}
        </div>
    </section>
}