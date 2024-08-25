import { Metadata } from "next";
import FormSignIn from "./components/form-signin";

export const metadata: Metadata = {
  title: "Sign In - Andra Airlines",
};

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <div className="sm:w-2/3 w-[85%] py-6 px-8 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="font-medium text-sm">Enjoy new experience of flight</p>

        <FormSignIn />
      </div>    
    </div>
  );
}
