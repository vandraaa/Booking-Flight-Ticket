const SkeletonCardFlights = () => {
    return (
      <div className="w-full bg-slate-200 rounded-xl py-5 px-6 sm:px-12 my-5 flex flex-col lg:flex-row justify-between animate-pulse">
        <div className="md:flex justify-between w-full lg:w-auto">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gray-300 rounded-xl w-[80px] h-[80px] sm:w-[110px] sm:h-[90px] lg:w-[130px] lg:h-[110px]" />
            <div className="ml-4">
              <div className="bg-gray-300 h-6 w-32 rounded-md mb-2"></div>
              <div className="bg-gray-300 h-4 w-24 rounded-md mb-2"></div>
              <div className="bg-gray-300 h-4 w-16 rounded-md"></div>
            </div>
          </div>
          <div className="my-auto hidden md:block lg:hidden">
            <div className="bg-gray-300 h-4 w-16 rounded-md mb-2"></div>
            <div className="bg-gray-300 h-6 w-32 rounded-md"></div>
          </div>
        </div>
        <div className="md:flex lg:flex justify-between items-center w-full lg:w-auto">
          <div className="flex items-center gap-x-6 mb-4 md:mt-4 lg:mt-0 sm:mb-0">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-300 h-6 w-12 rounded-md mb-2"></div>
              <div className="bg-gray-300 h-4 w-16 rounded-md"></div>
            </div>
            <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-300 h-6 w-12 rounded-md mb-2"></div>
              <div className="bg-gray-300 h-4 w-16 rounded-md"></div>
            </div>
          </div>
          <div className="my-auto hidden md:block lg:hidden">
            <div className="bg-gray-300 h-10 w-24 rounded-md"></div>
          </div>
        </div>
        <div className="my-auto flex items-center gap-x-6 justify-between md:hidden lg:flex w-full lg:w-auto">
          <div className="my-auto">
            <div className="bg-gray-300 h-4 w-16 rounded-md mb-2"></div>
            <div className="bg-gray-300 h-6 w-32 rounded-md"></div>
          </div>
          <div className="my-auto mt-2 sm:mt-1">
            <div className="bg-gray-300 h-10 w-24 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkeletonCardFlights;
  