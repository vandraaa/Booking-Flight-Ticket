"use client"

import { FlightSeat } from "@prisma/client"
import { createContext, useState } from "react"

interface SeatProviderProps {
    children: React.ReactNode
}

export type SeatContextType = {
    seat: FlightSeat | null,
    setSelectedSeat: (seat: FlightSeat | null) => void
}

export const SeatContext = createContext<SeatContextType | null>(null)

const SeatProvider = ({ children }: SeatProviderProps) => {
    const [seat, setSeat] = useState<FlightSeat | null>(null)

    const setSelectedSeat = (seat: FlightSeat | null) => {
        setSeat(seat)
    }

    return (
        <SeatContext.Provider value={{ seat, setSelectedSeat }}>
            {children}
        </SeatContext.Provider>
    )
}

export default SeatProvider;