"use client"

import { Button } from "@/components/ui/button";
import { Airplane, Flight, FlightSeat } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";

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

            return 'Plane'
        }
    },
    {
        accessorKey: 'departureCity',
        header: 'Route',
        cell: ({row}: any) => {
            const flights = row.original

            return 'Route'
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