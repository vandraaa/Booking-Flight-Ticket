"use client"
 
import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import { Airplane } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil } from "lucide-react";
import Link from "next/link";
import DeleteAirplane from "./delete-airplane";
import Image from "next/image";

export const columsAirplanes: ColumnDef<Airplane>[] = [
    {
        accessorKey: 'image',
        header: 'Image',
        cell: ({row}: any) => {
            const airplane = row.original;
            return (
                <Image
                    src={getUrlFile(airplane.image)}
                    alt={airplane.name}
                    width={100}
                    height={100}
                    className="mx-auto"
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
        header: 'Actions',
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
                    <DeleteAirplane id={airplane.id} />
                </div>
            )
        }
    }
]