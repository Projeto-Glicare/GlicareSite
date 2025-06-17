import Image from "next/image";
import StoreButtonsDark from "./ui/store-buttons";

export default function CallToDownloadSecondary() {
    return <section className="my-16 bg-white">
        <div className="flex flex-col items-center px-9 text-center">
        <Image src={"/image/Glicare-Logotipo1.png"} alt="Glicare Logotipo" width={298}  height={298} className="aspect-square object-contain" priority   />
            <p className="font-inter text-xl font-medium text-primary pt-6 pb-8 lg:pt-10">Baixe o Glicare agora e transforme sua saúde!</p>
        </div>
        <div className="flex justify-center px-6 pb-6 gap-4 lg:pb-9">
        <StoreButtonsDark className="justify-center px-6 pb-6 lg:pb-9" />
        </div>
    </section>
}