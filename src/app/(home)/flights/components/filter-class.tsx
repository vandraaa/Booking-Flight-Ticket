import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

const FilterClass = () => {
  return (
    <div className="space-y-2 sm:w-[180px] w-[130px] text-white">
      <Label className="font-semibold">Seat Class</Label>
      <Select>
        <SelectTrigger className="sm:w-[180px] w-[130px] font-medium">
          <SelectValue placeholder="Select Class" />
        </SelectTrigger>
        <SelectContent className="font-medium">
          <SelectItem value="economy">Economy</SelectItem>
          <SelectItem value="bussiness">Bussiness</SelectItem>
          <SelectItem value="first">First</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterClass