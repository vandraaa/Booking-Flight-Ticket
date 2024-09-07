function SeatCard({ children }: any) {
    return (
        <div className="bg-transparent border-[2px] border-white rounded-md p-4 text-white font-medium text-center">
            {children}
        </div>
    )
}

export default function SeatList({ seats }: { seats: string[] }) {
  return (
    <>
      {seats.map((seat, key) => (
        <SeatCard key={key} className="w-full h-full aspect-square">
          {seat}
        </SeatCard>
      ))}
    </>
  );
}

