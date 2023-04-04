import {
  Await,
  defer,
  json,
  useNavigation,
  redirect,
  useActionData,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { Suspense, useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import HotelsDataCard from "./HotelsDataCard";
import HotelsFilter from "./HotelsFilter";

const HotelsData = () => {
  // const dispatch = useDispatch();
  const data = useActionData();
  console.log(data);
  const navigation = useNavigation();
  let loading = navigation.state === "loading";
  console.log(navigation.state);
  // const hotelsData = useSelector(
  //   (state) => state.search.history[state.search.history.length - 1]
  // );
  // console.log(hotelsData);
  // const city = useSelector(
  //   (state) =>
  //     state.search.searchResult[state.search.searchResult.length - 1].city
  // );
  // const date = useSelector(
  //   (state) =>
  //     state.search.searchResult[state.search.searchResult.length - 1].date
  // );
  // const adults = useSelector(
  //   (state) =>
  //     state.search.searchResult[state.search.searchResult.length - 1].adults
  // );
  // const [cityId, setCityId] = useState("");

  // const fetchCityId = useCallback(async () => {
  //   const options = {
  //     headers: {
  //       "X-RapidAPI-Key": process.env.REACT_APP_HOTELS_PROVIDER,
  //       "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  //     },
  //   };
  //   try {
  //     const resCityId = await axios.get(
  //       `https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_GB&query=${city}&domain=AE`,
  //       options
  //     );
  //     console.log(resCityId);
  //     setCityId(resCityId.data.data[0].gaiaId);
  //     console.log(cityId);
  //   } catch (error) {
  //     console.log(error);
  //     throw json({ message: "Could not fetch data." }, { status: 500 });
  //   }
  // }, [city, cityId]);

  // useEffect(() => {
  //   fetchCityId();
  //   if (cityId) {
  //     const fetchHotelsData = async () => {
  //       const options = {
  //         headers: {
  //           "X-RapidAPI-Key": process.env.REACT_APP_HOTELS_PROVIDER,
  //           "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
  //         },
  //       };
  //       try {
  //         const allData = await axios.get(
  //           `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=REVIEW&locale=en_GB&checkout_date=${date.endDate}&region_id=${cityId}&adults_number=${adults}&checkin_date=${date.startDate}&available_filter=SHOW_AVAILABLE_ONLY&meal_plan=FREE_BREAKFAST&guest_rating_min=8&price_min=10&page_number=1&children_ages=4%2C0%2C15&amenities=WIFI%2CPARKING&price_max=500&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5`,
  //           options
  //         );
  //         console.log(allData.data.properties);
  //         dispatch(searchActions.history(allData.data.properties));
  //         return defer({
  //           HotelsDataDeferred: allData.data.properties,
  //         });
  //       } catch (error) {
  //         console.log(error);
  //         throw json({ message: "Could not fetch data." }, { status: 500 });
  //       }
  //     };
  //     fetchHotelsData();
  //   }
  // }, [cityId, date, adults, fetchCityId, dispatch]);

  return (
    <div className="flex items-center justify-center gap-4 mx-12 my-8">
      <h1>Hotels</h1>
      <HotelsFilter />
      {/* <main className="flex flex-col justify-center gap-4">
        {loading && <div className="animate-pulse"></div>}
        {!loading &&
          hotelsData &&
          hotelsData.map((hotel) => (
            <HotelsDataCard
              key={hotel.id}
              name={hotel.name}
              src={hotel.propertyImage.image.url}
            />
          ))}
      </main> */}
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
  console.log(startDate, endDate);
  const options = {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_HOTELS_PROVIDER,
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
  } catch (error) {
    console.log(error);
    throw json({ message: "Could not fetch hotels data." }, { status: 500 });
  }
  return { city, date, rooms };
};
