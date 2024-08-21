"use client"

import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import { Airplane, Flight, FlightSeat } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ColumnRouteFlight from "./column-route-flights";

export type FlightsColumn = Flight & {
    plane: Airplane
    seats: FlightSeat[]
}

export const column: ColumnDef<FlightsColumn>[] = [
    {
        accessorKey: 'planeId',
        header: 'Plane',
        cell: ({row}: any) => {
            const flights = row.original
            const planeImageUrl = getUrlFile(flights.plane.image)

            return (
                <div className="flex flex-col justify-center gap-y-2">
                    <Image src={planeImageUrl} alt={flights.plane.name} width={70} height={70} className="mx-auto" />
                    <p className="text-sm font-semibold text-slate-600">{flights.plane.name} ({flights.plane.code})</p>
                </div>
            )
        }
    },
    {
        accessorKey: 'departureCity',
        header: 'Route',
        cell: ({row}: any) => {
            const flights = row.original

            return <ColumnRouteFlight flight={flights} />
        }
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({row}: any) => {
            const flights = row.original

            return 'Price'
        }
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({row}: any) => {
            const flight = row.original;
            return (
                <div className="inline-flex gap-5 items-center">
                    <Button variant={"outline"} asChild size={"sm"}>
                        <Link href={`/dashboard/flights/edit/${flight.id}`}>
                            <Pencil className="size-4 mr-2" />
                            Edit
                        </Link>
                    </Button>
                </div>
            )
        }
    }
]