import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import FormFlights from "../../components/form-flights";
import { getAirplanes } from "../../../airplanes/lib/data";
import { getFlightsById } from "../../lib/data";

type Params = {
    id: string;
};

interface FlightsEditPageProps {
  params: Params;
}

export default async function FlightsEditPage({ params }: FlightsEditPageProps) {
  const airplanes = await getAirplanes();
  const flight = await getFlightsById(params.id);

  return (
    <>
      <Link
        href={"/dashboard/flights"}
        className="my-5 text-2xl font-bold flex items-center gap-x-2"
      >
        <ArrowLeft />
        Edit Flights
      </Link>
      <FormFlights airplanes={airplanes} type="EDIT" defaultValues={flight} />
    </>
  );
}
