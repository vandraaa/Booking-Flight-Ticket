"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { TypeSeat } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import {
  FContext,
  FilterActionKind,
  FlightsContext,
} from "../provider/flights-provider";
import { useContext } from "react";

export const SEAT_VALUE = {
  ECONOMY: {
    label: "Economy",
    additionalPrice: 0,
  },
  BUSINESS: {
    label: "Business",
    additionalPrice: 500000,
  },
  FIRST: {
    label: "First",
    additionalPrice: 750000,
  },
};

const SEAT_OPTIONS: TypeSeat[] = ["BUSINESS", "ECONOMY", "FIRST"];

const FilterClass = () => {
  const { dispatch } = useContext(FlightsContext) as FContext;

  const handleChange = (value: string) => {
    console.log(value);

    dispatch({
      type: FilterActionKind.SET_SEAT,
      payload: {
        planeId: "",
        seat: value,
      },
    });
  };

  return (
    <div className="space-y-2 sm:w-[180px] w-[130px] text-white">
      <Label className="font-semibold">Seat Class</Label>
      <Select onValueChange={handleChange} defaultValue="ECONOMY">
        <SelectTrigger className="sm:w-[180px] w-[130px] font-medium">
          <SelectValue placeholder="Select Class"/>
        </SelectTrigger>
        <SelectContent className="font-medium">
          {SEAT_OPTIONS.map((seat, i) => (
            <SelectItem key={seat + i} value={seat}>
              {seat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterClass;
