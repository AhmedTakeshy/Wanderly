import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProtectedRoute from "../../components/authentication/ProtectedRoute";
import DestinationCard from "../../components/home/destination/DestinationCard";
import Title from "../../components/UI/Title";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const destinationData = useSelector((state) => state.user?.destinations);
  const [showWishlist, setShowWishlist] = useState(false);

  const toggleWishlistHandler = () => {
    setShowWishlist((prevState) => !prevState);
  };

  if (isLoading) {
    return (
      <PropagateLoader
        className="pt-40"
        color="#36d7b7"
        cssOverride={{
          margin: "1rem auto",
          display: "block",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      />
    );
  }

  return (
    isAuthenticated && (
      <>
        <div className="flex flex-row items-center justify-center w-full h-screen mb-8 bg-center bg-cover bg-bgProfile">
          <div className="flex flex-col items-center justify-center text-center transition duration-500 bg-white rounded shadow-2xl w-96 hover:shadow">
            <img
              className="object-cover w-32 -mt-20 text-center border-4 rounded-full border-custom_purple"
              src={user.picture}
              alt={user.name}
            />
            <div className="mt-2 text-3xl font-medium text-center">
              {user.name}
            </div>
            <div className="mt-2 text-sm font-light text-center">
              @{user.nickname}
            </div>
            <div className="px-6 mt-8 text-sm font-light text-center">
              <p>Last updated {user.updated_at}</p>
            </div>
            <hr className="mt-2" />
            <div className="flex w-full p-4">
              <div className="w-1/2 text-center">
                <button
                  className="flex-1 w-4/5 text-black transition duration-500 bg-transparent border-2 border-custom_purple hover:border-none hover:bg-custom_purple hover:text-white"
                  onClick={toggleWishlistHandler}
                >
                  Wishlist
                </button>
              </div>
              <div className="w-0 border border-gray-300"></div>
              <div className="w-1/2 text-center">
                <button
                  className="flex-1 w-4/5 text-black transition duration-500 bg-transparent border-2 border-custom_purple hover:border-none hover:bg-custom_purple hover:text-white"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        {showWishlist && (
          <>
            <Title title="Your favorite Destinations" />
            <div className="grid gap-4 pt-4 pb-32 mx-16 lg:grid-cols-3 md:grid-cols-2">
              {destinationData.map((destination, index) => (
                <DestinationCard
                  key={index}
                  id={index}
                  bg={destination.bg}
                  title={destination.title}
                  detail={destination.detail}
                />
              ))}
            </div>
          </>
        )}
      </>
    )
  );
};

export default ProtectedRoute(Profile);
