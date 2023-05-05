import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import Dropdown from "../../pages/user/Dropdown";

const Nav = () => {
  const [showComponent, setShowComponent] = useState(false);
  const showComponentHandler = () => {
    setShowComponent((prev) => !prev);
  };
  const black = useSelector((state) => state.ui.black);
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(uiActions.changeColor(false));
    } else {
      dispatch(uiActions.changeColor(true));
    }
  }, [location.pathname, dispatch]);

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <nav
      className={`flex w-full justify-between items-center ${
        black === true ? "text-black" : "text-white"
      } px-4 h-20 absolute z-10`}
    >
      <h1 className={logo ? "hidden md:block" : "block"}>
        <NavLink to="/">
          <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-6xl">
            W
          </span>
          anderly
        </NavLink>
      </h1>
      <ul className="items-center hidden text-xl md:flex">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `underline underline-offset-4` : undefined
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `underline underline-offset-4 ` : "hover:text-black"
            }
            to="/flights"
          >
            Flights
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `underline underline-offset-4` : "hover:text-black"
            }
            to="/car"
          >
            Car Hire
          </NavLink>
        </li> */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `underline underline-offset-4` : "hover:text-black"
            }
            to="/about"
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <div
        className="items-center justify-between hidden px-4  md:flex gap-x-2"
        onClick={showComponentHandler}
      >
        <Dropdown status={showComponent} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-[2] right-2 absolute">
        {nav ? (
          <AiOutlineClose
            className="fixed text-black right-4 top-10"
            size={25}
          />
        ) : (
          <HiOutlineMenuAlt4 className="relative  top-1" size={25} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "fixed text-black left-0 top-0 w-full h-screen bg-gray-100/90 px-4 py-6 z-[1] flex flex-col md:hidden"
            : "absolute left-[-100%]"
        }
      >
        <h1>
          <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            W
          </span>
          anderly
        </h1>
        <ul>
          <li className="border-b">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="border-b">
            <NavLink to="/flights">Flights</NavLink>
          </li>
          {/* <li className="border-b">
            <NavLink to="/car">Car hire</NavLink>
          </li> */}
          <li className="border-b">
            <NavLink to="/about">About Us</NavLink>
          </li>
          {isAuthenticated && (
            <li className="border-b">
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}
          <div className="flex flex-col">
            {!isAuthenticated && (
              <button
                className="mt-6"
                onClick={() =>
                  loginWithRedirect({
                    redirectUri: window.location.origin + location.pathname,
                  })
                }
              >
                Login
              </button>
            )}
            {isAuthenticated && (
              <button
                className="mt-6"
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin + location.pathname,
                    },
                  })
                }
              >
                Logout
              </button>
            )}
          </div>
          <div className="flex justify-between mt-8">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
