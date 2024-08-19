"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Airplane } from "@prisma/client";

interface FormFlightsProps {
  airplanes: Airplane[];
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="font-bold w-full" size={"sm"}>
      {pending ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        "Submit"
      )}
    </Button>
  );
};

export default function FormFlights({ airplanes }: FormFlightsProps) {
  console.log(airplanes);
  return (
    <form action="">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 p-2">
          <Label htmlFor="planeId" className="font-semibold">
            Select Airplane
          </Label>
          <Select name="planeId">
            <SelectTrigger id="planeId">
              <SelectValue placeholder="Select Airplane" />
            </SelectTrigger>
            <SelectContent>
              {airplanes.map((airplane) => (
                <SelectItem key={airplane.id} value={airplane.id}>
                  <span className="font-semibold">{airplane.name}</span> (
                  {airplane.code})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 p-2">
          <Label htmlFor="price" className="font-semibold">
            Ticket Price
          </Label>
          <Input
            required
            type="number"
            name="price"
            min={0}
            placeholder="Input ticket price (Economy class)..."
          />
          <span className="text-[10px] text-gray-600">
            Note: Bussiness Class +500k & First Class +750k
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-2 p-2">
          <Label htmlFor="departureCity" className="font-semibold">
            Departure City
          </Label>
          <Input
            required
            type="number"
            name="departureCity"
            min={0}
            placeholder="Input departure city..."
          />
        </div>
        <div className="space-y-2 p-2">
          <Label htmlFor="departureDate" className="font-semibold">
            Departure Date
          </Label>
          <Input
            required
            type="datetime-local"
            name="departureDate"
            min={0}
            className="block"
            placeholder="Input departure date..."
          />
        </div>
        <div className="space-y-2 p-2">
          <Label htmlFor="departureCityCode" className="font-semibold">
            Departure City Code
          </Label>
          <Input
            required
            type="datetime-local"
            name="departureCityCode"
            min={0}
            className="block"
            placeholder="Input departure city code..."
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-2">
        <div className="space-y-2 p-2">
          <Label htmlFor="destinationCity" className="font-semibold">
            Destination City
          </Label>
          <Input
            required
            type="number"
            name="destinationCity"
            min={0}
            placeholder="Input departure city..."
          />
        </div>
        <div className="space-y-2 p-2">
          <Label htmlFor="arrivalDate" className="font-semibold">
            Arrival Date
          </Label>
          <Input
            required
            type="datetime-local"
            name="arrivalDate"
            min={0}
            className="block"
            placeholder="Input departure date..."
          />
        </div>
        <div className="space-y-2 p-2">
          <Label htmlFor="destinationCityCode" className="font-semibold">
            Destination City Code
          </Label>
          <Input
            required
            type="datetime-local"
            name="destinationCityCode"
            min={0}
            className="block"
            placeholder="Input departure city code..."
          />
        </div>
      </div>

      <div className="mt-3 w-[20%] float-right m-2">
        <SubmitButton />
      </div>
    </form>
  );
}
