import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plane, PlaneTakeoff } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andra Airlines",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav className="border-b border-muted p-5 bg-sky-900">
            <div className="flex flex-row items-center justify-between">
              <span className="font-bold text-white">Andra Airlines</span>
            </div>
          </nav>
          <section className="flex flex-row gap-5 items-start flex-nowrap">
            <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5 bg-white">
              <div className="space-y-2">
                <Button variant={"ghost"} asChild className="w-full justify-start">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              </div>
              <div className="space-y-2">
                <div className="font-bold uppercase text-xs">Master Data</div>
                <Button variant={"ghost"} asChild className="w-full justify-start">
                  <Link href={"/dashboard"}>
                    <Plane className="mr-2 size-4" />
                    Airplanes
                  </Link>
                </Button>
                <Button variant={"ghost"} asChild className="w-full justify-start">
                  <Link href={"/dashboard"}>
                    <PlaneTakeoff className="mr-2 size-4" />
                    Flights
                  </Link>
                </Button>
              </div>
            </section>
          </section>
        </section>
      </body>
    </html>
  );
}
