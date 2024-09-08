"use client";

import useCheckoutData from "@/hooks/useCheckoutData";
import { FlightSeat } from "@prisma/client";
import { useMemo } from "react";

interface SeatListProps {
  seats: FlightSeat[];
}

interface SeatItemProps {
  seat: FlightSeat;
}

function SeatCard({ seat }: SeatItemProps) {
  return (
    <div className="bg-transparent aspect-square border-[2px] border-white rounded-md p-4 text-white font-medium text-center">
      <label htmlFor={seat.seatNumber}>{seat.seatNumber}</label>
      <input
        type="radio"
        name="seat"
        id={seat.seatNumber}
        value={seat.seatNumber}
        className="appearance-none checked:bg-gray-500 checked:border-gray-500"
        disabled={seat.isBooked ?? false}
      />
    </div>
  );
}

export default function SeatList({ seats }: SeatListProps) {
  const checkout = useCheckoutData();
  // console.log(checkout);

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
    <div className="flex flex-row justify-between gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col gap-4">
          {seatA.map((seat) => (
            <SeatCard key={seat.id} seat={seat} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {seatB.map((seat) => (
            <SeatCard key={seat.id} seat={seat} />
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-4">
          {seatC.map((seat) => (
            <SeatCard key={seat.id} seat={seat} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {seatD.map((seat) => (
            <SeatCard key={seat.id} seat={seat} />
          ))}
        </div>
      </div>
    </div>
  );
}
