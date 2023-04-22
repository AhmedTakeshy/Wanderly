import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Map from "./Map";
import SimCarousel from "../SimCarousel";
import { MdLabelImportant } from "react-icons/md";

const HotelItem = ({ hotel }) => {
  console.log(hotel);
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
      <div key={hotel.hotelId} className="mx-auto sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row">
          <div className="overflow-auto md:w-1/4 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {hotel.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Brand:{" "}
              <a
                href={`https://www.google.com/search?q=${hotel.brand}`}
                className="text-indigo-600 hover:underline"
                target="_blank"
              >
                {hotel.brand}
              </a>
            </p>
            <p className="text-gray-500">
              {hotel.location.address.addressLine1},
            </p>
            <p className="text-gray-500 mb-4">
              {hotel.location.address.cityName},{" "}
              {hotel.location.address.countryName}
            </p>
            <Map location={hotel.location} />
            <div className="xl:flex sm:flex flex-col my-4 md:hidden lg:hidden">
              <div className="flex justify-end w-full h-16 px-2 items-center rounded-sm bg-gray-100/90 ">
                <div className="flex flex-col justify-center items-center mr-2">
                  <span>Fabulous</span>
                  <span className="text-xs -mt-[.35rem] text-gray-400">
                    {hotel.guestReviews?.length} reviews
                  </span>
                </div>
                <span className="w-12 h-9 rounded-md flex items-center justify-center bg-blue text-white font-bold">
                  {hotel.overallGuestRating}
                </span>
              </div>
            </div>
            <SimCarousel reviews={hotel.guestReviews} />
          </div>
          <div className="md:w-3/4 px-4 ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img
                src={hotel?.images[4].imageHDUrl}
                alt={`${hotel.name} img 3`}
                className="hidden md:flex xl:hidden"
              />
              <img
                src={hotel?.images[3].imageHDUrl}
                alt={`${hotel.name} img 3`}
              />
              <img
                src={hotel?.images[2].imageHDUrl}
                alt={`${hotel.name} img 2`}
              />
              <img
                className="h-full lg:pb-4 w-full col-span-2 md:col-start-2 row-span-2 md:col-end-4 md:row-start-1 md:row-end-4 -order-1 object-cover"
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
        <div className="flex flex-col md:flex-row my-8">
          <div className="md:w-3/4 px-4">
            <p className="text-gray-500 mb-6">
              {hotel.description.substring(0, 401)}
              {!substring && (
                <span
                  onClick={() => setSubstring((prev) => !prev)}
                  className="text-teal-500 hover:text-teal-300 hover:cursor-pointer text-xs"
                >
                  ...Show more
                </span>
              )}
              {substring && hotel.description.substring(401, -1)}
              {substring && (
                <span
                  onClick={() => setSubstring((prev) => !prev)}
                  className="text-teal-500 hover:text-teal-300 hover:cursor-pointer text-xs"
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
                <h3 className="text-xl font-semibold flex items-center">
                  <MdLabelImportant />
                  Important information
                </h3>
                {hotel.policies.importantInfo.map((info, index) => (
                  <p key={index} className="text-gray-500 mb-4">
                    {info}.
                  </p>
                ))}
              </article>
            </div>
          </div>
          <div className="flex flex-wrap md:w-1/4 w-full h-[34rem] overscroll-none overflow-auto py-4 bg-gradient-to-tl from-[#0cebeb] via-[#20e3b2] to-[#29ffc6] rounded-sm">
            <h2 className="text-white font-bold text-2xl px-2 mb-4">
              Most popular facilities
            </h2>
            {hotel.hotelFeatures.features.map((feature, index) => (
              <p
                key={index}
                className="bg-transparent text-white border-2 border-white p-2 m-2"
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelItem;