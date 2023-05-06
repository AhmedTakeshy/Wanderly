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
      className="basis-9/12 p-4 items-center justify-center lg:w-[680px] rounded-xl group sm:flex  space-x-6 border-2 border-gray-200 hover:border-cyan-900 hover:shadow-lg hover:bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      <img
        className="block object-cover mx-auto overflow-hidden rounded-lg h-60 md:w-1/2"
        alt={`${name} hotel`}
        loading="lazy"
        src={src}
      />
      <div className="py-5 md:w-3/5 md:pr-5 ">
        <div className="space-y-4">
          <h4 className="font-semibold text-justify text-md text-cyan-900">
            {name}
          </h4>
          <div className="flex items-center justify-between mt-4">
            <ReactStars
              count={5}
              value={stars}
              size={24}
              activeColor="#ffd700"
              classNames="mt-0"
              isHalf={true}
              edit={false}
            />
            <span className="flex items-center justify-center w-12 font-bold text-white rounded-md h-9 bg-custom_purple">
              {overallRating}
            </span>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm">{address},</span>
              <span className="text-sm">{neighborhood}</span>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4">
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
