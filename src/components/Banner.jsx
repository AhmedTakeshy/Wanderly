import bannerVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Banner = () => {
  const cityInput = useRef();

  const data = cityInput.current;

  return (
    <div className=" w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        src={bannerVid}
      />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90"
        >
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none p-2 font-semibold"
              type="text"
              name="city"
              ref={cityInput}
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button className="m-1">
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
