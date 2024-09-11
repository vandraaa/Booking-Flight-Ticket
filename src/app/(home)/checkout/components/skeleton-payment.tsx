export default function SkeletonPayment() {
  return (
    <>
      <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
        <p className="font-medium">Seat Price</p>
        <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
        <p className="font-medium">Insurance 24%</p>
        <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
        <p className="font-medium">Service Fee</p>
        <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="w-full xl:w-2/3 flex justify-between items-center text-white text-xs md:text-sm">
        <p className="font-medium">Total</p>
        <div className="h-3 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="mt-5 py-2 rounded-2xl bg-gray-300 w-full xl:w-2/3 h-8 animate-pulse"></div>
    </>
  );
}
