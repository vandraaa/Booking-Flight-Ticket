import { mappingSeats, rupiahFormat } from "@/lib/utils";
import { FlightsColumn } from "./column-flights";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMemo } from "react";

interface ColumnSeatPriceFlightProps {
  flight: FlightsColumn;
}

const ColumnSeatPriceFlight = ({ flight }: ColumnSeatPriceFlightProps) => {
  const {
    ecomony,
    business,
    first,

    totalSeatsEconomy,
    totalSeatsBusiness,
    totalSeatsFirst,
  } = useMemo(() => mappingSeats(flight.seats), [flight]);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger>Economy</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-left">
            <div className="font-medium text-xs flex justify-between">
              <p>Ticket Price</p>
              <p className="text-slate-700 text-left">
                {rupiahFormat(flight.price)}
              </p>
            </div>
          </div>
          <div className="space-y-2 text-left">
            <div className="font-medium text-xs flex justify-between">
              <p>Available Seats</p>
              <p className="text-slate-700 text-left">{ecomony}/{totalSeatsEconomy}/</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="w-full">
        <AccordionTrigger>Business</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-left">
            <div className="font-medium text-xs flex justify-between">
              <p>Ticket Price</p>
              <p className="text-slate-700 text-left">
                {rupiahFormat(flight.price + 500000)}
              </p>
            </div>
          </div>
          <div className="space-y-2 text-left">
            <div className="font-medium text-xs flex justify-between">
              <p>Available Seats</p>
              <p className="text-slate-700 text-left">{business}/{totalSeatsBusiness}/</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="w-full">
        <AccordionTrigger>First</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-left">
            <div className="font-medium text-xs flex justify-between">
              <p>Ticket Price</p>
              <p className="text-slate-700 text-left">
                {rupiahFormat(flight.price + 750000)}
              </p>
            </div>
          </div>
          <div className="space-y-2 text-left">
            <div className="font-medium text-xs flex justify-between">
              <p>Available Seats</p>
              <p className="text-slate-700 text-left">{first}/{totalSeatsFirst}</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColumnSeatPriceFlight;
