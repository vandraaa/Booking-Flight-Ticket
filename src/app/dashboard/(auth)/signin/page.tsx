import { Metadata } from "next";
import { ActionResult, handleSignIn } from "./form/action";
import FormSignIn from "./form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";

export const metadata: Metadata = {
  title: "Dashboard - Sign In",
};

const initialFormState: ActionResult = {
  errorTitle: null,
  errorMessage: [],
  success: false,
  successMessage: null,
};

export default async function SignInPage() {
  const {session, user} = await getUser();

  if(session && user.role === 'ADMIN') {
    redirect('/dashboard')
  }

  return (
    <FormSignIn />
  )
}
