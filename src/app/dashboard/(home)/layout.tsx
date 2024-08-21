// "use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plane, PlaneTakeoff, Ticket, User } from "lucide-react";
import ButtonLogout from "./components/ButtonLogout";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andra Airlines",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {session, user} = await getUser();

  if(session === null || user.role === 'CUSTOMER') {
    redirect('/dashboard/signin')
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <nav className="border-b border-muted p-5 bg-sky-900 fixed w-full z-20">
            <div className="flex flex-row items-center justify-between">
              <span className="font-bold text-white">Andra Airlines</span>
            </div>
          </nav>

          <section className="flex flex-row gap-5 items-start flex-nowrap">
            <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5 bg-white fixed z-10 mt-16">
              <div className="space-y-2">
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              </div>
              <div className="space-y-2">
                <div className="font-bold uppercase text-xs">Master Data</div>
                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/airplanes"}>
                    <Plane className="mr-2 size-4" />
                    Airplanes
                  </Link>
                </Button>

                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/flights"}>
                    <PlaneTakeoff className="mr-2 size-4" />
                    Flights
                  </Link>
                </Button>

                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/tickets"}>
                    <Ticket className="mr-2 size-4" />
                    Tickets
                  </Link>
                </Button>

                <Button
                  variant={"ghost"}
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/users"}>
                    <User className="mr-2 size-4" />
                    Users
                  </Link>
                </Button>
                
                <ButtonLogout />
              </div>
            </section>

            <section className="grow ml-[20%] px-5 overflow-y-auto z-0 mt-16">
              {children}
            </section>
          </section>

        </section>
      </body>
    </html>
  );
}
