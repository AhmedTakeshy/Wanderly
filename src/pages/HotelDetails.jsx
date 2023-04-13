import axios from "axios";
import { defer, useLoaderData } from "react-router-dom";
import HotelItem from "../components/hotels/HotelItem";

const HotelDetails = () => {
  const { hotel } = useLoaderData();
  console.log(hotel);
  return <HotelItem />;
};

export default HotelDetails;

const hotelLoader = async (id) => {
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
    hotel: await hotelLoader(id),
  });
};
