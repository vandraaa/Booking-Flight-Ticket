"use client";

import { useFormState } from "react-dom";
import { ActionResult, handleSignIn } from "./action";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

const initialFormState: ActionResult = {
  errorTitle: null,
  errorMessage: [],
};

const FormSignIn = () => {
  const [state, formAction] = useFormState(handleSignIn, initialFormState);

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

              <Button type="submit" className="w-full mt-6">
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
