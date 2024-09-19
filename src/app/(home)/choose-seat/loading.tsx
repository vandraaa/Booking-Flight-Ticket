import SkeletonFlightsDetail from "./[id]/components/loading-flights-detail";
import SkeletonSeatList from "./[id]/components/loading-seat";

export default function Loading() {
  return (
    <div className="bg-[#0a0920] min-h-screen py-12 mt:py-0 flex flex-col justify-center">
      <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto">
        <div className="flex justify-between md:space-x-20 lg:space-x-32 md:flex-row space-x-0 flex-col">
          <div className="w-auto">
            <h1 className="text-white font-bold mb-2 text-lg">
              Select your seat
            </h1>
            <div className="flex gap-x-3 text-white font-medium text-sm">
              <div className="flex items-center space-x-2">
                <div className="size-3 bg-[#0EA5E9] rounded-full" />
                <label htmlFor="r1">Selected</label>
              </div>
              <div className="flex items-center space-x-2">
                <div className="size-3 bg-[#6B7280] rounded-full" />
                <label htmlFor="r2">Taken</label>
              </div>
              <div className="flex items-center space-x-2">
                <div className="size-3 bg-[#FFF] rounded-full" />
                <label htmlFor="r3">Available</label>
              </div>
            </div>
            <SkeletonSeatList />
          </div>

          <SkeletonFlightsDetail />
        </div>
      </div>
    </div>
  );
}
