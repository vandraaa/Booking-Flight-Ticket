import { getUser } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function SuccessCheckout() {
  const { user } = await getUser();

  return (
    <div className="min-h-screen w-full bg-[url('/assets/background/plane.jpg')] bg-no-repeat bg-cover lg:bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="bg-white/75 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-[90%] sm:w-[70%] lg:w-[50%] flex flex-col justify-between items-center space-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              Hey, <span className="text-green-700">{user?.name}</span>!
            </h2>
            <p className="text-sm text-gray-950 mt-1 font-medium">
              We're excited for your journey!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={"/assets/image/success.png"}
              alt="Success Icon"
              width={150}
              height={150}
              className="w-40 h-40 mb-4 animate-pulse"
            />
            <h2 className="text-3xl font-bold text-green-600">Booking Success!</h2>
            <p className="text-gray-700 text-center font-medium text-sm mt-2">
              Your order has been successfully placed. Enjoy your flight!
            </p>
            <p className="text-gray-700 text-center font-semibold text-base">
              Enjoy your flight!
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/flights"
              className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition-all shadow-lg"
            >
              Booking Flight
            </Link>
            <Link
              href="/my-tickets"
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all shadow-lg"
            >
              My Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
