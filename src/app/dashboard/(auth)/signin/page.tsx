import { Metadata } from "next";
import { ActionResult } from "./form/action";
import FormSignIn from "./form";

export const metadata: Metadata = {
  title: "Dashboard - Sign In",
};

const initialFormState: ActionResult = {
  errorTitle: null,
  errorMessage: [],
  success: false,
  successMessage: null,
};

export default function SignInPage() {
  return (
    <FormSignIn />
  )
}
