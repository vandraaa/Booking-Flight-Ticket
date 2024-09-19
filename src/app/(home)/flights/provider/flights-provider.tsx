"use client";

import { Airplane, Flight } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { createContext, useReducer } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface FlightsProviderProps {
  children: React.ReactNode;
}

export enum FilterActionKind {
  ADD_PLANE = "ADD_PLANE",
  REMOVE_PLANE = "REMOVE_PLANE",
  CLEAR_PLANE = "CLEAR_PLANE",
  FILTER_FLIGHTS = "FILTER_FLIGHTS",
  SET_SEAT = "SET_SEAT",
}

type FilterState = {
  departure?: string | null;
  arrival?: string | null;
  date?: string | null;
  planeId?: string | null;
  planeIds: string[];
  seat?: string | null;
};

type FilterAction = {
  type: FilterActionKind;
  payload: { planeId: string; date?: string | null; departure?: string | null; arrival?: string | null, seat?: string | null };
};

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  const { type, payload } = action;

  switch (type) {   
    case FilterActionKind.ADD_PLANE:
      return {
        ...state,
        planeIds: [payload.planeId],
        date: payload.date || state.date,
        departure: payload.departure || state.departure,
        arrival: payload.arrival || state.arrival,
      };
    case FilterActionKind.REMOVE_PLANE:
      return {
        ...state,
        planeIds: state.planeIds.filter((id) => id !== payload.planeId),
      };
    case FilterActionKind.CLEAR_PLANE:
      return {
        ...state,
        planeIds: [],
      };
    case FilterActionKind.FILTER_FLIGHTS:
      return {
        ...state,
        date: payload.date || state.date,
        departure: payload.departure || state.departure,
        arrival: payload.arrival || state.arrival,
      };
    case FilterActionKind.SET_SEAT:
      return {
        ...state,
        seat: payload.seat,
      }
    default:
      return state;
  }
}

export type FlightsWithAirplane = Flight & {
  plane: Airplane;
};

export type FContext = {
  flights: { data: FlightsWithAirplane[] } | undefined;
  isLoading: boolean;
  isError: boolean;
  dispatch: React.Dispatch<FilterAction>;
  state: FilterState;
};

export const FlightsContext = createContext<FContext | null>(null);

const FlightsProvider: React.FC<FlightsProviderProps> = ({ children }) => {
  const q = useSearchParams();

  const params = {
    departure: q.get("departure"),
    destination: q.get("destination"),
    date: q.get("date"),
  };

  const [state, dispatch] = useReducer(filterReducer, {
    arrival: params.destination,
    date: params.date,
    departure: params.departure,
    planeId: "",
    planeIds: [],
    seat: "ECONOMY",
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["list-flights", state],
    queryFn: async () => {
      const res = await axios.post("/api/flights", state);
      return res.data;
    },
  });

  return (
    <FlightsContext.Provider value={{ flights: data, isLoading, isError: !!error, dispatch, state }}>
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
