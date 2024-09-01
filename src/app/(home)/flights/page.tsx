import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { getUser } from "@/lib/auth";
import FilterClass from "./components/filter-class";
import FilterFlight from "./components/filter-flight";
import FilterAirplane from "./components/filter-airplane";
import { ListFlights } from "./components/list-flights";

export default async function AvailableFlights() {
  const { session, user } = await getUser();
  const flightLength = await prisma.flight.count();
  return (
    <main>
      <section className="sm:min-h-[45vh] min-h-[50vh] lg:min-h-[55vh] w-full bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-[20%] lg:bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent bg-black bg-opacity-20 h-[50vh] sm:h-[45vh] lg:h-[55vh]" />
        <div className="relative">
          <Navbar session={session} user={user} />

          <div className="sm:w-[80%] w-[85%] mx-auto mt-8 sm:mt-16">
            <div className="flex flex-col items-start lg:items-center lg:flex-row lg:justify-between justify-start">
              <div className="text-white">
                <h1 className="text-xl sm:text-3xl font-bold">
                  Semarang to Jakarta
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-slate-200">
                  {flightLength} Available Flights
                </p>
              </div>
              <div className="flex gap-x-8 sm:gap-x-6 gap-y-2 sm:gap-y-0 flex-wrap sm:flex-nowrap mt-6 sm:mt-12 lg:mt-0 text-xs sm:text-base">
                <FilterClass />
                <FilterFlight />
                <FilterAirplane />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 m-0 p-0">
        <ListFlights />
      </div>

      <Footer />
    </main>
  );
}
