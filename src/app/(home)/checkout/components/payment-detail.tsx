"use client";

import { useMemo } from "react";
import { SEAT_VALUE } from "../../flights/components/filter-class";
import { SeatValuesType, rupiahFormat } from "@/lib/utils";
import useCheckoutData from "@/hooks/useCheckoutData";
import SkeletonPayment from "./skeleton-payment";
import useTransaction from "@/hooks/useTransaction";
import { FlightCardProps } from "./card";

export default function Payment({user}: FlightCardProps) {
  const data = useCheckoutData().data;
  const {payTrx, isLoading} = useTransaction({user});

  const selectedSeat = useMemo(() => {
    return SEAT_VALUE[(data?.seat as SeatValuesType) ?? "ECONOMY"];
  }, [data?.seat]);

  const price = data
    ? data?.flightDetail.price + selectedSeat.additionalPrice
    : 0;
  const insurance = price ? price * 0.24 : 0;
  const total = price ? price + insurance + 200000 : 0;

  if (!data) {
    return (
      <>
        <h2 className="mt-6 text-base md:text-lg font-bold text-white mb-3">
          Payment Details
        </h2>
        <SkeletonPayment />
      </>
    );
  }

  return (
    <main className="mt-6">
      <h2 className="text-base md:text-lg font-bold text-white mb-3">
        Payment Details
      </h2>
      <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
        <p className="font-medium">Seat Price</p>
        <p className="font-semibold">{rupiahFormat(price)}</p>
      </div>
      <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
        <p className="font-medium">Insurance 24%</p>
        <p className="font-semibold">{rupiahFormat(insurance)}</p>
      </div>
      <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
        <p className="font-medium">Service Fee</p>
        <p className="font-semibold">{rupiahFormat(200000)}</p>
      </div>
      <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
        <p className="font-medium">Total</p>
        <p className="font-semibold">{rupiahFormat(total)}</p>
      </div>
      <button
      onClick={() => payTrx()}
      disabled={isLoading}
      className="mt-5 py-2 text-xs md:text-sm text-center rounded-2xl bg-sky-500 text-white font-semibold hover:bg-sky-600 duration-300 ease-in w-full xl:w-2/3">
        Checkout
      </button>
    </main>
  );
}
