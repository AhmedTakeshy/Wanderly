import React from "react";

const HotelsHistoryCard = ({ id, name, date, rooms, src }) => {
  return (
    <div
      key={id}
      className="flex items-center p-4 overflow-hidden transition duration-500 bg-white rounded-lg shadow-md hover:shadow-lg shadow-black/50"
    >
      <img className="block object-cover h-24 rounded-lg  w-28" src={src} />
      <div className="flex flex-col items-start content-between px-4 pt-4 pb-2">
        <h4 className="text-lg font-bold text-gray-900 name">{name}</h4>
        <p className="mt-2 text-sm text-gray-700">
          {date}, {rooms} rooms
        </p>
      </div>
    </div>
  );
};

export default HotelsHistoryCard;
