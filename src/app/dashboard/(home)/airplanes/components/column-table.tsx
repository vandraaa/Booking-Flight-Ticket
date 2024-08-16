"use client"
 
import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import { Airplane } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil } from "lucide-react";
import Link from "next/link";

export const columsAirplanes: ColumnDef<Airplane>[] = [
    {
        accessorKey: 'image',
        header: 'Image',
        cell: ({row}: any) => {
            const airplane = row.original;
            return (
                <img
                    src={getUrlFile(airplane.image)}
                    alt={airplane.name}
                    className="w-auto h-[100px] mx-auto"
                />
            )
        } 
    },
    {
        accessorKey: 'code',
        header: 'Code',
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        id: 'actions',
        cell: ({row}: any) => {
            const airplane = row.original;
            return (
                <div className="inline-flex gap-5 items-center">
                    <Button variant={"outline"} asChild size={"sm"}>
                        <Link href={`/dashboard/airplanes/edit/${airplane.id}`}>
                            <Pencil className="size-4 mr-2" />
                            Edit
                        </Link>
                    </Button>
                </div>
            )
        }
    }
]