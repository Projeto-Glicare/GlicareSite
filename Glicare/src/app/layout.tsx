import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/app/components/header";
import Footer from "./components/footer";



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
      <body
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
