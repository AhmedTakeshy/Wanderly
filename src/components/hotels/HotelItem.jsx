import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Map from "./Map";
import SimCarousel from "../UI/SimCarousel";
import { MdLabelImportant } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const HotelItem = ({ hotel }) => {
  const [substring, setSubstring] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div key={hotel.hotelId} className="mx-auto mt-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="px-4 overflow-auto md:w-1/4 scrollbar-hide">
            <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
              {hotel.name}
            </h2>
            <p className="mb-4 text-sm text-gray-500">
              Brand:{" "}
              <a
                href={`https://www.google.com/search?q=${hotel.brand}`}
                className="text-custom_purple hover:underline"
                target="_blank"
              >
                {hotel.brand}
              </a>
            </p>
            <p className="text-gray-500">
              {hotel.location.address.addressLine1},
            </p>
            <p className="mb-4 text-gray-500">
              {hotel.location.address.cityName},{" "}
              {hotel.location.address.countryName}
            </p>
            <Map location={hotel.location} />
            <div className="flex-col my-4 sm:flex md:hidden xl:flex lg:hidden ">
              <div className="flex items-center justify-end w-full h-16 px-2 rounded-sm bg-gray-100/90 ">
                <div className="flex flex-col items-center justify-center mr-2">
                  <TypeAnimation
                    sequence={[
                      "Fabulous",
                      2000,
                      "Fantastic",
                      2000,
                      "Nice",
                      2000,
                      "Wonderful",
                      2000,
                      "Good",
                      2000,
                      "Excellent",
                      2000,
                      "Superb",
                      2000,
                      "Great",
                      2000,
                      "Very Good",
                      2000,
                    ]}
                    speed={50}
                    className="text-black"
                    wrapper="span"
                    repeat={Infinity}
                    cursor={false}
                  />
                  <span className="text-xs -mt-[.35rem] text-gray-400">
                    {hotel.guestReviews?.length} reviews
                  </span>
                </div>
                <span className="flex items-center justify-center w-12 font-bold text-white rounded-md h-9 bg-custom_purple">
                  {hotel.overallGuestRating}
                </span>
              </div>
            </div>
            <SimCarousel reviews={hotel.guestReviews} />
          </div>
          <div className="px-4 md:w-3/4 ">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <img
                className="h-full"
                src={hotel?.images[3].imageHDUrl}
                alt={`${hotel.name} img 3`}
              />
              <img
                className="h-full"
                src={hotel?.images[2].imageHDUrl}
                alt={`${hotel.name} img 2`}
              />
              <img
                className="object-cover w-full h-full col-span-2 row-span-2 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 -order-1"
                src={hotel?.images[0].imageHDUrl}
                alt={`${hotel.name} img 0`}
              />
            </div>
            <Carousel
              responsive={responsive}
              centerMode={true}
              swipeable={true}
              draggable={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {hotel.images.map(
                (image, index) =>
                  image && (
                    <img
                      key={index}
                      className="h-[10rem] w-full object-cover"
                      src={image.imageHDUrl}
                      alt={`${hotel.name} img ${index}`}
                    />
                  )
              )}
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col my-8 md:flex-row">
          <div className="px-4 md:w-3/4">
            <p className="mb-6 text-gray-500">
              {hotel.description.substring(0, 401)}
              {!substring && (
                <span
                  onClick={() => setSubstring((prev) => !prev)}
                  className="text-xs text-teal-500 hover:text-teal-300 hover:cursor-pointer"
                >
                  ...Show more
                </span>
              )}
              {substring && hotel.description.substring(401, -1)}
              {substring && (
                <span
                  onClick={() => setSubstring((prev) => !prev)}
                  className="text-xs text-teal-500 hover:text-teal-300 hover:cursor-pointer"
                >
                  ...Show less
                </span>
              )}
            </p>
            <div>
              <h2 className="text-2xl font-bold">Hotel policies</h2>
              <article className="my-4">
                <h3 className="text-xl font-semibold">Checking-time</h3>
                <p className="text-gray-500">
                  Check-in time at {hotel.policies.checkInTime}. Check-out time
                  at {hotel.policies.checkOutTime}.
                </p>
              </article>
              <article className="my-4">
                <h3 className="text-xl font-semibold">Children description</h3>
                <p className="text-gray-500">
                  {hotel.policies.childrenDescription}.
                </p>
              </article>
              <article className="my-4">
                <h3 className="text-xl font-semibold">Pet description</h3>
                <p className="text-gray-500">
                  {hotel.policies.petDescription}.
                </p>
              </article>
              <article className="my-4">
                <h3 className="flex items-center text-xl font-semibold">
                  <MdLabelImportant />
                  Important information
                </h3>
                {hotel.policies.importantInfo &&
                  hotel.policies.importantInfo.map((info, index) => (
                    <p key={index} className="mb-4 text-gray-500">
                      {info}.
                    </p>
                  ))}
              </article>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 mx-2 text-center md:w-1/4">
            <h2 className="text-white w-full font-bold text-2xl px-2 py-2 bg-gradient-to-tl from-[#0cebeb] via-[#20e3b2] to-[#29ffc6] rounded-md">
              Most popular facilities
            </h2>
            <div className="flex flex-wrap max-h-[33rem] w-full md:overscroll-none overscroll-auto overflow-auto mx-2 py-4 bg-gradient-to-tl from-[#0cebeb] via-[#20e3b2] to-[#29ffc6] rounded-md">
              {hotel.hotelFeatures.features.map((feature, index) => (
                <p
                  key={index}
                  className="p-2 m-2 text-white border-2 border-black rounded backdrop-blur-sm bg-gray-800/30 border-gray-400/50"
                >
                  {feature}
                </p>
              ))}
            </div>
            <button className="w-full px-4 py-2 text-xl font-bold text-white rounded-md bg-custom_purple md:mt-0">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelItem;
