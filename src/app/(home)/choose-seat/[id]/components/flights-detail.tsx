"use client";

import { SEAT_VALUE } from "@/app/(home)/flights/components/filter-class";
import useCheckoutData from "@/hooks/useCheckoutData";
import { getUrlFile } from "@/lib/supabase";
import {
  CHECKOUT_KEY,
  Checkout,
  SeatValuesType,
  getFormattedDate,
  getFormattedTime,
  rupiahFormat,
} from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import { useContext, useMemo } from "react";
import { SeatContext, SeatContextType } from "../provider/seat-provider";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function FlightsDetail({ flight, session }: any) {
  const data = useCheckoutData().data;
  const { replace, push } = useRouter();

  const { seat } = useContext(SeatContext) as SeatContextType;

  const selectedSeat = useMemo(() => {
    return SEAT_VALUE[(data?.seat as SeatValuesType) ?? "ECONOMY"];
  }, [data?.seat]);

  const handleBooking = () => {
    if (seat === null) {
      Swal.fire({
        title: "Select seat first!",
        text: "Please select seat first before booking",
        icon: "error",
        showConfirmButton: false,
      });
    }

    if (session === null) {
      Swal.fire({
        title: "Login first!",
        text: "Please sign in to your account to booking ticket",
        icon: "error",
        showConfirmButton: true,
        confirmButtonText: "Sign In",
      }).then((res) => {
        if (res.isConfirmed) {
          replace("/sign-in");
        }
      });
    }

    if (session && seat) {
      Swal.fire({
        title: "Are you sure want to booking this flight?",
        html: `${flight.departureCity} to ${
          flight.destinationCity
        } on ${getFormattedDate(flight.departureDate)} at ${getFormattedTime(
          flight.departureDate
        )}. <br> Selected Seat : ${
          seat.seatNumber
        } <br> Total price : ${rupiahFormat(
          flight.price + selectedSeat.additionalPrice
        )}`,
        icon: "question",
        showConfirmButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          const checkoutData: Checkout = {
            id: flight.id,
            seat: seat.type,
            flightDetail: flight,
            seatDetail: seat,
          };

          sessionStorage.setItem(CHECKOUT_KEY, JSON.stringify(checkoutData));
          push("/checkout");
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center w-full mt-12 md:mt-0">
      <h1 className="text-white font-bold mb-2 text-xl">
        {flight.departureCity} to {flight.destinationCity}
      </h1>
      <div className="mt-3 flex w-full justify-center gap-x-12">
        <div className="text-center">
          <h1 className="text-white font-semibold text-lg">
            {getFormattedTime(flight.departureDate)}
          </h1>
          <p className="text-slate-300 font-medium text-xs">
            {flight.departureCity}
          </p>
        </div>
        <ArrowRightCircle className="text-white text-4xl" />
        <div className="text-center">
          <h1 className="text-white font-semibold text-lg">
            {getFormattedTime(flight.arrivalDate)}
          </h1>
          <p className="text-slate-300 font-medium text-xs">
            {flight.destinationCity}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="w-[300px] h-[120px] ">
          <Image
            src={getUrlFile(flight.plane.image)}
            alt="airplane"
            width={300}
            height={120}
            className="rounded-lg size-full object-cover"
          />
        </div>
        <div className="mt-3">
          <h1 className="font-semibold text-white">{flight.plane.name}</h1>
          <p className="font-medium text-slate-300 text-[9px]">
            {flight.plane.code} - {selectedSeat.label} Class
          </p>
        </div>
        <div className="mt-5 space-y-1">
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Date</p>
            <p className="font-semibold">
              {getFormattedDate(flight.departureDate)}
            </p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Seat Choosen</p>
            <p className="font-semibold">{seat?.seatNumber}</p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Passenger</p>
            <p className="font-semibold">1 Person</p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Seat Price</p>
            <p className="font-semibold">
              {rupiahFormat(flight.price + selectedSeat.additionalPrice)}
            </p>
          </div>
        </div>
        <button
          onClick={handleBooking}
          className="w-full py-2 mt-4 text-center bg-sky-600 rounded-2xl text-white font-semibold text-sm hover:bg-sky-700 duration-300 ease-in"
        >
          Booking Ticket
        </button>
      </div>
    </div>
  );
}
