// "use client";

import type { Metadata } from "next";
import "../globals.css";
import "../font.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlyVin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
