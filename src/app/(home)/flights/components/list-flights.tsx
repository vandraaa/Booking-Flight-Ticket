import CardFlights from "./card-flights";
import { useContext } from "react";
import { FContext, FlightsContext } from "../provider/flights-provider";

export const ListFlights = () => {
//   const { flights, isLoading } = useContext(FlightsContext) as FContext;
//   console.log(flights)

  return (
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
  );
};
