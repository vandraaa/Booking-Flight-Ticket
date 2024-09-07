import { ArrowRightCircle } from "lucide-react";

export default function FlightsDetail() {
  return (
    <div className="flex flex-col items-center w-full mt-12 md:mt-0">
      <h1 className="text-white font-bold mb-2 text-xl">
        Solo to Kuala Lumpur
      </h1>
      <div className="mt-3 flex w-full justify-center gap-x-12">
        <div className="text-center">
          <h1 className="text-white font-semibold text-lg">14:00</h1>
          <p className="text-slate-300 font-medium text-xs">Solo</p>
        </div>
        <ArrowRightCircle className="text-white text-4xl" />
        <div className="text-center">
          <h1 className="text-white font-semibold text-lg">16:00</h1>
          <p className="text-slate-300 font-medium text-xs">Kuala Lumpur</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="w-[300px] h-[120px] ">
          <img
            src="/assets/image/airplane1.jpg"
            alt="airplane"
            className="rounded-lg size-full object-cover"
          />
        </div>
        <div className="mt-3">
          <h1 className="font-semibold text-white">Lion Air</h1>
          <p className="font-medium text-slate-300 text-[9px]">
            LIO-101 - First Class
          </p>
        </div>
        <div className="mt-5 space-y-1">
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Date</p>
            <p className="font-semibold">10 Sep 2024</p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Seat Choosen</p>
            <p className="font-semibold">A1</p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Passenger</p>
            <p className="font-semibold">1 Person</p>
          </div>
          <div className="w-full flex justify-between items-center text-white text-sm">
            <p className="font-medium">Seat Price</p>
            <p className="font-semibold">Rp 500.000,00</p>
          </div>
        </div>
          <button className="w-full py-2 mt-4 text-center bg-sky-600 rounded-2xl text-white font-semibold text-sm hover:bg-sky-700 duration-300 ease-in">
            Pay
          </button>
      </div>
    </div>
  );
}
