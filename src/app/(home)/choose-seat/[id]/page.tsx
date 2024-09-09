import SeatList from "./components/seat-list";
import FlightsDetail from "./components/flights-detail";
import { getFlightById } from "../../lib/data";
import { Airplane, Flight, FlightSeat } from "@prisma/client";
import { Session } from "lucia";
import { getUser } from "@/lib/auth";

type Params = {
  id: string
}

interface ChooseSeatProps {
  params: Params
}

export type FlightProps = Flight & { seats: FlightSeat[], plane: Airplane[] };

interface FlightsDetailProps {
  flight: FlightProps;
  session: Session | null;
}

export default async function ChooseSeatPage({ params }: ChooseSeatProps) {
  const { user, session } = await getUser()
  const flight = await getFlightById(params.id);
  console.log(flight)

  return (
    <div className="bg-[#0a0920] min-h-screen py-12 mt:py-0 flex flex-col justify-center">
      <div className="w-[90%] md:w-[85%] lg:w-[70%] mx-auto">
        <div className="flex justify-between md:space-x-20 lg:space-x-32 md:flex-row space-x-0 flex-col">
          <div className="w-auto mx-auto sm:mx-0">
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
            <div className="mt-4">
              {flight && <SeatList seats={flight.seats} />}
            </div>
          </div>

          {flight && <FlightsDetail flight={flight} session={session} /> }
        </div>
      </div>
    </div>
  );
}
