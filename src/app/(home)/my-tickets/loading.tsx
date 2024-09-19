import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { TicketCardSkeleton } from "./components/loading-ticket-card";

export default async function MyTickets() {
  const { session, user } = await getUser();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main>
      <section className="sm:min-h-[45vh] min-h-[50vh] lg:min-h-[55vh] w-full bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-[20%] lg:bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent bg-black bg-opacity-20 h-[50vh] sm:h-[45vh] lg:h-[55vh]" />
        <div className="relative">
          <Navbar session={session} user={user} />
          <div className="sm:w-[80%] w-[85%] mx-auto mt-8 sm:mt-16">
            <div className="flex flex-col items-start lg:items-center lg:flex-row lg:justify-between justify-start">
              <div className="text-white">
                <h1 className="text-xl sm:text-3xl font-bold">My Tickets</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 m-0 p-0">
        <div className="bg-slate-950 py-12 space-y-4">
          <div className="w-[80%] mx-auto">
            <h1 className="text-white font-bold text-xl sm:text-3xl mb-3">
              Your Ticket
            </h1>
            <TicketCardSkeleton />
            <TicketCardSkeleton />
            <TicketCardSkeleton />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
