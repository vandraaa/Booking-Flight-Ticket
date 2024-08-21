import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import FormFlights from "../components/form-flights";
import { getAirplanes } from "../../airplanes/lib/data";

export default async function FlightsCreatePage() {
  const airplanes = await getAirplanes();
  return (
    <>
      <Link
        href={"/dashboard/flights"}
        className="my-5 text-2xl font-bold flex items-center gap-x-2"
      >
        <ArrowLeft />
        Create Flights
      </Link>
      <FormFlights airplanes={airplanes} />
    </>
  );
}
