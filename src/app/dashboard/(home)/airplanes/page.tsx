import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import { columsAirplanes } from "./components/column-table";
import { getAirplanes } from "./lib/data";

export default async function AirplanesPage() {
    const planes = await getAirplanes();
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Airplanes</div>
                <Button asChild>
                    <Link href={"/dashboard/airplanes/create"}>
                        <Plus className="mr-2 size-4" />
                        Add Airplane
                    </Link>
                </Button>
            </div>
            <DataTable columns={columsAirplanes} data={planes} />
        </>
    )
}