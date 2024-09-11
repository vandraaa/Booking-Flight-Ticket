import { ArrowRightCircle } from "lucide-react";

export default function SkeletonCardCheckout() {
  return (
    <div className="animate-pulse flex flex-col items-center w-4/5 md:w-auto px-8 md:px-12 py-8 mx-auto bg-gray-200 p-2 rounded-2xl">
      <div className="h-6 w-32 bg-gray-300 mb-2 rounded"></div>

      <div className="mt-3 flex w-full justify-center gap-x-12">
        <div className="text-center">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-3 w-16 bg-gray-300 mt-2 rounded"></div>
        </div>
        <ArrowRightCircle className="text-gray-400 text-4xl" />
        <div className="text-center">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-3 w-16 bg-gray-300 mt-2 rounded"></div>
        </div>
      </div>

      <div className="mt-6 h-[100px] w-full md:w-[300px] bg-gray-300 rounded-lg"></div>

      <div className="mt-2 self-start h-6 w-32 bg-gray-300 rounded-lg"></div>
      <div className="mt-1 self-start h-4 w-24 bg-gray-300 rounded-lg"></div>

      <div className="mt-6 w-full space-y-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full flex justify-between items-center text-gray-400"
          >
            <div className="h-6 w-full bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
