export default function SkeletonSeatList() {
    return (
      <>
        {Array(20).fill(null).map((_, index) => (
          <div
            key={index}
            className="w-full h-full aspect-square bg-gray-200 animate-pulse rounded-md"
          />
        ))}
      </>
    );
  };