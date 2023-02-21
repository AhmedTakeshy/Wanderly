import React, { useState } from "react";
import { BiUser, BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <nav className="flex w-full justify-between items-center text-white px-4 h-20 absolute z-10">
      <h1 onClick={handleNav} className={logo ? "hidden md:block" : "block"}>
        Wanderly
      </h1>
      <ul className="hidden md:flex items-center  text-xl">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Book</li>
      </ul>
      <div className=" hidden md:flex justify-between items-center px-4 gap-x-2">
        <BiSearch size={20} />
        <BiUser size={20} />
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
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 pt-7 flex flex-col md:hidden"
            : "absolute left-[-100%]"
        }
      >
        <h1>Wanderly</h1>
        <ul>
          <li className="border-b">Home</li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
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
