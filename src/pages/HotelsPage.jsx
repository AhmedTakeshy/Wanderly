import { json } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

const HotelsPage = () => {
  const city = useSelector((state) => state.search.searchResult.city);
  const date = useSelector((state) => state.search.searchResult.date);
  const adults = useSelector((state) => state.search.searchResult.adults);

  const hotelsDataFetcher = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_HOTELS_PROVIDER,
        "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
      },
    };
    const resCityId = await fetch(
      `https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_GB&query=${city}&domain=AE`,
      options
    );
    if (!resCityId.ok) {
      throw json({ message: "Could not fetch city Id." }, { status: 500 });
    } else {
      const resCityIdData = await resCityId.json();
      const id = await resCityIdData.data[0].gaiaId;

      const allData = await fetch(
        `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=REVIEW&locale=en_GB&checkout_date=${date.endDate}&region_id=${id}&adults_number=${adults}&checkin_date=${date.startDate}&available_filter=SHOW_AVAILABLE_ONLY&meal_plan=FREE_BREAKFAST&guest_rating_min=8&price_min=10&page_number=1&children_ages=4%2C0%2C15&amenities=WIFI%2CPARKING&price_max=500&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5`,
        options
      );
      console.log(allData);
      if (!allData.ok) {
        throw json(
          { message: "Could not fetch hotels data." },
          { status: 500 }
        );
      } else {
        const resData = await allData.json();
        console.log(resData);
        return await resData;
      }
    }
  }, [city, date, adults]);

  useEffect(() => {
    hotelsDataFetcher();
  }, [hotelsDataFetcher]);
  return (
    <>
      <h1>HotelsPage</h1>
    </>
  );
};

export default HotelsPage;

// export const HotelsLoader = async () => {
//   const city = useSelector((state) => state.search.searchResult.city);
//   const date = useSelector((state) => state.search.searchResult.date);
//   const adults = useSelector((state) => state.search.searchResult.adults);
//   console.log(city, date, adults);
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": process.env.REACT_APP_HOTELS_PROVIDER,
//       "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
//     },
//   };
//   const res = await fetch(
//     `https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_GB&query=${city}&domain=AE`,
//     options
//   );
//   if (!res.ok) {
//     throw json({ message: "Could not fetch events." }, { status: 500 });
//   } else {
//     const resData = await res.json();
//     console.log(resData);
//     return resData;
//   }
// };
