import type { Metadata } from "next";
import "../../globals.css";
import "../../font.css";

export const metadata: Metadata = {
  title: "FlyVin- Success",
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
