import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { NavLink, useLocation } from "react-router-dom";
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-5xl md:text-6xl">
            W
          </span>
          anderly
        </NavLink>
      </h1>
      <ul className="hidden md:flex items-center  text-xl">
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
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `underline underline-offset-4` : "hover:text-black"
            }
            to="/car"
          >
            Car Hire
          </NavLink>
        </li>
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
        className=" hidden md:flex justify-between items-center px-4 gap-x-2"
        onClick={showComponentHandler}
      >
        <Dropdown status={showComponent} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10 right-2 absolute">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={25} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-6  flex flex-col md:hidden"
            : "absolute left-[-100%]"
        }
      >
        <h1>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-5xl">
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
          <li className="border-b">
            <NavLink to="/travel">Travel</NavLink>
          </li>
          <li className="border-b">
            <NavLink to="/view">View</NavLink>
          </li>
          <li className="border-b">
            <NavLink to="/book">Book</NavLink>
          </li>
          <div className="flex flex-col">
            <button className="mt-6" onClick={showComponentHandler}>
              {/* <Dropdown status={showComponent} /> */}
              Account
            </button>
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