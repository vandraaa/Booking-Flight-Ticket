import { CircleArrowRight } from "lucide-react";

export function TicketCardSkeleton() {
  return (
    <div className="w-full bg-slate-200 rounded-xl py-5 px-6 sm:px-12 my-5 flex flex-col lg:flex-row justify-between animate-pulse">
      <div className="md:flex justify-between w-full lg:w-auto">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-slate-300 rounded-xl w-[80px] h-[80px] sm:w-[110px] sm:h-[90px] lg:w-[130px] lg:h-[110px]" />
          <div className="ml-4">
            <div className="bg-slate-300 h-6 w-32 sm:w-40 rounded" />
            <div className="bg-slate-300 h-4 w-24 sm:w-32 mt-2 rounded" />
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <div className="bg-slate-300 h-5 w-28 rounded" />
        </div>
      </div>
      <div className="md:flex lg:flex justify-between items-center w-full lg:w-auto">
        <div className="flex items-center gap-x-6 mb-4 md:mt-4 lg:mt-0 sm:mb-0">
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-300 h-6 w-12 sm:w-16 rounded" />
            <div className="bg-slate-300 h-4 w-20 sm:w-24 mt-2 rounded" />
          </div>
          <CircleArrowRight className="text-slate-300" />
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-300 h-6 w-12 sm:w-16 rounded" />
            <div className="bg-slate-300 h-4 w-20 sm:w-24 mt-2 rounded" />
          </div>
        </div>
        <div className="my-auto hidden md:block lg:hidden">
          <div className="bg-slate-300 h-8 w-24 rounded" />
        </div>
      </div>
      <div className="my-auto flex items-center gap-x-6 justify-between md:hidden lg:flex w-full lg:w-auto">
        <div className="my-auto">
          <div className="bg-slate-300 h-5 w-28 rounded" />
        </div>
        <div className="my-auto mt-2 sm:mt-1">
          <div className="bg-slate-300 h-8 w-24 rounded" />
        </div>
      </div>
    </div>
  );
}
