import { dateFormat } from "@/lib/utils";
import { Flight } from "@prisma/client";
import { CircleArrowRight } from "lucide-react";

interface ColumnRouteFlightProps {
  flight: Flight;
}

const ColumnRouteFlight = ({ flight }: any) => {
  return (
    <div className="flex gap-x-5 justify-center items-center">
      <div>
        <div className="text-xl font-semibold text-slate-700 leading-4">
          {flight.departureCityCode}
        </div>
        <div className="text-base font-semibold text-slate-700 leading-4">
          {flight.departureCity}
        </div>
        <div className="text-xs font-semibold text-slate-700">
          {dateFormat(flight.departureDate, "YYYY-MM-DD HH:mm")}
        </div>
      </div>
      <div className="font-bold">
        <CircleArrowRight />
      </div>
      <div>
        <div className="text-xl font-semibold text-slate-700 leading-4">
          {flight.destinationCityCode}
        </div>
        <div className="text-base font-semibold text-slate-700 leading-4">
          {flight.destinationCity}
        </div>
        <div className="text-xs font-semibold text-slate-700">
          {dateFormat(flight.arrivalDate)}
        </div>
      </div>
    </div>
  );
};

export default ColumnRouteFlight;
