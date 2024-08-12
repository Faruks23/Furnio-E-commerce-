import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furnio",
  description: "Best furniture ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}  >

        <Header></Header>
        <main  className="min-h-screen">

          {children}
        </main>
        <Footer></Footer>

      </body>
    </html>
  );
}
