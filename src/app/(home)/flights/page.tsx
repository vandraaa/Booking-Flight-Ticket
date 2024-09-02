import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { getUser } from "@/lib/auth";
import { ListFlights } from "./components/list-flights";
import Filter from "./components/filter";

export default async function AvailableFlights() {
  const { session, user } = await getUser();
  return (
    <main>
      <section className="sm:min-h-[45vh] min-h-[50vh] lg:min-h-[55vh] w-full bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-[20%] lg:bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent bg-black bg-opacity-20 h-[50vh] sm:h-[45vh] lg:h-[55vh]" />
        <div className="relative">
          <Navbar session={session} user={user} />
          <Filter />
        </div>
      </section>

      <div className="relative z-10 m-0 p-0">
        <ListFlights />
      </div>

      <Footer />
    </main>
  );
}
