import SeatList from "./components/seat-list";
import FlightsDetail from "./components/flights-detail";
import SkeletonSeatList from "./components/loading-seat";
import SkeletonFlightsDetail from "./components/loading-flights-detail";
import { getFlightById } from "../../lib/data";

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

type Params = {
  id: string
}

interface ChooseSeatProps {
  params: Params
}

export default async function ChooseSeatPage({ params }: ChooseSeatProps) {
  const flight = await getFlightById(params.id);
  console.log(flight)

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
            <div className="mt-4 grid grid-cols-4 gap-4">
              <SeatList seats={seats} />
              {/* <SkeletonSeatList /> */}
            </div>
          </div>

          <FlightsDetail />
          {/* <SkeletonFlightsDetail /> */}
        </div>
      </div>
    </div>
  );
}
