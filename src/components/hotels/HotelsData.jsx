import { Await, defer, json, useActionData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { Suspense, useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import HotelsDataCard from "./HotelsDataCard";
import HotelsFilter from "./HotelsFilter";

const HotelsData = () => {
  const dispatch = useDispatch();
  const AllHotelsData = useActionData();

  useEffect(() => {
    if (AllHotelsData) {
      dispatch(searchActions.addHotelsData(AllHotelsData));
    }
  }, [AllHotelsData, dispatch]);
  return (
    <div className="flex items-center justify-center gap-4 mx-12 my-8">
      <h1>Hotels</h1>
      <HotelsFilter />
      <main className="flex flex-col justify-center gap-4">
        {AllHotelsData &&
          AllHotelsData.filter((hotel) => hotel.hotelId).map((hotel) => (
            <HotelsDataCard
              key={hotel.hotelId}
              id={hotel.hotelId}
              name={hotel.name}
              address={hotel.location.neighborhoodName}
              src={hotel.media?.url || hotel.thumbnailUrl}
            />
          ))}
      </main>
    </div>
  );
};

export default HotelsData;

const dateConverter = (date) => {
  const dateStr = date;
  const dateConvert = new Date(`${dateStr} 2023`);
  const formattedDate = dateConvert.toISOString().substring(0, 10);
  return formattedDate;
};
export const HotelsDataAction = async ({ request }) => {
  const data = await request.formData();
  const { city, date, rooms } = Object.fromEntries(data);
  const startDate = dateConverter(date.slice(0, 10));
  const endDate = dateConverter(date.slice(13, 23));
  const options = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_PRICELINE_PROVIDER,
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
    },
  };

  try {
    const { data: cityID } = await axios.get(
      `https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=${city}&search_type=CITY`,
      options
    );
    console.log(cityID);
    const Id = cityID[0].id;
    console.log(Id);
    const { data: hotels } = await axios.get(
      `https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?date_checkout=${endDate}&sort_order=HDR&date_checkin=${startDate}&location_id=${Id}&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0&amenities_ids=FINTRNT%2CFBRKFST&rooms_number=${rooms}`,
      options
    );
    console.log(hotels.hotels);
    console.log(hotels.hotels.media);
    const AllHotelsData = hotels.hotels;
    return AllHotelsData;
  } catch (error) {
    console.log(error);
    throw json({ message: "Could not fetch hotels data." }, { status: 500 });
  }
};
