import bannerVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import DateRangeComp from "./DataRange";
import { useFetcher, useNavigate, json } from "react-router-dom";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/search-slice";

const Banner = () => {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let isMounted = useRef(false);

  const { data, state } = fetcher;
  const city = fetcher.formData?.get("city");
  const date = fetcher.formData?.get("date");
  const rooms = fetcher.formData?.get("rooms");
  const existedCities = useSelector((state) => state.search?.searchHistory);
  const isSubmitting = state === "submitting";

  useEffect(() => {
    if (isMounted.current) {
      if (data && state === "idle") {
        dispatch(searchActions.addHotelsData(data.AllHotelsData));
        navigate("/hotels", { state: data.AllHotelsData });
      }

      if (data && city && date && rooms) {
        const url = data.imgUrl[0].image_url;
        const result = existedCities.map((item) => item.city);

        if (!result.includes(city)) {
          dispatch(searchActions.addSearchData({ city, date, rooms }));
          dispatch(searchActions.addSearchImg(url));
        }
      }
    } else {
      isMounted.current = true;
    }
  }, [data, state]);

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
        <fetcher.Form
          method="post"
          action="/hotels" //action="/hotels?index" to target the index page
          className="flex justify-between items-center flex-col md:flex-row max-w-[700px] mx-auto w-full border p-1
          rounded-lg text-black bg-gray-100/90"
        >
          <div className="flex flex-col justify-between w-full md:w-auto px-4 md:px-0 md:gap-4  md:flex-row">
            <div className="flex justify-start gap-2 items-center">
              <GoLocation size={18} className="icon" />
              <input
                className="bg-transparent focus:outline-none p-2 font-semibold border-none"
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
                className="bg-transparent focus:outline-none p-2 w-[130px] font-semibold border-none" //w-[300px] sm:w-[400px]
                type="number"
                name="rooms"
                max="8"
                min="1"
                placeholder="Rooms"
                required
              />
            </div>
          </div>
          <div className=" md:w-auto w-full">
            <button
              className="md:m-1 w-full md:w-auto"
              type="submit"
              disabled={isSubmitting}
            >
              <span className="md:hidden inline font-bold tracking-widest">
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3">
                      <ImSpinner9 size={20} className="md:hidden inline" />
                    </svg>
                    Submitting
                  </span>
                ) : (
                  "Search"
                )}
              </span>
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 hidden md:inline">
                  <ImSpinner9
                    size={20}
                    className="icon hidden md:inline"
                    style={{ color: "#ffffff" }}
                  />
                </svg>
              ) : (
                <AiOutlineSearch
                  size={20}
                  className="icon hidden md:inline"
                  style={{ color: "#ffffff" }}
                />
              )}
            </button>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default Banner;
