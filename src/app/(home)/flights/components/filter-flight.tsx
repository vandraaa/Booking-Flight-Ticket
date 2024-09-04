import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { getRoute } from "../../lib/data";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { FilterActionKind, FlightsContext } from "../provider/flights-provider";

const FilterFlight = () => {
  const [route, setRoute] = useState<{ departureCity: string; destinationCity: string }[]>([]);
  const { dispatch } = useContext(FlightsContext)!;
  const router = useRouter();

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const data = await getRoute();
        setRoute(data);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    fetchRoute();
  }, []);

  const handleSelect = (value: string) => {
    const [departure, destination] = value.split("+");
    dispatch({
      type: FilterActionKind.FILTER_FLIGHTS,
      payload: { planeId: "", date: "", departure, arrival: destination },
    });    
    router.push(`/flights?departure=${departure}&destination=${destination}`);
  }

  return (
    <div className="space-y-2 sm:w-[180px] w-[130px] z-20 text-white">
      <Label className="font-semibold">Flights</Label>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="sm:w-[180px] w-[130px] font-medium">
          <SelectValue placeholder="Select Flight" />
        </SelectTrigger>
        <SelectContent className="font-medium">
          {route.map((item, i) => (
            <SelectItem key={i} value={`${item.departureCity}+${item.destinationCity}`}>
              {item.departureCity} - {item.destinationCity}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterFlight;
