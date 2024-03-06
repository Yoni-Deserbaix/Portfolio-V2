import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import memoji from "../app/assets/memoji-home.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoni - Développeur Fullastack",
  description: "Yoni - Développeur Fullastack",
  icons: {
    icon: [
      "../app/assets/memoji-home.png"
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
