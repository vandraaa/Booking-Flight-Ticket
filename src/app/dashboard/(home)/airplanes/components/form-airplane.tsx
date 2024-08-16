"use client";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useFormState, useFormStatus } from "react-dom";
import { saveAirplane, updateAirplane } from "../lib/actions";
import Swal from "sweetalert2";
import { useEffect } from "react";
import type { Airplane } from "@prisma/client";

interface FormAirplaneProps {
  type: "ADD" | "EDIT";
  defaultValues?: Airplane | undefined;
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
    <Button disabled={pending} className="font-bold w-full" size={"sm"}>
      Submit
    </Button>
  );
};

export default function FormAirplane({
  type,
  defaultValues,
}: FormAirplaneProps) {
  const updateAirplaneWithId = (_state: ActionResult, FormData: FormData) =>
    updateAirplane(null, defaultValues?.id!!, FormData);
  const [state, formAction] = useFormState(
    type === "ADD" ? saveAirplane : updateAirplaneWithId,
    initialFormState
  );

  useEffect(() => {
    if (state.success === true) {
      Swal.fire({
        title: "Success",
        text: state.successMessage || "Airplane saved successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else if (state.errorTitle && state.errorMessage) {
      Swal.fire({
        title: state.errorTitle,
        text: state.errorMessage.join("\n"),
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  });

  return (
    <>
      <form action={formAction} className="w-[40%]">
        <div className="space-y-2 p-2">
          <Label htmlFor="code" className="font-semibold">
            Airplane Code
          </Label>
          <Input
            required
            type="text"
            name="code"
            defaultValue={defaultValues?.code}
            placeholder="Input airplane code..."
          />
        </div>
        <div className="space-y-2 p-2">
          <Label htmlFor="name" className="font-semibold">
            Name
          </Label>
          <Input
            required
            type="text"
            name="name"
            defaultValue={defaultValues?.name}
            placeholder="Input airplane name..."
          />
        </div>
        <div className="space-y-2 p-2">
          <Label htmlFor="name" className="font-semibold">
            Image
          </Label>
          <Input
            required
            type="file"
            name="image"
            placeholder="Upload image..."
          />
        </div>
        <div className="p-2 mt-3">
          <SubmitButton />
        </div>
      </form>
    </>
  );
}
