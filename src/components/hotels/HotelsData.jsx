import { useSelector } from "react-redux";
import HotelsDataCard from "./ui/HotelsDataCard";
import HotelsFilter from "./HotelsFilter";
import { Link, useLocation } from "react-router-dom";

const HotelsData = () => {
  const { state } = useLocation();
  const id = state?.id;
  const AllHotelsData = useSelector(
    (state) => state.search.hotelsData[state.search.hotelsData.length - 1]
  );
  const hotels = useSelector((state) => state.search.hotelsData[id]);
  let search = hotels || AllHotelsData;

  return (
    <div className="flex items-center flex-col lg:flex-row justify-center gap-4 mx-4 md:mx-12 my-8">
      <h1>Hotels</h1>
      <HotelsFilter />
      <main className="flex flex-col justify-center gap-4">
        {search.map((hotel) => (
          <HotelsDataCard
            key={hotel.hotelId}
            id={hotel.hotelId}
            name={hotel.name}
            neighborhood={hotel.location.neighborhoodName}
            src={hotel.media?.url || hotel.thumbnailUrl}
            stars={hotel.starRating}
            overallRating={hotel.overallGuestRating}
            address={hotel.location.address.addressLine1}
            price={hotel.ratesSummary.minPrice}
          />
        ))}
      </main>
    </div>
  );
};

export default HotelsData;
