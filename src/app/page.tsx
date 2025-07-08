import About from "@/app/components/about";
import CallToDownload from "@/app/components/call-to-download";
import Contact from "@/app/components/contact";
import ToDoctors from "@/app/components/to-doctors";
import ToPacients from "@/app/components/to-pacients";
import WhoAre from "@/app/components/who-are";
import CallToDownloadSecondary from "@/app/components/call-to-download-secondary";
import Feedback from "@/app/components/feedback";
import StoresDownload from "./components/stores-download";
//import AdBanner from "./components/ui/ad-banner";

export default function Home() {
  return (
    <main>
      <CallToDownload />
      <ToPacients />
      <ToDoctors />
      <Feedback />
      {/* <AdBanner
        dataAdClient={process.env.NEXT_PUBLIC_PUBLISHER_ID!}
        dataAdSlot="5697690360"
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
      /> */}
      <CallToDownloadSecondary />
      <About />
      <Contact />
      <WhoAre />
      <StoresDownload />
    </main>
  );
}
