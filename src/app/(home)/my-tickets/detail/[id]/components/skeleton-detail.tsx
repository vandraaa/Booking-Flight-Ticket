import { ArrowRightCircle } from "lucide-react";

export default function DetailTicketSkeleton() {
  return (
    <div className="bg-slate-950 w-full min-h-screen">
      <div className="py-12 px-4 md:px-10 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-24 lg:space-y-0">
          <main className="flex flex-col items-center w-4/5 md:w-auto px-8 md:px-12 py-8 mx-auto bg-gray-300 p-2 rounded-2xl">
            <div className="h-6 w-40 bg-gray-400 mb-2 rounded-md"></div>
            <div className="mt-3 flex w-full justify-center gap-x-12">
              <div className="text-center">
                <div className="h-5 w-12 bg-gray-400 rounded-md"></div>
                <div className="h-4 w-20 bg-gray-400 mt-2 rounded-md"></div>
              </div>
              <ArrowRightCircle className="text-slate-900 text-4xl" />
              <div className="text-center">
                <div className="h-5 w-12 bg-gray-400 rounded-md"></div>
                <div className="h-4 w-20 bg-gray-400 mt-2 rounded-md"></div>
              </div>
            </div>

            <div className="mt-6 h-24 w-full bg-gray-400 rounded-lg"></div>
            <div className="mt-3 h-5 w-32 bg-gray-400 rounded-md"></div>
            <div className="mt-1 h-4 w-24 bg-gray-400 rounded-md"></div>

            <div className="mt-4 space-y-1">
              {Array(6)
                .fill("")
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="w-full flex justify-between items-center text-slate-900 text-xs md:text-sm"
                  >
                    <div className="h-4 w-20 bg-gray-400 rounded-md"></div>
                    <div className="h-4 w-32 bg-gray-400 rounded-md"></div>
                  </div>
                ))}
            </div>
          </main>
          <div className="flex flex-col w-[80%] lg:w-full mx-auto">
            <div className="h-6 w-48 bg-gray-400 mb-3 rounded-md"></div>
            <div className="flex flex-wrap gap-4">
              {Array(3)
                .fill("")
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-gray-400 bg-gray-300 rounded-2xl py-2 px-4 h-10 w-48"
                  ></div>
                ))}
            </div>
            <main className="mt-6">
              <div className="h-6 w-48 bg-gray-400 mb-3 rounded-md"></div>
              {Array(5)
                .fill("")
                .map((_, idx) => (
                  <div
                    key={idx}
                    className="w-full my-3 xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm"
                  >
                    <div className="h-4 w-20 bg-gray-400 rounded-md"></div>
                    <div className="h-4 w-32 bg-gray-400 rounded-md"></div>
                  </div>
                ))}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
