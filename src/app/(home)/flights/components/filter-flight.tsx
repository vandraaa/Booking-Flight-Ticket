import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

const FilterFlight = () => {
  return (
    <div className="space-y-2 sm:w-[180px] w-[130px] z-20 text-white">
      <Label className="font-semibold">Flights</Label>
      <Select>
        <SelectTrigger className="sm:w-[180px] w-[130px] font-medium">
          <SelectValue placeholder="Select Flight" />
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

export default FilterFlight;
