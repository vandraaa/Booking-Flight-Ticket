import { ArrowLeft } from "lucide-react";
import FormAirplane from "../../components/form-airplane";
import { getAirplanesById } from "../../lib/actions";
import Link from "next/link";

type Params = {
  id: string;
};

interface EditAirplanesPageProps {
  params: Params;
}

export default async function EditAirplanesPage({
  params,
}: EditAirplanesPageProps) {
  // console.log(params)
  const data = await getAirplanesById(params.id);
  console.log(data);
  return (
    <>
      <div className="w-full flex justify-between">
        <Link
          href={"/dashboard/airplanes"}
          className="my-5 text-2xl font-bold flex items-center gap-x-2"
        >
          <ArrowLeft />
          Edit Airplanes
        </Link>
      </div>
      <FormAirplane type="EDIT" defaultValues={data} />
    </>
  );
}
