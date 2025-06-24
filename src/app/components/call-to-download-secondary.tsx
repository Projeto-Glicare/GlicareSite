import Image from "next/image";
import StoreButtonsDark from "./ui/store-buttons";

export default function CallToDownloadSecondary() {
  return (
    <section className="my-16 bg-white">
      <div className="flex flex-col items-center px-9 text-center">
        <Image
          src={"/image/Glicare-Logotipo.png"}
          alt="Glicare Logotipo"
          width={330}
          height={330}
          className="aspect-circle pt-10 object-contain"
          priority
        />
        <p className="font-inter text-2xl font-medium text-primary py-8 lg:pt-10">
          Baixe o Glicare agora e transforme sua saúde!
        </p>
      </div>
      <div className="flex gap-6 justify-center px-6 pb-6  ">
        <StoreButtonsDark className="justify-center px-6 pb-6 " />
      </div>
    </section>
  );
}
