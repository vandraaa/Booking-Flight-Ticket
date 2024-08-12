import { Metadata } from "next";
import { ActionResult, handleSignIn } from "./form/action";
import FormSignIn from "./form";

export const metadata: Metadata = {
  title: "Dashboard - Sign In",
};

const initialFormState: ActionResult = {
  errorTitle: null,
  errorMessage: [],
};

export default function SignInPage() {
  return (
    <FormSignIn />
  )
}
