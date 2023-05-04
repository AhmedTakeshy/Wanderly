import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useForm } from "react-hook-form";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { useFetcher } from "react-router-dom";
import { useState } from "react";
const SearchForm = () => {
  const fetcher = useFetcher();
  const [showDate, setShowDate] = useState(true);
  const { data, state } = fetcher;

  const dateHandler = (e) => {
    if (e.target.value === "ONE_WAY") {
      setShowDate(false);
    } else {
      setShowDate(true);
    }
  };

  const invalidHandler = (e) => {
    console.log(e);
    e.target.setCustomValidity(`⚠ ${e.target.name} is required`);
  };

  const validHandler = (e) => {
    e.target.setCustomValidity("");
  };
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-between">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4 ">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at Wanderly Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, Wanderly is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
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
          <div className="flex flex-col lg:flex-row items-center text-center">
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
        <div className="border text-center rounded">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <fetcher.Form
          action="/flights"
          method="post"
          className="w-full focus:outline-none"
        >
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col my-4 w-2/4">
              <label htmlFor="trip">Trip-type</label>
              <select
                id="trip"
                name="trip"
                className="border rounded-md p-2"
                onChange={dateHandler}
              >
                <option value="ROUNDED_TRIP">Round-trip</option>
                <option value="ONE_WAY">One-Way</option>
              </select>
            </div>
            <div className="flex flex-col my-4 w-2/4">
              <label htmlFor="classes">Class</label>
              <select
                id="classes"
                name="classes"
                className="border rounded-md p-2"
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
            <div className="flex justify-between items-center gap-4 relative">
              <input
                placeholder="From?"
                type="text"
                name="cityFrom"
                className="border rounded-md p-2 w-2/4"
                required
                onInvalid={invalidHandler}
                onInput={validHandler}
              />
              <MdFlightTakeoff className="text-black absolute left-[8rem] md:left-[9.5rem] top-[50%]  translate-y-[-50%]" />
              <input
                placeholder="To?"
                type="text"
                name="cityTo"
                className="border rounded-md p-2 w-2/4"
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
              className="border rounded-md p-2"
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
                className="border rounded-md p-2"
                type="date"
                required
                onInvalid={invalidHandler}
                onInput={validHandler}
              />
              {/* {errors.returnDate && (
                <p className="text-rose-500">⚠ Date is required</p>
              )} */}
            </div>
          )}
          <button className="w-full my-4">Search</button>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default SearchForm;
