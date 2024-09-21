"use client";

import useCheckoutData from "@/hooks/useCheckoutData";
import { FlightSeat } from "@prisma/client";
import { useContext, useMemo, useState } from "react";
import { SeatContext, SeatContextType } from "../provider/seat-provider";

interface SeatListProps {
  seats: FlightSeat[];
}

interface SeatItemProps {
  seat: FlightSeat;
}

function SeatCard({ seat }: SeatItemProps) {
  const { setSelectedSeat, seat: selectedSeat } = useContext(
    SeatContext
  ) as SeatContextType;

  return (
    <div
      onClick={() => {
        if (!seat.isBooked) {
          setSelectedSeat(seat);
        }
      }}
      className={`aspect-square duration-300 ease-in cursor-pointer 
    ${
      seat.isBooked
        ? "bg-gray-500 cursor-not-allowed border-gray-500 disabled"
        : selectedSeat?.seatNumber === seat.seatNumber
        ? "bg-sky-500 border-sky-500"
        : "bg-transparent border-white hover:bg-sky-500 hover:border-sky-500"
    } 
    border-[2px] rounded-md p-4 text-white font-medium text-center`}
    >
      <label htmlFor={seat.seatNumber}>{seat.seatNumber}</label>
      <input
        type="radio"
        name="seat"
        id={seat.seatNumber}
        value={seat.seatNumber}
        className="appearance-none hidden"
        disabled={seat.isBooked === true}
      />
    </div>
  );
}

export default function SeatList({ seats }: SeatListProps) {
  const checkout = useCheckoutData().data;

  const { seatA, seatB, seatC, seatD } = useMemo(() => {
    const rawSeats = seats.filter((seat) => seat.type === checkout?.seat);

    const seatA = rawSeats.filter((seat) => seat.seatNumber.startsWith("A"));
    const seatB = rawSeats.filter((seat) => seat.seatNumber.startsWith("B"));
    const seatC = rawSeats.filter((seat) => seat.seatNumber.startsWith("C"));
    const seatD = rawSeats.filter((seat) => seat.seatNumber.startsWith("D"));

    return {
      seatA,
      seatB,
      seatC,
      seatD,
    };
  }, [checkout, seats]);

  return (
    <div className="flex flex-row sm:justify-between justify-center gap-2 sm:gap-5">
      <div className="flex flex-col gap-2 sm:gap-4">
        {seatA.map((seat) => (
          <SeatCard key={seat.id} seat={seat} />
        ))}
      </div>
      <div className="flex flex-col gap-2 sm:gap-4">
        {seatB.map((seat) => (
          <SeatCard key={seat.id} seat={seat} />
        ))}
      </div>
      <div className="flex flex-col gap-2 sm:gap-4">
        {seatC.map((seat) => (
          <SeatCard key={seat.id} seat={seat} />
        ))}
      </div>
      <div className="flex flex-col gap-2 sm:gap-4">
        {seatD.map((seat) => (
          <SeatCard key={seat.id} seat={seat} />
        ))}
      </div>
    </div>
  );
}
