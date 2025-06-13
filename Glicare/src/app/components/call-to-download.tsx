import IconPlayStore from "@/public/svg/icon-play-store";
import Button from "@/app/components/ui/button";
import IconAppleStore from "@/public/svg/icon-apple-store";
import Image from "next/image";

export default function CallToDownload() {
  return (
    <section className="pt-28 lg:px-8">
      <div className="flex items-end mx-8 rounded-3xl bg-gradient-background h-full lg:pt-36 lg:mx-16">
        <div className="flex flex-col justify-between px-4 py-10 gap-16 text-center h-full md:pl-16 md:pr-16 lg:pl-4 lg:items-center lg:flex-row lg:text-start">
          <div className="flex flex-col lg:gap-6 font-inter lg:px-10  ">
            <div className="flex flex-col  gap-4">
              <h1 className="font-medium p-2 text-4xl text-blue-dark md:text-6xl lg:w-480 lg:text-6xl/tight lg:text-start">
                Seu controle da diabetes muito mais simples!
              </h1>
              <p className="font-normal text-gray-dark text-xl md:ml-16 lg:ml-0 md:w-568 lg:w-480 lg:text-start">
                Se alimente nos horários certos, registre o histórico da sua
                glicemia e configure lembretes para medir a glicose.
              </p>
            </div>
            <div className="relative flex items-center justify-center mt-6 md:flex lg:hidden">
            <Image src="/image/Dr-Glico-hero-page.png"  alt="Dr. Glico" width={415} height={485} />
            </div>
            <div className="hidden md:flex flex-col md:mt-6 gap-6">
              <p className="font-medium text-xl">
                Baixe o Glicare agora e transforme sua saúde!
              </p>
              <div className="flex gap-8 pb-10 md:justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store"
                  aria-label="Baixar na Play Store"
                  target="_blank"
                >
                  <IconPlayStore />
                </a>
                <a
                  href="https://apps.apple.com"
                  aria-label="Baixar na Apple Store"
                  target="_blank"
                >
                  <IconAppleStore />
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Button classAttributes="bg-primary w-full">Baixe o Glicare</Button>
          </div>
          <div className="hidden lg:flex justify-center mb-16 mr-12 -mt-4">
            <Image src="/image/Dr-Glico-hero-page.png" alt="Dr. Glico" width={569}  height={665} />
          </div>
        </div>
      </div>
    </section>
  );
}
