"use client"

import { useSearchParams } from "next/navigation";
import FilterAirplane from "./filter-airplane";
import FilterClass from "./filter-class";
import FilterFlight from "./filter-flight";
import { getFormattedDate } from "@/lib/utils";

export default function Filter() {
  const query = useSearchParams();

  const params = {
    departure: query.get("departure"),
    destination: query.get("destination"),
    date: query.get("date"),
  };
  const getDate = params?.date ? new Date(params.date) : new Date();

  return (
    <div className="sm:w-[80%] w-[85%] mx-auto mt-8 sm:mt-16">
      <div className="flex flex-col items-start lg:items-center lg:flex-row lg:justify-between justify-start">
        <div className="text-white">
          <h1 className="text-xl sm:text-3xl font-bold">
            {params.departure && params.destination ? `${params.departure} to ${params.destination}` : "All Flights"}
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-200">
            {params.departure && params.destination ? "" : "Filter to find your flight"}
          </p>
          <p className="text-xs sm:text-sm font-semibold text-slate-200">
            {params.date ? getFormattedDate(getDate) : ""}
          </p>
        </div>
        <div className="flex gap-x-8 sm:gap-x-6 gap-y-2 sm:gap-y-0 flex-wrap sm:flex-nowrap mt-6 sm:mt-12 lg:mt-0 text-xs sm:text-base">
          <FilterClass />
          <FilterFlight />
          <FilterAirplane />
        </div>
      </div>
    </div>
  );
}
