import { DataTable } from "@/components/ui/data-table";
import { Metadata } from "next";
import { columns } from "./components/column-user";
import { getCustomer } from "./lib/data";

export const metadata: Metadata = {
    title: "Dashboard - Users",
}

export default async function UsersPage() {
    const users = await getCustomer();
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">Users</div>
            </div>
            <div className="mb-5">
                <DataTable columns={columns} data={users} />
            </div>
        </>
    )
}