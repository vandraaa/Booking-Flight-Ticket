import { z } from "zod";

export const formFlightsSchema = z.object({
  planeId: z.string({
    required_error: "Plane is required",
  }),
  price: z.string({
    required_error: "Price is required",
  }),
  departureDate: z.date({
    required_error: "Departure date is required",
  }),
  departureCity: z.string({
    required_error: "Departure city is required",
  }),
  departureCityCode: z
    .string({
      required_error: "Departure city code is required",
    })
    .min(3, "Departure city code must be at least 3 characters")
    .max(3, "Departure city code must be at most 3 characters"),
  destinationCity: z.string({
    required_error: "Arrival city is required",
  }),
  destinationCityCode: z
    .string({
      required_error: "Arrival city code is required",
    })
    .min(3, "Arrival city code must be at least 3 characters")
    .max(3, "Arrival city code must be at most 3 characters"),
  arrivalDate: z.date({
    required_error: "Arrival date is required",
  }),
});
