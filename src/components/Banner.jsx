import bannerVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import DateRangeComp from "./DataRange";
import { Form } from "react-router-dom";

const Banner = () => {
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
        <Form
          method="post"
          action="hotels" //action="/hotels?index" to target the index page
          className="flex justify-between items-center flex-col md:flex-row max-w-[700px] mx-auto w-full border p-1
          rounded-lg text-black bg-gray-100/90"
        >
          <div className="flex flex-col justify-between w-full md:w-auto px-4 md:px-0 md:gap-4  md:flex-row">
            <div className="flex justify-start gap-2 items-center">
              <GoLocation size={18} className="icon" />
              <input
                className="bg-transparent focus:outline-none p-2 font-semibold"
                type="text"
                name="city"
                placeholder="Where to go"
                required
              />
            </div>
            <div className="flex justify-start gap-2 items-center">
              <SlCalender size={18} className="icon" />
              <DateRangeComp />
            </div>
            <div className="flex justify-start gap-2  items-center">
              <BsPeople size={18} className="icon" />
              <input
                className="bg-transparent focus:outline-none p-2 w-[130px] font-semibold" //w-[300px] sm:w-[400px]
                type="number"
                name="rooms"
                placeholder="Rooms"
                required
              />
            </div>
          </div>
          <div className=" md:w-auto w-full">
            <button className="md:m-1 w-full md:w-auto" type="submit">
              <span className=" md:hidden inline font-bold tracking-widest">
                Search
              </span>
              <AiOutlineSearch
                size={20}
                className="icon hidden md:inline"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Banner;
