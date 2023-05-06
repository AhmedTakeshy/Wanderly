import { useSelector } from "react-redux";
import HotelsDataCard from "./ui/HotelsDataCard";
import HotelsFilter from "./HotelsFilter";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const HotelsData = () => {
  const { state } = useLocation();
  const id = state?.id;
  const AllHotelsData = useSelector(
    (state) => state.search.hotelsData[state.search.hotelsData.length - 1]
  );
  const hotels = useSelector((state) => state.search.hotelsData[id]);
  let search = hotels || AllHotelsData;
  const [filteredData, setFilteredData] = useState(search);

  const handleFilter = (data) => {
    setFilteredData(data);
  };

  return (
    <div className="flex flex-col items-start justify-between gap-4 mx-4 my-8 lg:flex-row md:mx-12">
      <HotelsFilter data={search} onFilter={handleFilter} />
      <main className="flex flex-col justify-center gap-4 max-w-[680px] w-full">
        {filteredData.length > 0 ? (
          filteredData.map((hotel) => (
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
          ))
        ) : (
          <h1 className="text-2xl font-semibold text-center text-cyan-900">
            No Hotels Found
          </h1>
        )}
      </main>
    </div>
  );
};

export default HotelsData;
