import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { column } from "./components/column-flights";
import { getFlights } from "./lib/data";

export const metadata: Metadata = {
    title: "Dashboard - Flights",
}

export default async function AirplanesPage() {
    const flights = await getFlights();
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Flights</div>
                <Button asChild>
                    <Link href={"/dashboard/flights/create"}>
                        <Plus className="mr-2 size-4" />
                        Add Flights
                    </Link>
                </Button>
            </div>
            <div className="nb-5">
                <DataTable columns={column} data={flights} />
            </div>
        </>
    )
}