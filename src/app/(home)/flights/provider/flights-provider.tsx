"use client"

import { Airplane, Flight } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { createContext, useReducer } from "react"
import axios from "axios"
import { useSearchParams } from "next/navigation"

interface FlightsProviderProps {
    children: React.ReactNode
}

export enum FilterActionKind {
    ADD_PLANE = "ADD_PLANE",
    REMOVE_PLANE = "REMOVE_PLANE",
    CLEAR_PLANE = "CLEAR_PLANE",
}

type FilterState = {
    departure?: string | null
    arrival?: string | null
    date?: string | null
    planeId?: string | null
    planeIds: string[]
    seat?: string | null
}

type FilterAction = {
    type: FilterActionKind
    // payload: Omit<FilterState, "planeIds">
    payload: { planeId: string }
}

function filterReducer(state: FilterState, action: FilterAction): FilterState {
    const { type, payload } = action

    switch (type) {
        case FilterActionKind.ADD_PLANE:
            return {
                ...state,
                planeIds: [payload.planeId],
            }
        case FilterActionKind.REMOVE_PLANE:
            return {
                ...state,
                planeIds: state.planeIds.filter((id) => id !== payload.planeId),
            }
        case FilterActionKind.CLEAR_PLANE:
            return {
                ...state,
                planeIds: [],
            }
        default: {
            return state
        }
    }
}

export type FlightsWithAirplane = Flight & {
    plane: Airplane
} 

export type FContext = {
    flights: { data: FlightsWithAirplane[] } | undefined;
    isLoading: boolean;
    dispatch: React.Dispatch<FilterAction>;
};

export const FlightsContext = createContext<FContext | null>(null)

const FlightsProvider: React.FC<FlightsProviderProps> = ({ children }) => {
    const q = useSearchParams();

    const params = {
        departure: q.get("departure"),
        destination: q.get("destination"),
        date: q.get("date"),
    }

    const [state, dispatch] = useReducer(filterReducer, {
        arrival: params.destination,
        date: params.date,
        departure: params.departure,
        planeId: "",
        planeIds: [],
        seat: null,
    })

    const {data, isLoading} = useQuery({
        queryKey: ["list-flights", state],
        queryFn: async () => {
            const res = await axios.post("/api/flights", state);
            return res.data
        }
    })

    return (
        <FlightsContext.Provider value={{ flights: data, isLoading, dispatch }}>
            {children}
        </FlightsContext.Provider>
    )
}

export default FlightsProvider