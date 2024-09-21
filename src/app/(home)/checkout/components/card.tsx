"use client";

import useCheckoutData from "@/hooks/useCheckoutData";
import { getUrlFile } from "@/lib/supabase";
import { Checkout, getFormattedDate, getFormattedTime } from "@/lib/utils";
import { User } from "lucia";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import SkeletonCardCheckout from "./skeleton-card";

export interface FlightCardProps {
  user: User | null;
}

export default function CardCheckout({ user }: FlightCardProps) {
  const data = useCheckoutData().data;

  if (!data) {
    return (
      <SkeletonCardCheckout />
    );
  }

  return (
    <main className="flex flex-col items-center w-4/5 md:w-auto px-8 md:px-12 py-8 mx-auto bg-white p-2 rounded-2xl">
      <h1 className="text-slate-900 font-bold mb-2 text-lg md:text-xl">
        {data?.flightDetail.departureCity} to{" "}
        {data?.flightDetail.destinationCity}
      </h1>
      <div className="mt-3 flex w-full justify-center gap-x-12">
        <div className="text-center">
          <h1 className="text-slate-900 font-semibold text-lg">
            {data?.flightDetail.departureDate
              ? getFormattedTime(data.flightDetail.departureDate)
              : ""}
          </h1>
          <p className="text-slate-600 font-medium text-xs">
            {data?.flightDetail.departureCity}
          </p>
        </div>
        <ArrowRightCircle className="text-slate-900 text-4xl" />
        <div className="text-center">
          <h1 className="text-slate-900 font-semibold text-lg">
            {data?.flightDetail.arrivalDate
              ? getFormattedTime(data.flightDetail.arrivalDate)
              : ""}
          </h1>
          <p className="text-slate-600 font-medium text-xs">
            {data?.flightDetail.destinationCity}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Image
          src={
            data?.flightDetail?.plane.image
              ? getUrlFile(data.flightDetail.plane.image)
              : ""
          }
          alt="airplane"
          width={300}
          height={80}
          className="rounded-lg object-cover"
        />
        <div className="mt-3">
          <h1 className="font-semibold text-slate-900">
            {data?.flightDetail.plane.name}
          </h1>
          <p className="font-medium text-slate-600 text-[9px]">
            {data?.flightDetail.plane.code} - {data?.seatDetail.type} CLASS
          </p>
        </div>

        <div className="mt-4 space-y-1">
          <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
            <p className="font-medium">Date</p>
            <p className="font-semibold">
              {data?.flightDetail.departureDate
                ? getFormattedDate(data.flightDetail.departureDate)
                : ""}
            </p>
          </div>
          <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
            <p className="font-medium">Time</p>
            <p className="font-semibold">
              {data?.flightDetail.departureDate
                ? getFormattedTime(data.flightDetail.departureDate)
                : ""}{" "}
              -{" "}
              {data?.flightDetail.arrivalDate
                ? getFormattedTime(data.flightDetail.arrivalDate)
                : ""}
            </p>
          </div>
          <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
            <p className="font-medium">Airport</p>
            <p className="font-semibold">
              {data?.flightDetail.departureCityCode} -{" "}
              {data?.flightDetail.destinationCityCode}
            </p>
          </div>
          <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
            <p className="font-medium">Name</p>
            <p className="font-semibold">{user?.name}</p>
          </div>
          <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
            <p className="font-medium">Seat Choosen</p>
            <p className="font-semibold">{data.seatDetail.seatNumber}</p>
          </div>
          <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
            <p className="font-medium">Passport</p>
            <p className="font-semibold">{user?.passport}</p>
          </div>
          <div className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm">
            <p className="font-medium">Passenger</p>
            <p className="font-semibold">1 Person</p>
          </div>
        </div>
      </div>
    </main>
  );
}
