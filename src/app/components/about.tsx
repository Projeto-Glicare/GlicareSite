import TypeCard from "./ui/type-card";

export default function About() {
  return (
    <section id="sobre" className="lg:px-20 ">
      <div className="pl-6 pr-20 pb-9">
        <h1 className="font-medium text-2xl text-gray-dark pb-4 pl-4">
          Sobre Diabetes
        </h1>
        <p className="text-secondary-gray pl-4 text-lg md:text-xl md:w-624 lg:w-720">
          Diabetes ou <strong>diabetes mellitus</strong> é uma doença crônica
          onde o corpo não produz insulina suficiente (hormônio que regula o
          açúcar no sangue) ou não a utiliza corretamente.
        </p>
      </div>

      <div className="w-full px-8 flex flex-col gap-4 pb-4  md:items-start grid lg:grid-cols-2">
        <TypeCard tipo="Tipo 1">
          <p>Doença autoimune onde o pâncreas para de produzir insulina.</p>
          <h3 className="font-bold">Sintomas</h3>
          <ul className="list-disc pl-4">
            <li>Sede e fome excessivas</li>
            <li>Vontade frequente de urinar</li>
            <li>Perda de peso sem motivo</li>
            <li>Cansaço e irritabilidade</li>
          </ul>
          <h3 className="font-bold">Tratamento</h3>
          <p>Uso diário de insulina e monitoramento constante.</p>
        </TypeCard>
        <TypeCard tipo="Tipo 2">
          <p>
            O corpo produz insulina, mas não a usa bem (resistência à insulina).
          </p>
          <h3 className="font-bold">Sintomas</h3>
          <ul className="list-disc pl-4">
            <li>Formigamento nas mãos/pés</li>
            <li>Visão embaçada</li>
            <li>Feridas que demoram a cicatrizar</li>
            <li>Infecções frequntes</li>
          </ul>
          <h3 className="font-bold">Tratamento</h3>
          <p>
            {" "}
            Mudanças no estilo de vida, medicamentos e, em alguns casos,
            insulina.
          </p>
        </TypeCard>
      </div>
      <div className="w-full px-8 flex flex-col gap-4 pb-16  md:items-start">
        <TypeCard tipo="Pré-Diabetes">
          <p>
            Níveis de glicose acima do normal, mas ainda não caracterizam
            diabetes. Reversível com alimentação balanceada e exercícios.
          </p>
        </TypeCard>
        <TypeCard tipo="Diabetes Gestacional">
          <p>
            Acontece temporariamente durante a gravidez devido a alterações
            hormonais. Requer acompanhamento para evitar riscos à mãe e ao bebê.
          </p>
        </TypeCard>
      </div>
    </section>
  );
}
