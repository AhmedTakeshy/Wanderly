import { useEffect, useRef, useState } from "react";

const FlightsFilter = ({ flights, onFilter }) => {
  const minInput = useRef();
  const maxInput = useRef();
  const stopInput = useRef();
  const [filteredData, setFilteredData] = useState(flights);
  const submitHandler = (e) => {
    e.preventDefault();
    const min = parseFloat(minInput.current?.value);
    const max = parseFloat(maxInput.current?.value);
    const stop = stopInput.current?.checked;
    setFilteredData(
      flights.filter(
        (flight) =>
          (isNaN(min) || flight.totalPriceWithDecimal.price >= min) &&
          (isNaN(max) || flight.totalPriceWithDecimal.price <= max) &&
          (!stop || flight.slices[0].segments.length < 2)
      )
    );
  };

  useEffect(() => {
    onFilter(filteredData); // pass filtered data back to parent component
  }, [filteredData]);
  return (
    <div className="w-full max-w-md mx-auto ">
      <form
        onSubmit={submitHandler}
        className="px-8 pt-6 pb-8  bg-gradient-to-tl from-[#0cebeb] via-[#20e3b2] to-[#29ffc6] rounded shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="price">
            Price:
          </label>
          <div className="flex items-center gap-4">
            <input
              placeholder="Min"
              className="w-full p-2 bg-gray-200 rounded cursor-pointer outline-custom_purple"
              type="number"
              id="min"
              name="min"
              ref={minInput}
            />
            <input
              placeholder="Max"
              className="w-full p-2 bg-gray-200 rounded cursor-pointer outline-custom_purple"
              type="number"
              id="max"
              name="max"
              ref={maxInput}
            />
          </div>
        </div>
        <div className="flex flex-row mb-4">
          <input
            ref={stopInput}
            type="checkbox"
            id="stop"
            value="stop"
            className="w-6 h-6 transition-all duration-200 bg-gray-200 rounded-full appearance-none checked:bg-custom_purple checked:scale-75 peer"
          />
          <div className="absolute w-6 h-6 rounded-full pointer-events-none peer-checked:border-custom_purple peer-checked:border-2"></div>
          <label
            htmlFor="stop"
            className="flex flex-col justify-center px-2 select-none peer-checked:text-custom_purple"
          >
            None-stop
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 font-bold text-white border-none rounded bg-custom_purple focus:outline-none ">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightsFilter;
