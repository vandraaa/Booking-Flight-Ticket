import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select";
import { TypeSeat } from "@prisma/client";
import { Label } from "@radix-ui/react-label";

const SEAT_OPTIONS: TypeSeat[] = ["BUSINESS", "ECONOMY", "FIRST"];

const FilterClass = () => {
  return (
    <div className="space-y-2 sm:w-[180px] w-[130px] text-white">
      <Label className="font-semibold">Seat Class</Label>
      <Select>
        <SelectTrigger className="sm:w-[180px] w-[130px] font-medium">
          <SelectValue placeholder="Select Class" />
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

export default FilterClass