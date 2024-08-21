import { TypeSeat } from "@prisma/client"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateSeatPerClass = (flightId: string) => {
  const SEAT_CLASS: TypeSeat[] = [
    "ECONOMY",
    "BUSINESS",
    "FIRST"
  ]
  const SEAT_CODE = [
    "A", "B", "C", "D"
  ]

  // const seats: [seatNumber: string, type: TypeSeat, flightId: string][] = []
  const seats = []

  for(const className of SEAT_CLASS) {
    for(const seat of SEAT_CODE) {
      for(let i = 1; i <= 5; i++) {
        seats.push({
          seatNumber: `${seat}${i}`,
          type: className,
          flightId: flightId
        })
      }
    }
  }

  return seats
}

export const dateFormat = (date: Date, format = "DD MMM YYYY HH:mm") => {
  if (!date) {
    return "-";
  }

  const optionsDate: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24-hour format
  };

  const formattedDate = date.toLocaleDateString("id-ID", optionsDate);
  const formattedTime = date.toLocaleTimeString("id-ID", optionsTime);

  return `${formattedDate}, ${formattedTime}`;
};
