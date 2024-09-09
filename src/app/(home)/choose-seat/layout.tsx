import type { Metadata } from "next";
import "../../globals.css";
import "../../font.css";
import SeatProvider from "./[id]/provider/seat-provider";

export const metadata: Metadata = {
  title: "FlyVin - Choose Seat",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <SeatProvider>{children}</SeatProvider>
      </body>
    </html>
  );
}
