import { Metadata } from "next";
import { ActionResult } from "./form/action";
import FormSignIn from "./form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

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
