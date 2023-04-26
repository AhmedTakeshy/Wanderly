import { Link } from "react-router-dom";
import Title from "../Title";
import HotelsHistoryCard from "./ui/HotelsHistoryCard";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
const HotelsHistory = () => {
  const searchData = useSelector((state) => state.search?.searchHistory);
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    searchData.length > 0 && (
      <>
        <Title title="Your recent searches" />
        <div className="flex flex-col justify-start pb-8 mx-16">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {!isAuthenticated
              ? searchData.slice(0, 3).map((hotel, index) => (
                  <Link to="hotels" key={index} state={{ id: index }}>
                    <HotelsHistoryCard
                      id={index}
                      name={hotel.city}
                      date={hotel.date}
                      rooms={hotel.rooms}
                      src={hotel.url}
                    />
                  </Link>
                ))
              : searchData.map((hotel, index) => (
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
            {!isAuthenticated && (
              <h2 className="text-xl inline-block md:mt-8 lg:mt-4">
                For all recent searches please
                <span
                  className="cursor-pointer transition duration-300 ml-1 underline hover:text-teal-500"
                  onClick={() => loginWithRedirect()}
                >
                  login
                </span>
                .
              </h2>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default HotelsHistory;
