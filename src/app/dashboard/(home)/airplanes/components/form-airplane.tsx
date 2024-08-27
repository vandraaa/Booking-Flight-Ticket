"use client";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useFormState, useFormStatus } from "react-dom";
import { saveAirplane, updateAirplane } from "../lib/actions";
import type { Airplane } from "@prisma/client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

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
    <Button className="font-bold w-full" size={"sm"}>
      {pending ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        "Submit"
      )}
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
  const [hasShow, setHasShow] = useState(false);
  const router = useRouter();

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
        router.push("/dashboard/airplanes");
        const result = await Swal.fire({
          title: "Success",
          text: `Your airplane has been ${
            type === "ADD" ? "created" : "updated"
          } successfully.`,
          icon: "success",
          confirmButtonText: "OK",
        })
        setHasShow(true);
      }
    };

    showAlert();
  }, [state, hasShow, router, type]);

  return (
    <>
      <form action={formAction}>
        <div className="grid grid-cols-2 gap-4">
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
              Image
            </Label>
            <Input
              required
              type="file"
              name="image"
              placeholder="Upload image..."
            />
          </div>
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

        <div className="mt-3 w-[20%] float-right m-2">
          <SubmitButton />
        </div>
      </form>
    </>
  );
}
