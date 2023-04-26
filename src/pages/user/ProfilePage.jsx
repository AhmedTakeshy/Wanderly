import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProtectedRoute from "../../components/authentication/ProtectedRoute";
import DestinationCard from "../../components/destination/DestinationCard";
import Title from "../../components/Title";

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
        <div className="bg-bgProfile bg-cover bg-center mb-8 h-screen w-full flex flex-row justify-center items-center">
          <div className="w-96 text-center bg-white rounded flex flex-col justify-center items-center shadow-2xl hover:shadow transition duration-500">
            <img
              className="w-32 object-cover text-center rounded-full -mt-20 border-4 border-custom_purple"
              src={user.picture}
              alt={user.name}
            />
            <div className="text-center mt-2 text-3xl font-medium">
              {user.name}
            </div>
            <div className="text-center mt-2 font-light text-sm">
              @{user.nickname}
            </div>
            <div className="px-6 text-center mt-8 font-light text-sm">
              <p>Last updated {user.updated_at}</p>
            </div>
            <hr className="mt-2" />
            <div className="flex w-full p-4">
              <div className="w-1/2 text-center">
                <button
                  className="w-4/5 flex-1 bg-transparent border-2 border-custom_purple hover:border-none hover:bg-custom_purple hover:text-white transition duration-500 text-black"
                  onClick={toggleWishlistHandler}
                >
                  Wishlist
                </button>
              </div>
              <div className="w-0 border border-gray-300"></div>
              <div className="w-1/2 text-center">
                <button
                  className="w-4/5 flex-1 bg-transparent border-2 border-custom_purple hover:border-none hover:bg-custom_purple hover:text-white transition duration-500 text-black"
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
            <div className="mx-16 pb-32 pt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
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
