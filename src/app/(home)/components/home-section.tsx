"use client";

import { Navbar } from "@/app/components/navbar";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { getFilterCity } from "../lib/data";
import { useEffect, useState } from "react";

type FlightData = {
  departureCity: string;
  destinationCity: string;
  _count: {
    departureCity: number;
    destinationCity: number;
  };
};

export default function HomeSection() {
  const [data, setData] = useState<FlightData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getFilterCity();
        setData(result || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="min-h-screen w-full bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-[20%] lg:bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-transparent bg-black bg-opacity-20" />
      <div className="relative">
        <Navbar />

        <div className="sm:w-[80%] w-[85%] mx-auto mt-8 sm:mt-20 my-16">
          <div className="text-white font-bold text-[26px] sm:text-5xl lg:text-5xl lg:space-y-2">
            <h1>Booking Made Easy</h1>
            <h1>For Endless Adventures</h1>
          </div>
          <div className="text-white font-medium text-sm mt-4 sm:mt-6 w-[80%] sm:w-2/3 lg:w-1/2">
            <p>
              With our user-friendly platform, you can book your flights in just
              a few clicks, leaving you more time to dream about your next
              destination.
            </p>
          </div>

          <div className="sm:mt-16 mt-8 w-full sm:w-[90%] mx-auto bg-white rounded-2xl px-6 py-4 sm:py-6">
            <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-y-0 lg:gap-x-4">
              <div className="space-y-2 lg:w-auto w-full">
                <p className="sm:text-sm text-xs font-semibold text-slate-700">
                  Departure City
                </p>
                <div className="flex items-center font-bold text-sm sm:text-base">
                  <Plane />
                  <div className="ml-2 w-full lg:w-auto border-none border-0">
                    <Select>
                      <SelectTrigger className="lg:w-[180px] w-full">
                        <SelectValue placeholder="Select Departure" />
                      </SelectTrigger>
                      <SelectContent>
                        {data?.map((item: any, key: any) => (
                          <SelectItem
                            key={`${key} ${item.departureCity}`}
                            value={item.departureCity}
                          >
                            {item.departureCity}
                          </SelectItem>
                        ))}
                        {isLoading && (
                          <SelectItem value="Loading...">Loading...</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block px-4">
                <div className="w-[2px] h-full bg-slate-300" />
              </div>
              <div className="space-y-2 lg:w-auto w-full">
                <p className="sm:text-sm text-xs font-semibold text-slate-700">
                  Destination City
                </p>
                <div className="flex items-center font-bold text-sm sm:text-lg">
                  <Plane />
                  <div className="ml-2 w-full lg:w-auto border-none border-0">
                    <Select>
                      <SelectTrigger className="lg:w-[180px] w-full">
                        <SelectValue placeholder="Select Destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {data?.map((item: any, key: any) => (
                          <SelectItem
                            key={item.destinationCity}
                            value={item.destinationCity}
                          >
                            {item.destinationCity}
                          </SelectItem>
                        ))}
                        {isLoading && (
                          <SelectItem value="Loading...">Loading...</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block px-4">
                <div className="w-[2px] h-full bg-slate-300" />
              </div>
              <div className="space-y-2 lg:w-auto w-full">
                <p className="sm:text-sm text-xs font-semibold text-slate-700">
                  Departure Date
                </p>
                <div className="flex items-center font-bold text-sm sm:text-lg">
                  <input
                    type="date"
                    className="border-none border-0 w-full lg:w-auto"
                  />
                </div>
              </div>
              <div className="px-4 lg:ml-3 mt-3 sm:mt-0 sm:px-0 sm:w-auto w-full">
                <Button className="w-full lg:w-auto h-full">Explore Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
