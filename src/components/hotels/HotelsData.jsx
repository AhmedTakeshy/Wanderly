import { Await, defer, json } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { Suspense, useCallback, useEffect, useState } from "react";
import axios from "axios";
import HotelsDataCard from "./HotelsDataCard";
import HotelsFilter from "./HotelsFilter";

const HotelsData = () => {
  const dispatch = useDispatch();
  const hotelsData = useSelector(
    (state) => state.search.history[state.search.history.length - 1]
  );
  console.log(hotelsData);
  const city = useSelector(
    (state) =>
      state.search.searchResult[state.search.searchResult.length - 1].city
  );
  const date = useSelector(
    (state) =>
      state.search.searchResult[state.search.searchResult.length - 1].date
  );
  const adults = useSelector(
    (state) =>
      state.search.searchResult[state.search.searchResult.length - 1].adults
  );
  const [cityId, setCityId] = useState("");

  const fetchCityId = useCallback(async () => {
    const options = {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_HOTELS_PROVIDER,
        "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
      },
    };
    try {
      const resCityId = await axios.get(
        `https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_GB&query=${city}&domain=AE`,
        options
      );
      console.log(resCityId);
      setCityId(resCityId.data.data[0].gaiaId);
      console.log(cityId);
    } catch (error) {
      console.log(error);
      throw json({ message: "Could not fetch data." }, { status: 500 });
    }
  }, [city, cityId]);

  useEffect(() => {
    fetchCityId();
    if (cityId) {
      const fetchHotelsData = async () => {
        const options = {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_HOTELS_PROVIDER,
            "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
          },
        };
        try {
          const allData = await axios.get(
            `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=REVIEW&locale=en_GB&checkout_date=${date.endDate}&region_id=${cityId}&adults_number=${adults}&checkin_date=${date.startDate}&available_filter=SHOW_AVAILABLE_ONLY&meal_plan=FREE_BREAKFAST&guest_rating_min=8&price_min=10&page_number=1&children_ages=4%2C0%2C15&amenities=WIFI%2CPARKING&price_max=500&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5`,
            options
          );
          console.log(allData.data.properties);
          dispatch(searchActions.history(allData.data.properties));
          return defer({
            HotelsDataDeferred: allData.data.properties,
          });
        } catch (error) {
          console.log(error);
          throw json({ message: "Could not fetch data." }, { status: 500 });
        }
      };
      fetchHotelsData();
    }
  }, [cityId, date, adults, fetchCityId, dispatch]);

  return (
    <div className="flex items-center justify-center gap-4 mx-12 my-8">
      <HotelsFilter />
      <main className="flex flex-col justify-center gap-4">
        <Suspense fallback={<div className="animate-pulse"></div>}>
          {/* <Await resolve={}>
            {hotelsData &&
          hotelsData.map((hotel) => (
            <HotelsDataCard
              id={hotel.id}
              name={hotel.name}
              src={hotel.propertyImage.image.url}
            />
          ))}
          </Await> */}
        </Suspense>
      </main>
    </div>
  );
};

export default HotelsData;
