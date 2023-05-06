import { useEffect, useRef, useState } from "react";

const HotelsFilter = ({ data, onFilter }) => {
  const minInput = useRef();
  const maxInput = useRef();
  const rateInput = useRef();
  const operatorInput = useRef();
  const [filteredData, setFilteredData] = useState(data);

  function compare(operator, value1, value2) {
    switch (operator) {
      case "=":
        return value1 === value2;
      case ">":
        return value1 >= value2;
      case "<":
        return value1 <= value2;
      default:
        return false;
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const min = parseFloat(minInput.current?.value);
    const max = parseFloat(maxInput.current?.value);
    const rate = parseFloat(rateInput.current?.value);
    const operator = operatorInput.current?.value;
    setFilteredData(
      data.filter(
        (hotel) =>
          (isNaN(min) || hotel.ratesSummary.minPrice >= min) &&
          (isNaN(max) || hotel.ratesSummary.minPrice <= max) &&
          (isNaN(rate) || compare(operator, hotel.starRating, rate))
      )
    );
  };

  useEffect(() => {
    // clear filtered data when data changes
    onFilter(filteredData); // pass filtered data back to parent component
    console.log(filteredData);
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
              className="w-[50%] bg-gray-200 p-2 rounded  cursor-pointer"
              type="number"
              id="min"
              name="min"
              ref={minInput}
            />
            <input
              placeholder="Max"
              className="w-[50%] bg-gray-200 p-2 rounded cursor-pointer"
              type="number"
              id="max"
              name="max"
              ref={maxInput}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 font-bold text-gray-700"
            htmlFor="rating"
          >
            Rating:
          </label>
          <div className="flex items-center gap-4">
            <select
              className="h-10 px-4 py-2 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none w-[50%] focus:outline-none focus:bg-white focus:border-gray-500"
              id="rating"
              name="rating"
              ref={rateInput}
            >
              <option value="">Select Rating</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
              <option value="2.5">2.5</option>
              <option value="3">3</option>
              <option value="3.5">3.5</option>
              <option value="4">4</option>
              <option value="4.5">4.5</option>
              <option value="5">5</option>
            </select>
            <select
              className="h-10 px-4 py-2 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none w-[50%] focus:outline-none focus:bg-white focus:border-gray-500"
              ref={operatorInput}
            >
              <option value="=">Exact rate</option>
              <option value=">">Up to 5 star</option>
              <option value="<">
                From 1 to the {rateInput.current?.value || "rate"}
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white border-none rounded bg-custom_purple focus:outline-none "
            type="submit"
          >
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelsFilter;
