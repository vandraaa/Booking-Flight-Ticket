export default function SkeletonSeatList() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="w-full h-full aspect-square bg-gray-200 animate-pulse rounded-md"
          />
        ))}
    </div>
  );
}
