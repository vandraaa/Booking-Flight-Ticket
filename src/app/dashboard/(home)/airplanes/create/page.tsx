import { ArrowLeft } from "lucide-react";
import FormAirplane from "../components/form-airplane";
import Link from "next/link";

export default function AirplanesCreatePage() {
  return (
    <>
      <Link href={"/dashboard/airplanes"} className="my-5 text-2xl font-bold flex items-center gap-x-2">
        <ArrowLeft />
        Create Airplanes
      </Link>
      <FormAirplane type="ADD" />
    </>
  );
}
