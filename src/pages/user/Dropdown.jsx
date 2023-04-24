import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BiUser } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Dropdown = ({ status }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const location = useLocation();
  const target = location.pathname === "/profile" ? "/" : location.pathname;
  console.log(target);
  return (
    <div className="flex justify-center">
      <div className="relative">
        {isAuthenticated ? (
          user.picture && (
            <img
              src={user.picture}
              alt={user.name}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          )
        ) : (
          <BiUser size={25} className="hover:text-black cursor-pointer" />
        )}
        {status && (
          <div className="absolute right-0 w-36 mt-2 py-2 bg-white border rounded shadow-xl">
            {isAuthenticated ? (
              <>
                <Link
                  to="profile"
                  className="cursor-pointer transition duration-500 block px-2 py-1 text-normal text-gray-900 rounded hover:translate-x-3"
                >
                  Profile
                </Link>
                <div className="py-2">
                  <hr />
                </div>
                <span
                  onClick={() =>
                    logout({
                      logoutParams: {
                        returnTo: window.location.origin + target,
                      },
                    })
                  }
                  className="cursor-pointer transition duration-500 block px-2 py-1 text-normal text-gray-900 rounded hover:translate-x-3"
                >
                  Logout
                </span>
              </>
            ) : (
              <span
                className="cursor-pointer transition duration-500 block px-2 py-1 text-normal text-gray-900 rounded hover:translate-x-3"
                onClick={() =>
                  loginWithRedirect({
                    redirectUri: window.location.origin + location.pathname,
                  })
                }
              >
                Log In
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Dropdown);
