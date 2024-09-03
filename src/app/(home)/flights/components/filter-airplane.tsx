"use client"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { getAirplanes } from "../../lib/data";
import React, { useContext, useEffect, useState } from "react";
import { FContext, FilterActionKind, FlightsContext } from "../provider/flights-provider";

const FilterAirplane = () => {
  const { dispatch } = useContext(FlightsContext) as FContext;
  const [airlines, setAirlines] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchAirplanes = async () => {
      const data = await getAirplanes();
      setAirlines(data);
    };

    fetchAirplanes();
  }, []);

  const handleChange = (value: string) => {
    dispatch({
      type: FilterActionKind.ADD_PLANE,
      payload: { planeId: value },
    });
  };

  return (
    <div className="space-y-2 sm:w-[180px] w-[130px] z-20 text-white">
      <Label className="font-semibold">Airplane</Label>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="sm:w-[180px] w-[130px] font-medium">
          <SelectValue placeholder="Select Airplane" />
        </SelectTrigger>
        <SelectContent className="font-medium">
          {airlines.map((item, i) => (
            <SelectItem key={item.id + i} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterAirplane;
