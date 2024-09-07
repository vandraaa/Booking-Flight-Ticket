import { ArrowRightCircle } from "lucide-react";

export default function SkeletonFlightsDetail() {
    return (
      <div className="flex flex-col items-center w-full mt-12 md:mt-0">
        <div className="h-6 w-2/3 bg-gray-300 animate-pulse rounded-lg mb-4"></div>
        <div className="mt-3 flex w-full justify-center gap-x-12">
          <div className="text-center">
            <div className="h-6 w-12 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
            <div className="h-4 w-16 bg-gray-300 animate-pulse rounded-lg"></div>
          </div>
          <ArrowRightCircle className="text-gray-300 text-4xl animate-pulse" />
          <div className="text-center">
            <div className="h-6 w-12 bg-gray-300 animate-pulse rounded-lg mb-2"></div>
            <div className="h-4 w-16 bg-gray-300 animate-pulse rounded-lg"></div>
          </div>
        </div>
        <div className="mt-8">
          <div className="w-[300px] h-[120px] bg-gray-300 animate-pulse rounded-lg"></div>
          <div className="mt-3">
            <div className="h-5 w-24 bg-gray-300 animate-pulse rounded-lg"></div>
            <div className="h-3 w-16 bg-gray-300 animate-pulse rounded-lg mt-2"></div>
          </div>
          <div className="mt-5 space-y-1">
            <div className="w-full flex justify-between items-center">
              <div className="h-4 w-20 bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="h-4 w-16 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="h-4 w-24 bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="h-4 w-12 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="h-4 w-28 bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="h-4 w-16 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="h-4 w-20 bg-gray-300 animate-pulse rounded-lg"></div>
              <div className="h-4 w-24 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
          </div>
          <div className="w-full py-2 mt-4 bg-gray-300 animate-pulse rounded-2xl"></div>
        </div>
      </div>
    );
  };
    