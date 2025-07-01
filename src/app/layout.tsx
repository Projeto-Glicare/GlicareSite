import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/components/header";
import Footer from "./components/footer";
import CookieModal from "./components/cookie-modal";
import { Suspense } from "react";
import GoogleAnalytics from "./components/google-analytics";

export const metadata: Metadata = {
  title: "Glicare",
  description: "Um site de saúde onde vai ajudar pessoas com diabetes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID!} />
        </Suspense>
        <Header />
        {children}
        <Footer />
        <CookieModal />
      </body>
    </html>
  );
}
