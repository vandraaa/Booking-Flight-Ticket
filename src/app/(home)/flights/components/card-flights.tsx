import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CardFlights = () => {
  return (
    <div className="w-full bg-slate-200 rounded-xl py-5 px-6 sm:px-12 my-5 flex flex-col lg:flex-row justify-between">
      <div className="md:flex justify-between w-full lg:w-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src={"/assets/image/airplane1.jpg"}
            alt="airplane"
            width={80}
            height={80}
            className="rounded-xl sm:w-[110px] sm:h-[90px] lg:w-[130px] lg:h-[110px]"
          />
          <div className="ml-4">
            <h1 className="font-bold text-lg sm:text-2xl">Lion Air</h1>
            <p className="font-medium text-xs sm:text-sm text-slate-700">
              Economy Class
            </p>
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Price
          </p>
          <h1 className="font-bold text-base sm:text-xl leading-[0.96rem]">
            Rp 12.000.000
          </h1>
        </div>
      </div>
      <div className="md:flex lg:flex justify-between items-center w-full lg:w-auto">
        <div className="flex items-center gap-x-6 mb-4 md:mt-4 lg:mt-0 sm:mb-0">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-lg sm:text-2xl">14.00</h1>
            <p className="font-semibold text-xs text-slate-700">Jakarta</p>
          </div>
          <CircleArrowRight />
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-lg sm:text-2xl">15.00</h1>
            <p className="font-semibold text-xs text-slate-700">Semarang</p>
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <Button>Book Now</Button>
        </div>
      </div>
      <div className="my-auto flex items-center gap-x-6 justify-between md:hidden lg:flex w-full lg:w-auto">
        <div className="my-auto">
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Price
          </p>
          <h1 className="font-bold text-base sm:text-xl leading-[0.96rem]">
            Rp 12.000.000
          </h1>
        </div>
        <div className="my-auto mt-2 sm:mt-1">
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CardFlights;

