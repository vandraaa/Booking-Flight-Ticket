"use client"

import { Airplane, Flight } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { createContext } from "react"
import axios from "axios"

type FlightsWithAirplane = Flight & {
    plane: Airplane
}

export type FContext = {
    flights: FlightsWithAirplane[] | undefined,
    isLoading: boolean,
}

export const FlightsContext = createContext<FContext | null>(null)

export default async function FlightsProvider({ children }: { children: React.ReactNode }) {

    const {data, isLoading} = useQuery({
        queryKey: ["flights-list"],
        queryFn: () => axios.get("/api/flights").then((res) => res.data.data),
    })

    return (
        <FlightsContext.Provider value={{ flights: data, isLoading }}>
            {children}
        </FlightsContext.Provider>
    )
}