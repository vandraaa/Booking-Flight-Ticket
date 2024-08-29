import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import { getUser } from "@/lib/auth";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FilterClass from "./components/filter-class";
import FilterFlight from "./components/filter-flight";
import FilterAirplane from "./components/filter-airplane";

const CardFlights = () => {
  return (
    <div className="w-full bg-slate-200 rounded-xl py-5 px-6 sm:px-12 my-5 flex flex-col lg:flex-row justify-between">
      <div className="md:flex justify-between w-full lg:w-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={"/assets/image/airplane1.jpg"}
            alt="airplane"
            width={80}
            height={80}
            className="rounded-xl sm:w-[110px] sm:h-[90px] lg:w-[130px] lg:h-[110px]"
          />
          <div className="ml-4">
            <h1 className="font-bold text-lg sm:text-2xl">Lion Air</h1>
            <p className="font-medium text-xs sm:text-sm text-slate-700">
              Economy Class
            </p>
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Price
          </p>
          <h1 className="font-bold text-base sm:text-xl leading-[0.96rem]">
            Rp 12.000.000
          </h1>
        </div>
      </div>
      <div className="md:flex lg:flex justify-between items-center w-full lg:w-auto">
        <div className="flex items-center gap-x-6 mb-4 md:mt-4 lg:mt-0 sm:mb-0">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-lg sm:text-2xl">14.00</h1>
            <p className="font-semibold text-xs text-slate-700">Jakarta</p>
          </div>
          <CircleArrowRight />
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-lg sm:text-2xl">15.00</h1>
            <p className="font-semibold text-xs text-slate-700">Semarang</p>
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <Button>Book Now</Button>
        </div>
      </div>
      <div className="my-auto flex items-center gap-x-6 justify-between md:hidden lg:flex w-full lg:w-auto">
        <div className="my-auto">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Price
          </p>
          <h1 className="font-bold text-base sm:text-xl leading-[0.96rem]">
            Rp 12.000.000
          </h1>
        </div>
        <div className="my-auto mt-2 sm:mt-1">
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};


export default async function AvailableFlights() {
  const { session, user } = await getUser();
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
                  512 Available Flights
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
        <div className="py-12 space-y-4 bg-slate-900">
          <div className="w-[80%] mx-auto">
            <h1 className="text-white font-bold text-3xl mb-5">
              Available Flights
            </h1>
            <CardFlights />
            <CardFlights />
            <CardFlights />
            <CardFlights />
            <CardFlights />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
