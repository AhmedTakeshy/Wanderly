import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { useFetcher } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import FlightsFilter from "./FlightsFilter";
import FlightItem from "./FlightItem";
import { ImSpinner9 } from "react-icons/im";
import { PropagateLoader } from "react-spinners";
const SearchForm = () => {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const [showDate, setShowDate] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [flightsData, setFlightsData] = useState();
  const [isDataRendered, setIsDataRendered] = useState(false);

  const form = useRef();
  const isSubmitting = state === "submitting";

  useEffect(() => {
    if (data && state === "idle") {
      if (isDataRendered) return;
      setFlightsData(data.listings);
      form.current.reset();
    }
    console.log(flightsData);
    console.log(isDataRendered);
  }, [data, state, flightsData]);

  const showMoreHandler = () => {
    setShowMore((prev) => !prev);
    if (showMore) {
      window.scrollTo({
        top: 1300,
        behavior: "smooth",
      });
    }
  };

  const dateHandler = (e) => {
    if (e.target.value === "ROUND_TRIP") {
      setShowDate(true);
    } else {
      setShowDate(false);
    }
  };

  const invalidHandler = (e) => {
    e.target.setCustomValidity(`⚠ ${e.target.name} is required`);
  };

  const validHandler = (e) => {
    e.target.setCustomValidity("");
  };

  const filterHandler = (newData) => {
    setFlightsData(newData);
    setIsDataRendered(true);
  };

  const updateStateHandler = () => {
    setIsDataRendered(false);
  };
  return (
    <>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16">
        <div className="flex flex-col justify-between lg:col-span-2">
          <div>
            <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
            <p className="py-4 ">
              Come experience the very pinnacle of luxury Caribbean
              all-inclusive vacations for couples at Wanderly Resorts. Our
              luxury beach resorts, set along the most gorgeous tropical
              settings and exquisite beaches in Saint Lucia, Jamaica, Antigua,
              The Bahamas, Grenada, Barbados and Curaçao, feature unlimited
              gourmet dining, unique bars serving premium liquors and wines, and
              every land and water sport, including complimentary green fees at
              our golf resorts and certified scuba diving at most resorts. If
              you are planning a wedding, Wanderly is the leader in Caribbean
              destination weddings and honeymoon packages.
            </p>
          </div>
          <div className="grid gap-8 py-4 sm:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:flex-row">
              <button>
                <RiCustomerService2Fill size={50} />
              </button>
              <div>
                <h3 className="py-2">LEADING SERVICE</h3>
                <p className="py-1">
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center lg:flex-row">
              <button>
                <MdOutlineTravelExplore size={50} />
              </button>
              <div>
                <h3 className="py-2">LEADING SERVICE</h3>
                <p className="py-1">
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center border rounded">
            <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="py-2 text-gray-200 bg-gray-800">BOOK NOW AND SAVE</p>
          </div>
          <fetcher.Form
            action="/flights"
            method="post"
            className="w-full focus:outline-none"
            ref={form}
            onSubmit={updateStateHandler}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col w-2/4 my-4">
                <label htmlFor="trip">Trip-type</label>
                <select
                  id="trip"
                  name="trip"
                  className="p-2 border rounded-md outline-custom_purple"
                  onChange={dateHandler}
                >
                  <option value="ONE_WAY">One-Way</option>
                  <option value="ROUND_TRIP">Round-trip</option>
                </select>
              </div>
              <div className="flex flex-col w-2/4 my-4">
                <label htmlFor="classes">Class</label>
                <select
                  id="classes"
                  name="classes"
                  className="p-2 border rounded-md"
                >
                  <option value="ECO">Economy</option>
                  <option value="PEC">Premium economy</option>
                  <option value="BUS">Business</option>
                  <option value="FST">First</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col my-2">
              <label>Destination</label>
              <div className="relative flex items-center justify-between gap-4">
                <input
                  placeholder="From?"
                  type="text"
                  name="cityFrom"
                  className="w-2/4 p-2 border rounded-md outline-custom_purple"
                  required
                  onInvalid={invalidHandler}
                  onInput={validHandler}
                />
                <MdFlightTakeoff className="text-black absolute left-[8rem] md:left-[9.5rem] top-[50%]  translate-y-[-50%]" />
                <input
                  placeholder="To?"
                  type="text"
                  name="cityTo"
                  className="w-2/4 p-2 border rounded-md outline-custom_purple"
                  required
                  onInvalid={invalidHandler}
                  onInput={validHandler}
                />
                <MdFlightLand className="text-black absolute right-2 top-[50%] translate-y-[-50%]" />
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="departure">Departure date</label>
              <input
                id="departure"
                name="departureDate"
                className="w-full p-2 border rounded-md"
                type="date"
                required
                onInvalid={invalidHandler}
                onInput={validHandler}
              />
            </div>
            {showDate && (
              <div className="flex flex-col my-2">
                <label htmlFor="return">Return date</label>
                <input
                  id="return"
                  name="returnDate"
                  className="w-full p-2 border rounded-md"
                  type="date"
                  required
                  onInvalid={invalidHandler}
                  onInput={validHandler}
                />
              </div>
            )}
            <button className="w-full my-4">
              {!isSubmitting ? (
                "Search"
              ) : (
                <span className="flex items-center justify-center cursor-progress">
                  <svg className="w-5 h-5 mr-3 animate-spin">
                    <ImSpinner9 size={20} className="inline " />
                  </svg>
                  Submitting...
                </span>
              )}
            </button>
          </fetcher.Form>
        </div>
      </div>
      {isSubmitting ? (
        <PropagateLoader
          color="#36d7b7"
          cssOverride={{
            margin: "1rem auto",
            display: "block",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        />
      ) : (
        flightsData && (
          <div className="flex flex-col justify-between gap-8 py-6 md:flex-row">
            <div className="flex flex-col gap-4 basis-3/12">
              <FlightsFilter
                flights={data?.listings}
                onFilter={filterHandler}
              />
            </div>
            <div className="flex flex-col items-center md:basis-9/12">
              {(!showMore &&
                flightsData
                  .slice(0, 15)
                  .map((flight) => (
                    <FlightItem key={flight.id} flight={flight} />
                  ))) ||
                (showMore &&
                  flightsData.map((flight) => (
                    <FlightItem key={flight.id} flight={flight} />
                  )))}
              {flightsData?.length >= 15 && (
                <button
                  className="w-full"
                  onClick={() => showMoreHandler((prev) => !prev)}
                >
                  {showMore ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default SearchForm;
