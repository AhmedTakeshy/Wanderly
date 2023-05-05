import { Link } from "react-router-dom";
import Title from "../UI/Title";
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
          <div className="grid gap-5  lg:grid-cols-3 md:grid-cols-2">
            {!isAuthenticated
              ? searchData.slice(0, 3).map((hotel, index) => (
                  <Link to="hotels" key={index} state={{ id: index }}>
                    <HotelsHistoryCard
                      id={index}
                      name={hotel.capitalizedCity}
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
                      name={hotel.capitalizedCity}
                      date={hotel.date}
                      rooms={hotel.rooms}
                      src={hotel.url}
                    />
                  </Link>
                ))}
          </div>
          {!isAuthenticated && searchData.length >= 3 && (
            <h2 className="inline-block mt-6 text-xl ">
              For more recent searches please
              <span
                className="ml-1 underline transition duration-300 cursor-pointer hover:text-teal-500"
                onClick={() => loginWithRedirect()}
              >
                login
              </span>
              .
            </h2>
          )}
        </div>
      </>
    )
  );
};

export default HotelsHistory;
