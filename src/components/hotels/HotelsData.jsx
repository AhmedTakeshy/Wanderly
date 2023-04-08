import { useSelector } from "react-redux";
import HotelsDataCard from "./HotelsDataCard";
import HotelsFilter from "./HotelsFilter";

const HotelsData = () => {
  const AllHotelsData = useSelector(
    (state) => state.search.hotelsData[state.search.hotelsData.length - 1]
  );

  return (
    <div className="flex items-center justify-center gap-4 mx-12 my-8">
      <h1>Hotels</h1>
      <HotelsFilter />
      <main className="flex flex-col justify-center gap-4">
        {AllHotelsData &&
          AllHotelsData.map((hotel) => (
            <HotelsDataCard
              key={hotel.hotelId}
              id={hotel.hotelId}
              name={hotel.name}
              address={hotel.location.neighborhoodName}
              src={hotel.media?.url || hotel.thumbnailUrl}
            />
          ))}
      </main>
    </div>
  );
};

export default HotelsData;
