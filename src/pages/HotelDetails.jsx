import axios from "axios";
import { Await, defer, useLoaderData } from "react-router-dom";
import HotelItem from "../components/hotels/HotelItem";
import { Suspense } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const HotelDetails = () => {
  const { hotel } = useLoaderData();
  return (
    <Suspense
      fallback={
        <PropagateLoader
          color="#36d7b7"
          cssOverride={{
            margin: "1rem auto",
            display: "block",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        />
      }
    >
      <Await resolve={hotel}>
        {(loadedHotel) => <HotelItem hotel={loadedHotel} />}
      </Await>
    </Suspense>
  );
};

export default HotelDetails;

const loadedHotel = async (id) => {
  const options = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_PRICELINE_PROVIDER,
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
    },
  };

  const res = await axios.get(
    `https://priceline-com-provider.p.rapidapi.com/v1/hotels/details?hotel_id=${id}`,
    options
  );
  return res.data;
};

export const hotelDetailsLoader = async ({ params }) => {
  const id = params.id;
  return defer({
    hotel: loadedHotel(id),
  });
};
