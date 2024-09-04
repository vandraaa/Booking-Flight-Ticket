import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FContext, FlightsContext, FlightsWithAirplane } from "../provider/flights-provider";
import { getUrlFile } from "@/lib/supabase";
import { CHECKOUT_KEY, SeatValuesType, getFormattedDate, getFormattedTime, rupiahFormat } from "@/lib/utils";
import { useContext, useMemo } from "react";
import { SEAT_VALUE } from "./filter-class";
import { useRouter } from "next/navigation";

const CardFlights = ({ flight }: { flight: FlightsWithAirplane }) => {
  const router = useRouter();
  const { state } = useContext(FlightsContext) as FContext;

  const selectedSeat = useMemo(() => {
    return SEAT_VALUE[state.seat?.toUpperCase() as SeatValuesType] ?? SEAT_VALUE.ECONOMY;
  }, [state.seat]);  

  const bookNow = () => {
    sessionStorage.setItem(CHECKOUT_KEY, JSON.stringify({
      id: flight.id,
      seat: state.seat?.toUpperCase() as SeatValuesType,
    }))
    router.push(`/choose-seat/${flight.id}`)
  }

  return (
    <div key={flight.id} className="w-full bg-slate-200 rounded-xl py-5 px-6 sm:px-12 my-5 flex flex-col lg:flex-row justify-between">
      <div className="md:flex justify-between w-full lg:w-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={getUrlFile(flight.plane.image)}
            alt="airplane"
            width={80}
            height={80}
            className="rounded-xl sm:w-[110px] sm:h-[90px] lg:w-[130px] lg:h-[110px]"
          />
          <div className="ml-4">
            <h1 className="font-bold text-lg sm:text-2xl">{flight.plane.name}</h1>
            <p className="font-semibold text-[9px] sm:text-xs text-slate-700">
              {getFormattedDate(new Date(flight.departureDate))}
            </p>
            <p className="font-medium text-xs sm:text-sm text-slate-700">
              {selectedSeat.label} Class
            </p>
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Price
          </p>
          <h1 className="font-bold text-base sm:text-xl leading-[0.96rem]">
            {rupiahFormat(flight.price + selectedSeat.additionalPrice)}
          </h1>
        </div>
      </div>
      <div className="md:flex lg:flex justify-between items-center w-full lg:w-auto">
        <div className="flex items-center gap-x-6 mb-4 md:mt-4 lg:mt-0 sm:mb-0">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-lg sm:text-2xl">{getFormattedTime(flight.departureDate)}</h1>
            <p className="font-semibold text-xs text-slate-700">{flight.departureCity}</p>
          </div>
          <CircleArrowRight />
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-lg sm:text-2xl">{getFormattedTime(flight.arrivalDate)}</h1>
            <p className="font-semibold text-xs text-slate-700">{flight.destinationCity}</p>
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <Button onClick={bookNow}>Book Now</Button>
        </div>
      </div>
      <div className="my-auto flex items-center gap-x-6 justify-between md:hidden lg:flex w-full lg:w-auto">
        <div className="my-auto">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Price
          </p>
          <h1 className="font-bold text-base sm:text-xl leading-[0.96rem]">
            {rupiahFormat(flight.price + selectedSeat.additionalPrice)}
          </h1>
        </div>
        <div className="my-auto mt-2 sm:mt-1">
          <Button onClick={bookNow}>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CardFlights;

