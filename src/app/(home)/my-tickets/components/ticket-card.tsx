import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import { getFormattedDate, getFormattedTime } from "@/lib/utils";
import { Airplane, Flight, FlightSeat } from "@prisma/client";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Data = Pick<Flight, "id"> & { 
    flight: Pick<Flight, "departureDate" | "arrivalDate" | "departureCity" | "destinationCity"> & {
        plane: Airplane
    }
} & {
    seat: Pick<FlightSeat, "type">
}


interface TicketProps {
    data: Data
}

export default function TicketCard({data}: TicketProps) {
  return (
    <div className="w-full bg-slate-200 rounded-xl py-5 px-6 sm:px-12 my-5 flex flex-col lg:flex-row justify-between">
      <div className="md:flex justify-between w-full lg:w-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={getUrlFile(data.flight.plane.image)}
            alt="airplane"
            width={80}
            height={80}
            className="rounded-xl sm:w-[110px] sm:h-[90px] lg:w-[130px] lg:h-[110px]"
          />
          <div className="ml-4">
            <h1 className="font-bold text-lg sm:text-2xl">{data.flight.plane.name}</h1>
            <p className="font-medium text-xs sm:text-sm text-slate-700">
              {data.seat.type} CLASS
            </p>
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <h1 className="font-bold text-base sm:text-xl leading-[0.96rem]">
            {getFormattedDate(data.flight.departureDate)}
          </h1>
        </div>
      </div>
      <div className="md:flex lg:flex justify-between items-center w-full lg:w-auto">
        <div className="flex items-center gap-x-6 mb-4 md:mt-4 lg:mt-0 sm:mb-0">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-lg sm:text-2xl">{getFormattedTime(data.flight.departureDate)}</h1>
            <p className="font-semibold text-xs text-slate-700">{data.flight.departureCity}</p>
          </div>
          <CircleArrowRight />
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-lg sm:text-2xl">{getFormattedTime(data.flight.arrivalDate)}</h1>
            <p className="font-semibold text-xs text-slate-700">{data.flight.destinationCity}</p>
          </div>
        </div>
        <Link href={`/my-tickets/detail/${data.id}`} className="my-auto hidden md:block lg:hidden">
          <Button>Detail Ticket</Button>
        </Link>
      </div>
      <div className="my-auto flex items-center gap-x-6 justify-between md:hidden lg:flex w-full lg:w-auto">
        <div className="my-auto">
          <h1 className="font-bold text-base sm:text-xl leading-[0.96rem]">
          {getFormattedDate(data.flight.departureDate)}
          </h1>
        </div>
        <Link href={`/my-tickets/detail/${data.id}`} className="my-auto mt-2 sm:mt-1">
          <Button>Detail Ticket</Button>
        </Link>
      </div>
    </div>
  );
}
