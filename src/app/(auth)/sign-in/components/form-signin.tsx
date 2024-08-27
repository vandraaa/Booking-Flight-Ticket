"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { SignInUser } from "../lib/action";
import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

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
          "Sign In"
        )}
      </Button>
    </div>
  );
};

const FormSignIn = () => {
  const [state, formAction] = useFormState(SignInUser, initialState);
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
        await Swal.fire({
          title: "Success",
          text: state.successMessage || "Sign In Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          allowOutsideClick: false,
        });
        setHasShow(true);
        router.push("/");
      }
    };
    showAlert();
  }, [state, hasShow, router]);

  return (
    <form action={formAction} className="mt-5 w-full space-y-4">
      <div className="flex flex-col gap-y-4">
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
            htmlFor="Password"
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
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-blue-500">
          Sign Up here
        </Link>
      </p>
    </form>
  );
};

export default FormSignIn;
