import { getUrlFile } from "@/lib/supabase";
import { getFormattedTime } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";

export default function FlightsDetail({ flight }: any) {
  return (
    <div className="flex flex-col items-center w-full mt-12 md:mt-0">
      <h1 className="text-white font-bold mb-2 text-xl">
        {flight.departureCity} to {flight.destinationCity}
      </h1>
      <div className="mt-3 flex w-full justify-center gap-x-12">
        <div className="text-center">
          <h1 className="text-white font-semibold text-lg">{getFormattedTime(flight.departureDate)}</h1>
          <p className="text-slate-300 font-medium text-xs">{flight.departureCity}</p>
        </div>
        <ArrowRightCircle className="text-white text-4xl" />
        <div className="text-center">
          <h1 className="text-white font-semibold text-lg">{getFormattedTime(flight.arrivalDate)}</h1>
          <p className="text-slate-300 font-medium text-xs">{flight.destinationCity}</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="w-[300px] h-[120px] ">
          <img
            src={getUrlFile(flight.plane.image)}
            alt="airplane"
            className="rounded-lg size-full object-cover"
          />
        </div>
        <div className="mt-3">
          <h1 className="font-semibold text-white">{flight.plane.name}</h1>
          <p className="font-medium text-slate-300 text-[9px]">
            {flight.plane.code} - First Class
          </p>
        </div>
        <div className="mt-5 space-y-1">
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Date</p>
            <p className="font-semibold">{getFormattedTime(flight.departureDate)}</p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Seat Choosen</p>
            <p className="font-semibold">A1</p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Passenger</p>
            <p className="font-semibold">1 Person</p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Seat Price</p>
            <p className="font-semibold">Rp 500.000,00</p>
          </div>
        </div>
          <button className="w-full py-2 mt-4 text-center bg-sky-600 rounded-2xl text-white font-semibold text-sm hover:bg-sky-700 duration-300 ease-in">
            Pay
          </button>
      </div>
    </div>
  );
}
