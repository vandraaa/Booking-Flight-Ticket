import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { getUser } from "@/lib/auth";
import DetailTicket from "./components/detail-ticket";
import { getTicketById } from "../lib/data";
import Link from "next/link";

type Params = {
  id: string
}

interface DetailTicketProps {
  params: Params
}

export default async function DetailTicketPage({ params }: DetailTicketProps) {
  const { session, user } = await getUser();
  const data = await getTicketById(params.id);

  return (
    <main>
      <section className="sm:min-h-[45vh] min-h-[30vh] lg:min-h-[55vh] w-full bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-[20%] lg:bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent bg-black bg-opacity-20 h-[50vh] sm:h-[45vh] lg:h-[55vh]" />
        <div className="relative">
          <Navbar session={session} user={user} />
          <div className="sm:w-[80%] w-[85%] mx-auto mt-8 sm:mt-16">
            <div className="flex flex-col items-start lg:items-center lg:flex-row lg:justify-between justify-start">
              <div className="text-white flex items-center gap-x-3 md:gap-x-6">
                <Link href={'/my-tickets'} className="text-xs sm:text-2xl lg:text-3xl font-bold">My Tickets</Link>
                <h1 className="text-xs sm:text-2xl lg:text-3xl font-bold">/</h1>
                <h1 className="text-xs sm:text-2xl lg:text-3xl font-bold">Details</h1>
                <h1 className="text-xs sm:text-2xl lg:text-3xl font-bold">/</h1>
                <div className="flex flex-col">
                    <h1 className="text-xs sm:text-2xl lg:text-3xl font-bold">Jakarta to New York</h1>
                    <h1 className="text-[9px] sm:text-sm lg:text-base font-semibold">19 September 2024</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 m-0 p-0">
        {data && <DetailTicket data={data} />}
      </div>

      <Footer />
    </main>
  );
}
