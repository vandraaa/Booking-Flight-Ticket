"use client";

import { getUrlFile } from "@/lib/supabase";
import { getFormattedDate, getFormattedTime, rupiahFormat } from "@/lib/utils";
import { Airplane, Flight, FlightSeat, Ticket, User } from "@prisma/client";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

type Data = Ticket & {
  flight: Flight & { plane: Airplane };
  customer: User;
  seat: FlightSeat;
};

interface DetailTicketProps {
  data: Data;
}

export default function DetailTicket({ data }: DetailTicketProps) {
    const total = data.price;
    const service = 200000;
    const insurance = 0.24 * (total - service);
    const seatPrice = total - service - insurance;  

  return (
    <section className="bg-slate-950 w-full min-h-screen">
      <div className="py-12 px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-24 lg:space-y-0">
          <main className="flex flex-col items-center w-4/5 md:w-auto px-8 md:px-12 py-8 mx-auto bg-white p-2 rounded-2xl">
            <h1 className="text-slate-900 font-bold mb-2 text-lg md:text-xl">
              {data.flight.departureCity} to {data.flight.destinationCity}
            </h1>
            <div className="mt-3 flex w-full justify-center gap-x-12">
              <div className="text-center">
                <h1 className="text-slate-900 font-semibold text-lg">
                  {getFormattedTime(data.flight.departureDate)}
                </h1>
                <p className="text-slate-600 font-medium text-xs">
                  {data.flight.departureCity}
                </p>
              </div>
              <ArrowRightCircle className="text-slate-900 text-4xl" />
              <div className="text-center">
                <h1 className="text-slate-900 font-semibold text-lg">
                  {getFormattedTime(data.flight.arrivalDate)}
                </h1>
                <p className="text-slate-600 font-medium text-xs">
                  {data.flight.destinationCity}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Image
                src={getUrlFile(data.flight.plane.image)}
                alt="airplane"
                width={300}
                height={80}
                className="rounded-lg object-cover"
              />
              <div className="mt-3">
                <h1 className="font-semibold text-slate-900">
                  {data.flight.plane.name}
                </h1>
                <p className="font-medium text-slate-600 text-[9px]">
                  {data.flight.plane.code} - {data.seat.type} CLASS
                </p>
              </div>

              <div className="mt-4 space-y-1">
                <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
                  <p className="font-medium">Date</p>
                  <p className="font-semibold">
                    {getFormattedDate(data.flight.departureDate)}
                  </p>
                </div>
                <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
                  <p className="font-medium">Time</p>
                  <p className="font-semibold">
                    {getFormattedTime(data.flight.departureDate)}-{" "}
                    {getFormattedTime(data.flight.arrivalDate)}
                  </p>
                </div>
                <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
                  <p className="font-medium">Airport</p>
                  <p className="font-semibold">
                    {data.flight.departureCityCode} -{" "}
                    {data.flight.destinationCityCode}
                  </p>
                </div>
                <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
                  <p className="font-medium">Name</p>
                  <p className="font-semibold">{data.customer.name}</p>
                </div>
                <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
                  <p className="font-medium">Seat Choosen</p>
                  <p className="font-semibold">{data.seat.seatNumber}</p>
                </div>
                <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
                  <p className="font-medium">Passport</p>
                  <p className="font-semibold">{data.customer.passport}</p>
                </div>
                <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
                  <p className="font-medium">Passenger</p>
                  <p className="font-semibold">1 Person</p>
                </div>
              </div>
            </div>
          </main>
          <div className="flex flex-col w-[80%] lg:w-full mx-auto">
            <h2 className="text-base md:text-lg font-bold text-white mb-3">
              Additional Benefits
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="border-2 border-white bg-transparent rounded-2xl py-2 px-4 text-white hover:bg-white hover:text-black cursor-pointer duration-500 ease-in-out text-xs md:text-sm">
                <h1 className="font-bold">Choose Preferred Seat</h1>
              </div>
              <div className="border-2 border-white bg-transparent rounded-2xl py-2 px-4 text-white hover:bg-white hover:text-black cursor-pointer duration-500 ease-in-out text-xs md:text-sm">
                <h1 className="font-bold">More Comfort</h1>
              </div>
              <div className="border-2 border-white bg-transparent rounded-2xl py-2 px-4 text-white hover:bg-white hover:text-black cursor-pointer duration-500 ease-in-out text-xs md:text-sm">
                <h1 className="font-bold">Avoid Crowds</h1>
              </div>
            </div>
            <main className="mt-6">
              <h2 className="text-base md:text-lg font-bold text-white mb-3">
                Payment Details
              </h2>
              <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
                <p className="font-medium">ID Transaction</p>
                <p className="font-semibold">{data.seat.id}</p>
              </div>
              <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
                <p className="font-medium">Status</p>
                <p className="font-semibold">Success Paid</p>
              </div>
              <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
                <p className="font-medium">Seat Price</p>
                <p className="font-semibold">{rupiahFormat(seatPrice)}</p>
              </div>
              <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
                <p className="font-medium">Insurance 24%</p>
                <p className="font-semibold">{rupiahFormat(insurance)}</p>
              </div>
              <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
                <p className="font-medium">Service Fee</p>
                <p className="font-semibold">{rupiahFormat(service)}</p>
              </div>
              <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
                <p className="font-medium">Total</p>
                <p className="font-semibold">{rupiahFormat(total)}</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
