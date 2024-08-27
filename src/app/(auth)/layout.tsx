// "use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "../font.css";
import {Navbar} from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andra Airlines",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="h-screen bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-[20%] lg:bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent bg-black bg-opacity-20" />
            <div className="relative">
                <Navbar />

                {children}
            </div>
        </section>
      </body>
    </html>
  );
}
