import { Link } from "react-router-dom";
import Title from "../Title";
import HotelsHistoryCard from "./ui/HotelsHistoryCard";
import { useSelector } from "react-redux";

const HotelsHistory = () => {
  const searchData = useSelector((state) => state.search?.searchHistory);

  return (
    searchData.length > 0 && (
      <>
        <Title title="Your recent searches" />
        <div className="flex flex-col justify-start pb-8 mx-16">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {searchData.map((hotel, index) => (
              <Link to="hotels" key={index} state={{ id: index }}>
                <HotelsHistoryCard
                  id={index}
                  name={hotel.city}
                  date={hotel.date}
                  rooms={hotel.rooms}
                  src={hotel.url}
                />
              </Link>
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default HotelsHistory;
