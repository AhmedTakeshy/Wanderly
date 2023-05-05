import bannerVid from "../../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import DateRangeComp from "../hotels/DataRange";
import { useFetcher, useNavigate } from "react-router-dom";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { toast } from "react-toastify";

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

  const invalidHandler = (e) => {
    e.target.setCustomValidity(`⚠ ${e.target.name} is required`);
  };

  const validHandler = (e) => {
    e.target.setCustomValidity("");
  };

  useEffect(() => {
    if (isMounted.current) {
      if (data?.AllHotelsData && state === "idle") {
        dispatch(searchActions.addHotelsData(data.AllHotelsData));
        navigate("/hotels", { state: data.AllHotelsData });
      }
      if (data?.AllHotelsData && data?.imgUrl && city && date && rooms) {
        const url = data.imgUrl[0]?.image_url;
        const result = existedCities.map((item) => item.city);
        if (!result.includes(city)) {
          dispatch(searchActions.addSearchData({ city, date, rooms }));
          dispatch(searchActions.addSearchImg(url));
        }
      }
      if (!data?.AllHotelsData && state === "idle") {
        toast.info("Please correct your search information.");
      }
    } else {
      isMounted.current = true;
    }
  }, [data, state]);

  return (
    <div className="relative w-full h-screen ">
      <video
        className="object-cover w-full h-full"
        autoPlay
        muted
        loop
        src={bannerVid}
      />
      <div className="absolute top-0 flex flex-col justify-center w-full h-full p-4 text-center text-white">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <fetcher.Form
          method="post"
          action="/hotels" //action="/hotels?index" to target the index page
          className="flex justify-between items-center flex-col md:flex-row max-w-[700px] mx-auto w-full border p-1
          rounded-lg text-black bg-gray-100/90"
        >
          <div className="flex flex-col justify-between w-full px-4 md:w-auto md:px-0 md:gap-4 md:flex-row">
            <div className="flex items-center justify-start gap-2">
              <GoLocation size={18} className="icon" />
              <input
                className="p-2 font-semibold bg-transparent border-none focus:outline-none"
                type="text"
                name="city"
                placeholder="Where to go"
                required
                onInvalid={invalidHandler}
                onInput={validHandler}
              />
            </div>
            <div className="flex items-center justify-start gap-2">
              <SlCalender size={18} className="icon" />
              <DateRangeComp />
            </div>
            <div className="flex items-center justify-start gap-2">
              <BsPeople size={18} className="icon" />
              <input
                className="bg-transparent focus:outline-none p-2 w-[130px] font-semibold border-none" //w-[300px] sm:w-[400px]
                type="number"
                name="rooms"
                max="8"
                min="1"
                placeholder="Rooms"
                required
                onInvalid={invalidHandler}
                onInput={validHandler}
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <button
              className="w-full md:m-1 md:w-auto"
              type="submit"
              disabled={isSubmitting}
            >
              <span className="inline font-bold tracking-widest md:hidden">
                {isSubmitting ? (
                  <span className="flex items-center justify-center cursor-progress">
                    <svg className="w-5 h-5 mr-3 animate-spin">
                      <ImSpinner9 size={20} className="inline md:hidden" />
                    </svg>
                    Submitting
                  </span>
                ) : (
                  "Search"
                )}
              </span>
              {isSubmitting ? (
                <svg className="hidden w-5 h-5 animate-spin md:inline cursor-progress">
                  <ImSpinner9
                    size={20}
                    className="hidden icon md:inline"
                    style={{ color: "#ffffff" }}
                  />
                </svg>
              ) : (
                <AiOutlineSearch
                  size={20}
                  className="hidden icon md:inline"
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
