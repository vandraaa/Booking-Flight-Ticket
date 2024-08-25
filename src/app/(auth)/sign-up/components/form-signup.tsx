"use client";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { signUpUser } from "../lib/action";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const initialState: ActionResult = {
  errorTitle: null,
  errorMessage: [],
  success: false,
  successMessage: null,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <div className="w-[45%] mx-auto">
      <Button variant={"default"} className="w-full mt-4" type="submit">
        {pending ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          "Sign Up"
        )}
      </Button>
    </div>
  );
};

const FormSignUp = () => {
  const [state, formAction] = useFormState(signUpUser, initialState);
  const [hasShow, setHasShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const showAlert = async () => {
      if (state?.errorTitle && state?.errorMessage) {
        await Swal.fire({
          title: "Error",
          text: state.errorMessage.join("\n"),
          icon: "error",
          confirmButtonText: "OK",
        });
        setHasShow(false);
      } else if (!hasShow && state?.success) {
        router.push("/sign-in");
        await Swal.fire({
          title: "Success",
          text: state.successMessage || "Sign Up Successfully! Please Sign In to continue",
          icon: "success",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        });
        setHasShow(true);
      }
    };
    showAlert();
  }, [state]);

  return (
    <form action={formAction} className="mt-5 w-full space-y-4">
      <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4">
        <div className="w-full">
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
          />
        </div>
        <div className="w-full">
          <Label
            htmlFor="passport"
            className="block text-sm font-medium text-gray-700"
          >
            No. Passport
          </Label>
          <Input
            type="text"
            id="passport"
            name="passport"
            placeholder="Enter your passport..."
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4">
        <div className="w-full">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
          />
        </div>
        <div className="w-full">
          <Label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
          />
        </div>
      </div>
      <SubmitButton />
      <p className="text-xs font-medium text-center mt-2">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-blue-500">
          Sign In here
        </Link>
      </p>
    </form>
  );
};

export default FormSignUp;
