import { getUser } from "@/lib/auth";
import CardCheckout from "./components/card";
import Payment from "./components/payment-detail";

export default async function CheckoutPage() {
  const { user } = await getUser();

  return (
    <div className="bg-slate-950 w-full min-h-screen">
      <div className="py-12 px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-24 lg:space-y-0">
            <CardCheckout user={user} />
          <div className="flex flex-col w-[80%] lg:w-full mx-auto">
            <h2 className="text-base md:text-lg font-bold text-white mb-3">
              Additional Benefits
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="border-2 border-white bg-transparent rounded-2xl py-2 px-4 text-white hover:bg-white hover:text-black cursor-pointer duration-500 ease-in-out text-xs md:text-sm">
                <h1 className="font-bold">Choose Preferred Seat</h1>
              </div>
              <div className="border-2 border-white bg-transparent rounded-2xl py-2 px-4 text-white hover:bg-white hover:text-black cursor-pointer duration-500 ease-in-out text-xs md:text-sm">
                <h1 className="font-bold">More Comfort</h1>
              </div>
              <div className="border-2 border-white bg-transparent rounded-2xl py-2 px-4 text-white hover:bg-white hover:text-black cursor-pointer duration-500 ease-in-out text-xs md:text-sm">
                <h1 className="font-bold">Avoid Crowds</h1>
              </div>
            </div>
            <Payment user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
