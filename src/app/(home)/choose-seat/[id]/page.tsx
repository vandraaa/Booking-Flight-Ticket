import { ArrowRightCircle } from "lucide-react";
import SeatCard from "../components/seat-card";

const seats = [
  "A1",
  "B1",
  "C1",
  "D1",
  "A2",
  "B2",
  "C2",
  "D2",
  "A3",
  "B3",
  "C3",
  "D3",
  "A4",
  "B4",
  "C4",
  "D4",
  "A5",
  "B5",
  "C5",
  "D5",
];

export default async function ChooseSeatPage() {
  return (
    <div className="bg-[#0a0920] min-h-screen flex flex-col justify-center">
      <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto">
        <div className="flex justify-between space-x-32">
          <div className="w-auto">
            <h1 className="text-white font-bold mb-2 text-lg">
              Select your seat
            </h1>
            <div className="flex gap-x-3 text-white font-medium">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="r1"
                  name="seat"
                  value="selected"
                  defaultChecked
                />
                <label htmlFor="r1">Selected</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="r2" name="seat" value="taken" />
                <label htmlFor="r2">Taken</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="r3" name="seat" value="available" />
                <label htmlFor="r3">Available</label>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {seats.map((seat, key) => (
                <SeatCard key={key} className="w-full h-full aspect-square">
                  {seat}
                </SeatCard>
              ))}
            </div>
          </div>

          <FlightInfo />
        </div>
      </div>
    </div>
  );
}

const FlightInfo = () => {
  return (
    <div className="flex flex-col items-center w-full">
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
            <p className="font-semibold mb-3">Rp 500.000,00</p>
          </div>
          <button className="w-full py-2 text-center bg-sky-600 rounded-2xl text-white font-semibold text-sm hover:bg-sky-700 duration-300 ease-in">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};
