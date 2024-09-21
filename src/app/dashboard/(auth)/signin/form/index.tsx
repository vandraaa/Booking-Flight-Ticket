"use client";

import { useFormState, useFormStatus } from "react-dom";
import { ActionResult, handleSignIn } from "./action";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const initialFormState: ActionResult = {
  errorTitle: null,
  errorMessage: [],
  success: false,
  successMessage: null,
};

const FormSignIn = () => {
  const [state, formAction] = useFormState(handleSignIn, initialFormState);
  const router = useRouter();

  useEffect(() => {
    if (state.success === true) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: state.successMessage || "Sign In Successfully!",
        html: "<p class='text-xs leading-3'>Redirecting...</p>",
        customClass: {
          title: "text-sm font-medium leading-3",
        }
      }).then(() => {
        router.push("/dashboard");
      })
    } else if (state.errorTitle && state.errorMessage) {
      Swal.fire({
        title: state.errorTitle,
        text: state.errorMessage.join("\n"),
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }, [state, router]);

  return (
    <div className="w-full h-screen bg-[#f5f5f5]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="bg-white sm:mx-auto sm:w-full sm:max-w-sm p-8 rounded-2xl shadow-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action={formAction}>
              <div className="space-y-1 my-4">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  name="email"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1 my-4">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password..."
                  name="password"
                  required
                />
              </div>

              {/* <Button type="submit" className="w-full mt-6">
                Sign In
              </Button> */}
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full mt-6">
      {pending ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        "Sign In"
      )}
    </Button>
  );
};

export default FormSignIn;
