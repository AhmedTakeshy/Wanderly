import { useAuth0 } from "@auth0/auth0-react";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProtectedRoute from "../../components/authentication/ProtectedRoute";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

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
      <div className="bg-bgProfile bg-cover pt-36 mb-8 h-screen w-full flex flex-row md:justify-start justify-center items-center">
        <div className="w-96 text-center bg-transparent md:ml-24 flex flex-col justify-center items-center shadow-2xl hover:shadow transition duration-500">
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
              <button className="flex-1 bg-transparent border-2 border-custom_purple hover:border-none hover:bg-custom_purple hover:text-white transition duration-500 text-black">
                Fav destinations
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
    )
  );
};

export default ProtectedRoute(Profile);
