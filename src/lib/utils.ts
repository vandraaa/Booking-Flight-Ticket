import { FlightSeat, TypeSeat } from "@prisma/client"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CHECKOUT_KEY = 'CHECKOUT_KEY';

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

export const dateFormat = (date: Date, format = "YYYY-MM-DDTHH:MM") => {
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

export const dateFormatInput = (date: Date, format = "YYYY-MM-DDTHH:MM") => {
  if (!date) {
    return "-";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};


export const rupiahFormat = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}

export const mappingSeats = (seats: FlightSeat[]) => {
  const totalSeatsEconomy = seats.filter((seat) => seat.type === "ECONOMY").length
  const totalSeatsBusiness = seats.filter((seat) => seat.type === "BUSINESS").length
  const totalSeatsFirst = seats.filter((seat) => seat.type === "FIRST").length

  const ecomony = seats.filter((seat) => seat.type === "ECONOMY" && seat.isBooked).length
  const business = seats.filter((seat) => seat.type === "BUSINESS" && seat.isBooked).length
  const first = seats.filter((seat) => seat.type === "FIRST" && seat.isBooked).length

  return {
    totalSeatsEconomy,
    totalSeatsBusiness,
    totalSeatsFirst,
    
    ecomony,
    business,
    first
  }
}

export const getFormattedTime = (dateString: Date) => {
  const date = new Date(dateString);
  
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  return `${hours}.${minutes}`;
}

// export const getFormattedDate = (dateString: Date) => {
//   const options = { day: 'numeric', month: 'short', year: 'numeric', locale: 'id-ID' };
//   const date = new Date(dateString);
//   return date.toLocaleDateString('id-ID', options).replace('Jan', 'Jan').replace('Feb', 'Feb').replace('Mar', 'Mar')
//     .replace('Apr', 'Apr').replace('May', 'Mei').replace('Jun', 'Jun').replace('Jul', 'Jul')
//     .replace('Aug', 'Agu').replace('Sep', 'Sep').replace('Oct', 'Okt').replace('Nov', 'Nov')
//     .replace('Dec', 'Des');
// };

export const getFormattedDate = (date: Date, format = "YYYY-MM-DDTHH:MM") => {
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

  return `${formattedDate}`;
};