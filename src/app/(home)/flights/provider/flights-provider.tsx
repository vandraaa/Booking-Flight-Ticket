"use client"

import { Airplane, Flight } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { createContext } from "react"
import axios from "axios"

interface FlightsProviderProps {
    children: React.ReactNode
}

export type FlightsWithAirplane = Flight & {
    plane: Airplane
} 

export type FContext = {
    flights: FlightsWithAirplane[] | undefined,
    isLoading: boolean,
}

export const FlightsContext = createContext<FContext | null>(null)

const FlightsProvider: React.FC<FlightsProviderProps> = ({ children }) => {

    const {data, isLoading} = useQuery({
        queryKey: ["list-flights"],
        queryFn: async () => {
            const res = await axios.get("/api/flights");
            return res.data
        }
    })

    return (
        <FlightsContext.Provider value={{ flights: data, isLoading }}>
            {children}
        </FlightsContext.Provider>
    )
}

export default FlightsProvider