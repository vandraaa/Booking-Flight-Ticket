import type { Metadata } from "next";
import "./globals.css";
import "./font.css";

export const metadata: Metadata = {
  title: "Andra Airlines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
