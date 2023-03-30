import React from "react";

const DestinationCard = (props) => {
  return (
    <div className="bg-blue-300 max-h-96 rounded-xl hover:shadow-xl overflow-hidden relative">
      <div className="absolute p-4 z-[1] h-full w-full justify-between flex flex-col">
        <span className="p-2 backdrop-blur-sm bg-gray-800/30 w-12 h-12 justify-center items-center flex self-end rounded-xl border-gray-400/50 border hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
        </span>
        <div className="p-4 rounded-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-800/30 self-end border-gray-400/50 border">
          <h1 className="text-white font-bold text-3xl mb-10">{props.text}</h1>
          <div className="flex justify-between">
            <h3 className="text-white font-bold text-lg capitalize">
              From $788
            </h3>
            <h3 className="text-white font-bold text-lg capitalize">
              63 tours
            </h3>
          </div>
        </div>
      </div>
      <img className="w-full" src={props.bg} alt={props.text} />
    </div>
  );
};

export default DestinationCard;
//"https://images.unsplash.com/photo-1489516408517-0c0a15662682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
