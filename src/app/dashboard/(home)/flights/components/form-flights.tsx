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
import { Airplane, Flight } from "@prisma/client";
import { useFormState } from "react-dom";
import { saveFlights, updateFlight } from "../lib/action";
import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { dateFormatInput } from "@/lib/utils";

interface FormFlightsProps {
  airplanes: Airplane[];
  type: "ADD" | "EDIT";
  defaultValues?: Flight | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorMessage: [],
  success: false,
  successMessage: null,
};

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

export default function FormFlights({
  airplanes,
  type,
  defaultValues,
}: FormFlightsProps) {
  const formAction = async (prevState: ActionResult, formData: FormData) => {
    if (type === "ADD") {
      return await saveFlights(prevState, formData);
    } else {
      return await updateFlight(prevState, formData, defaultValues?.id!! as string);
    }
  };

  const [state, dispatch] = useFormState(formAction, initialFormState);
  const [hasShow, setHasShow] = useState(false);
  console.log(defaultValues);

  useEffect(() => {
    const showAlert = async () => {
      if (state?.errorMessage && state?.errorTitle) {
        await Swal.fire({
          title: state.errorTitle,
          text: state.errorMessage.join("\n"),
          icon: "error",
          confirmButtonText: "OK",
        });
        setHasShow(false);
      } else if (!hasShow && state?.success) {
        const result = await Swal.fire({
          title: "Success",
          text: `${state.successMessage}`,
          icon: "success",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        }).then((res) => {
          if (res.isConfirmed) {
            window.location.replace("/dashboard/flights");
            setHasShow(true);
          }
        });
      }
    };

    showAlert();
  }, [state, hasShow]);
  return (
    <form action={dispatch}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 p-2">
          <Label htmlFor="planeId" className="font-semibold">
            Select Airplane
          </Label>
          <Select name="planeId" defaultValue={defaultValues?.planeId}>
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
            defaultValue={defaultValues?.price}
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
            type="text"
            name="departureCity"
            defaultValue={defaultValues?.departureCity}
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
            defaultValue={dateFormatInput(defaultValues?.departureDate)}
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
            type="text"
            name="departureCityCode"
            className="block"
            defaultValue={defaultValues?.departureCityCode}
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
            type="text"
            name="destinationCity"
            defaultValue={defaultValues?.destinationCity}
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
            defaultValue={dateFormatInput(defaultValues?.arrivalDate)}
            placeholder="Input departure date..."
          />
        </div>
        <div className="space-y-2 p-2">
          <Label htmlFor="destinationCityCode" className="font-semibold">
            Destination City Code
          </Label>
          <Input
            required
            type="text"
            name="destinationCityCode"
            className="block"
            defaultValue={defaultValues?.destinationCityCode}
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
