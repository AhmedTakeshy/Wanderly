import React from "react";
import { Link } from "react-router-dom";
import Timer from "../UI/Timer";

const FlightItem = ({ flight }) => {
  const getDuration = (segment) => {
    const hours = Math.floor(segment.duration / 60);
    const minutes = segment.duration % 60;
    return `${hours}h ${minutes}m`;
  };
  const [firstSegment, secondSegment] = flight.slices[0].segments;
  const firstDuration = getDuration(firstSegment);
  const secondDuration = secondSegment ? getDuration(secondSegment) : "";

  return (
    <div className="flex flex-col items-center justify-between w-full px-2 py-2 mb-6 border-2 border-gray-200 md:py-4 md:px-4 md:flex-row rounded-xl">
      <div className="flex flex-col items-start w-full text-center md:basis-9/12">
        <div className="flex items-center">
          {flight.merchandising.length !== 0 && (
            <span className="p-2 text-xs mx-1 rounded font-medium bg-[#DCFAEB] text-green-600">
              {flight.merchandising}
            </span>
          )}
          <span className="p-2 text-xs mx-1 rounded font-medium bg-[#E6EEFC] text-blue-600">
            {flight?.allFareBrandNames}
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mx-4 my-2 w-[95%]">
          <div className="flex flex-row items-center gap-4 md:gap-0 md:flex-col">
            <div className="mb-2 text-left">
              <h2 className="text-lg">First trip</h2>
              <h3 className="text-base font-normal">
                Dep from:{" "}
                <span className="text-sm font-normal text-gray-700">
                  {firstSegment.departInfo.airport.name}
                </span>
              </h3>
              <h3 className="text-base font-normal">
                Arr to:{" "}
                <span className="text-sm font-normal text-gray-700">
                  {firstSegment.arrivalInfo.airport.name}
                </span>
              </h3>
            </div>
            {secondSegment && (
              <div className="mt-2 text-left">
                <h2 className="text-lg">Second trip</h2>
                <h3 className="text-base font-normal">
                  Dep from:{" "}
                  <span className="text-sm font-normal text-gray-700">
                    {secondSegment.departInfo.airport.name}
                  </span>
                </h3>
                <h3 className="text-base font-normal">
                  Arr to:{" "}
                  <span className="text-sm font-normal text-gray-700">
                    {secondSegment.arrivalInfo.airport.name}
                  </span>
                </h3>
              </div>
            )}
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-wrap items-center justify-center my-3 md:flex-nowrap md:justify-between">
              <div className="flex flex-col items-center p-2 mx-4">
                <span className="text-lg font-semibold text-black">
                  {firstSegment.departInfo.time.dateTime.slice(11, 16)}
                </span>
                <span className="text-base font-normal text-gray-700">
                  {firstSegment.departInfo.airport.code}
                </span>
              </div>
              <span className="inline-block border border-gray-600 w-28" />
              <div className="flex flex-col items-center p-2 mx-4">
                <span className="text-lg font-semibold text-black">
                  {firstSegment.arrivalInfo.time.dateTime.slice(11, 16)}
                </span>
                <span className="text-base font-normal text-gray-700">
                  {firstSegment.arrivalInfo.airport.code}
                </span>
              </div>
              <span className="w-16">{firstDuration}</span>
            </div>
            {secondSegment && (
              <div className="flex flex-wrap items-center justify-center my-5 md:flex-nowrap md:justify-between">
                <div className="flex flex-col items-center p-2 mx-4">
                  <span className="text-lg font-semibold text-black">
                    {secondSegment?.departInfo.time.dateTime.slice(11, 16)}
                  </span>
                  <span className="text-base font-normal text-gray-700">
                    {secondSegment?.departInfo.airport.code}
                  </span>
                </div>
                <span className="inline-block border border-gray-600 w-28" />
                <div className="flex flex-col items-center p-2 mx-4">
                  <span className="text-lg font-semibold text-black">
                    {secondSegment?.arrivalInfo.time.dateTime.slice(11, 16)}
                  </span>
                  <span className="text-base font-normal text-gray-700">
                    {secondSegment?.arrivalInfo.airport.code}
                  </span>
                </div>
                <span className="w-16">{secondDuration}</span>
              </div>
            )}
          </div>
        </div>
        <h2 className="w-full my-2 text-xs font-normal text-center text-gray-500">
          {flight.airlines[0].name}
        </h2>
      </div>
      <div className="flex flex-col items-end justify-between w-full h-full border-gray-200 md:border-l-2 md:basis-3/12">
        <Timer time={flight.voidWindowInfo.hoursLeft} />
        <div className="flex flex-col items-end w-full">
          <h3 className="mb-2">{flight.totalPriceWithDecimal.price}$</h3>
          <button className="w-full mx-auto md:ml-2">
            <Link to={flight.id} state={{ firstSegment }}>
              Get ticket
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;
