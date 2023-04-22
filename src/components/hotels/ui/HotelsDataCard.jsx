import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const HotelsDataCard = ({
  id,
  src,
  name,
  address,
  neighborhood,
  stars,
  overallRating,
  price,
}) => {
  return (
    <div
      key={id}
      className="basis-2/3 p-4 items-center justify-center lg:w-[680px] rounded-xl group sm:flex  space-x-6 border-2 border-gray-200 hover:border-cyan-900 hover:shadow-lg hover:bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <img
        className="mx-auto block h-60 md:w-1/2 object-cover rounded-lg overflow-hidden"
        alt={`${name} hotel`}
        loading="lazy"
        src={src}
      />
      <div className="md:w-3/5 md:pr-5 py-5 ">
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-cyan-900 text-justify">
            {name}
          </h4>
          <div className="flex justify-between items-center mt-4">
            <ReactStars
              count={5}
              value={stars}
              size={24}
              activeColor="#ffd700"
              classNames="mt-0"
              isHalf={true}
            />
            <span className="w-12 h-9 rounded-md bg-custom_purple text-white font-bold flex justify-center items-center">
              {overallRating}
            </span>
          </div>
          <div className="flex items-center space-x-4 justify-between">
            <div className="flex flex-col space-y-1">
              <span className="text-sm">{address},</span>
              <span className="text-sm">{neighborhood}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 justify-between">
            <p className="text-sm font-semibold">$ {price}/night</p>
            <div className="flex flex-row space-x-1">
              <button>
                <Link to={id}>More Details</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsDataCard;
