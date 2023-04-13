import React from "react";

const HotelsHistoryCard = ({ id, name, date, rooms, src }) => {
  return (
    <div
      key={id}
      className="flex bg-white hover:shadow-lg transition duration-500 shadow-md shadow-black/50 rounded-lg overflow-hidden p-4"
    >
      <img className=" block w-28 h-24 object-cover rounded-lg" src={src} />
      <div className="flex flex-col content-between items-start pt-4 pb-2 px-4">
        <h4 className="text-gray-900 font-bold text-lg name">{name}</h4>
        <p className="mt-2 text-gray-700 text-sm">
          {date}, {rooms} rooms
        </p>
      </div>
    </div>
  );
};

export default HotelsHistoryCard;
