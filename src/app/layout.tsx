import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";
import AppInit from "./init/app.init";
import ContextComponent from "./context/context.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Hassoun - Portfolio",
  description: "Professional portfolio of Ahmad Hassoun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ContextComponent>
          <AppInit>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AppInit>
        </ContextComponent>
      </body>
    </html>
  );
}
