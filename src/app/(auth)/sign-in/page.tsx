import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In - Andra Airlines",
};

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <div className="sm:w-2/3 w-[85%] py-6 px-8 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="font-medium text-sm">Enjoy new experience of flight</p>

        <form action="" className="mt-5 w-full space-y-4">
          <div className="flex flex-col gap-y-4">
            <div className="w-full">
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input type="email" id="email" name="email" placeholder="Enter your email..." />
            </div>
            <div className="w-full">
              <Label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your password..."
              />
            </div>
          </div>
          <div className="w-[45%] mx-auto">
            <Button variant={"default"} className="w-full mt-4" type="submit">Sign Up</Button>
          </div>
            <p className="text-xs font-medium text-center mt-2">
                Don't have an account? {" "}
                <Link href="/sign-up" className="text-blue-500">Sign Up here</Link>
            </p>
        </form>
      </div>    
    </div>
  );
}
