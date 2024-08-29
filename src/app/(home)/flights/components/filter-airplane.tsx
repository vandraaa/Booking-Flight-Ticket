import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

const FilterAirplane = () => {
  return (
    <div className="space-y-2 sm:w-[180px] w-[130px] z-20 text-white">
      <Label className="font-semibold">Airplane</Label>
      <Select>
        <SelectTrigger className="sm:w-[180px] w-[130px]  font-medium">
          <SelectValue placeholder="Select Airplane" />
        </SelectTrigger>
        <SelectContent className="font-medium">
          <SelectItem value="garuda">Garuda</SelectItem>
          <SelectItem value="lion">Lion Air</SelectItem>
          <SelectItem value="sri">Sriwijaya</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterAirplane;
