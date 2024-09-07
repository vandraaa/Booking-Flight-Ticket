"use client";

import CardFlights from "./card-flights";
import { useContext, useEffect } from "react";
import {
  FContext,
  FlightsContext,
  FlightsWithAirplane,
} from "../provider/flights-provider";
import SkeletonCardFlights from "./loading-card";

export const ListFlights = () => {
  const context = useContext(FlightsContext) as FContext;

  const flights: FlightsWithAirplane[] = context?.flights?.data ?? [];
  const isLoading = context?.isLoading ?? false;

  console.log(flights);

  return (
    <div className="py-12 space-y-4 bg-slate-950">
      <div className="w-[80%] mx-auto">
        {flights.length > 0 ? (
          <>
            <h1 className="text-white font-bold text-3xl">Available Flights</h1>
            <p className="text-slate-300 font-semibold text-sm mb-8">
              Showing {flights.length} flights
            </p>
          </>
        ) : (
          ""
        )}

        {isLoading ? (
          <div className="space-y-5">
            <SkeletonCardFlights />
            <SkeletonCardFlights />
            <SkeletonCardFlights />
          </div>
        ) : flights.length > 0 ? (
          <>
            {flights.map((item) => (
              <CardFlights flight={item} key={item.id} />
            ))}

            <p className="text-slate-300 font-semibold text-sm mt-6 text-center">
              You've reached the end.
            </p>
          </>
        ) : (
          <p className="text-slate-300 font-semibold text-sm py-20 text-center">
            Flights Not Found. Try another filter.
          </p>
        )}
      </div>
    </div>
  );
};
