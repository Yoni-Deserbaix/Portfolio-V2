import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import memoji from "../app/assets/memoji-home.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoni - Développeur Frontend",
  description: "Yoni - Développeur Frontend",
  icons: {
    icon: [
      "https://raw.githubusercontent.com/Yoni-Deserbaix/portfolio-v2/main/src/app/assets/memoji-favicon.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
