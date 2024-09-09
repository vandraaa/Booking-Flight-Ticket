
import type { Metadata } from "next";
import "../../globals.css";
import "../../font.css";
import FlightsProvider from "./provider/flights-provider";
import QCProvider from "./provider/query-provider";

export const metadata: Metadata = {
  title: "FlyVin - Flights",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QCProvider>
      <FlightsProvider>
        {children}
      </FlightsProvider>
    </QCProvider>
  );
} 
