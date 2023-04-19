import { AiFillHeart } from "react-icons/ai";

const DestinationCard = ({ title, detail, bg }) => {
  return (
    <div className="bg-cyan-300 max-h-96 rounded-xl hover:shadow-xl overflow-hidden relative">
      <div className="absolute p-4 z-[1] h-full w-full justify-between flex flex-col">
        <span className="p-2 backdrop-blur-sm bg-gray-800/30 w-12 h-12 justify-center items-center flex self-end rounded-xl border-gray-400/50 border hover:shadow-xl">
          <AiFillHeart
            size={30}
            className="cursor-pointer text-white hover:text-black/40"
          />
        </span>
        <div className="p-4 rounded-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-800/30 self-end border-gray-400/50 border">
          <h1 className="text-white font-bold text-3xl mb-1">{title}</h1>
          <div className="flex justify-between">
            <h3 className="text-white font-bold text-lg capitalize">
              {detail}
            </h3>
            <h3 className="text-white font-bold text-lg capitalize">
              {Math.floor(Math.random() * 100)} Tours
            </h3>
          </div>
        </div>
      </div>
      <img className="w-full" src={bg} alt={title} />
    </div>
  );
};

export default DestinationCard;
