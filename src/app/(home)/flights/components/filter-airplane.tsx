import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { getAirplanes } from "../../lib/data";

const FilterAirplane = async () => {
  const airlines = await getAirplanes();

  return (
    <div className="space-y-2 sm:w-[180px] w-[130px] z-20 text-white">
      <Label className="font-semibold">Airplane</Label>
      <Select>
        <SelectTrigger className="sm:w-[180px] w-[130px]  font-medium">
          <SelectValue placeholder="Select Airplane" />
        </SelectTrigger>
        <SelectContent className="font-medium">
          {airlines.map((item, i) => (
            <SelectItem key={item.id + i} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterAirplane;
