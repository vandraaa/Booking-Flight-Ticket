"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Flight, FlightSeat, Ticket, User } from "@prisma/client"
import ColumnRouteFlight from "../../flights/components/column-route-flights";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TicketType = Ticket & {
    flight: Flight;
    customer: User;
    seat: FlightSeat;
}

export const columns: ColumnDef<TicketType>[] = [
    {
        accessorKey: 'customerId',
        header: 'Passenger Name',
        cell: ({ row }) => {
            const ticket = row.original

            return ticket.customer.name
        }
    },
    {
        accessorKey: 'flightId',
        header: 'Flight Detail',
        cell: ({row}) => {
            const ticket = row.original
            
            return <ColumnRouteFlight flight={ticket.flight} />
        }
    },
    {
        accessorKey: 'seatId',
        header: 'Seat Number',
        cell: ({row}) => {
            const ticket = row.original

            return <Badge>{ticket.seat.seatNumber}</Badge>
        }
    },
    {
        id: 'statusTransaction',
        header: 'Status Transaction',
        cell: ({row}) => {
            const ticket = row.original

            return (
                <div className="space-y-1">
                    <Badge className={cn(ticket.status === "SUCCESS" ? "bg-green-500" : ticket.status === "PENDING" ? "bg-yellow-500" : "bg-red-500")}>
                        {ticket.status}
                    </Badge>
                </div>
            )
        }
    }
]