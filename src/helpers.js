import axios from "axios";

export const dateConverter = (date) => {
  const dateStr = date;
  const dateConvert = new Date(`${dateStr} 2024`);
  const formattedDate = dateConvert.toISOString().substring(0, 10);
  return formattedDate;
};

const optionsPriceline = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_PRICELINE_PROVIDER,
    "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  },
};

export const HotelsAction = async ({ request }) => {
  const data = await request.formData();
  const { city, date, rooms } = Object.fromEntries(data);
  const startDate = dateConverter(date.slice(0, 10));
  const endDate = dateConverter(date.slice(13, 23));

  const optionsBooking = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_PRICELINE_PROVIDER,
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  try {
    const { data: cityID } = await axios.get(
      `https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations?name=${city}&search_type=CITY`,
      optionsPriceline
    );

    const Id = cityID[0].id;
    const { data: hotels } = await axios.get(
      `https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?date_checkout=${endDate}&sort_order=HDR&date_checkin=${startDate}&location_id=${Id}&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0&amenities_ids=FINTRNT%2CFBRKFST&rooms_number=${rooms}`,
      optionsPriceline
    );
    const { data: imgUrl } = await axios.get(
      `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${city}&locale=en-gb`,
      optionsBooking
    );

    const AllHotelsData = hotels.hotels?.filter((hotel) => hotel.hotelId);
    return { AllHotelsData, imgUrl };
  } catch (error) {
    console.log(error);
    throw json({ message: "Could not fetch hotels data." }, { status: 500 });
  }
};

export const flightsAction = async ({ request }) => {
  const data = await request.formData();
  const { cityFrom, cityTo, departureDate, returnDate, trip, classes } =
    Object.fromEntries(data);
  const cityFromUrl = `https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=${cityFrom}`;
  const cityToUrl = `https://priceline-com-provider.p.rapidapi.com/v1/flights/locations?name=${cityTo}`;

  try {
    const cityFromRes = await axios.get(cityFromUrl, optionsPriceline);
    const cityToRes = await axios.get(cityToUrl, optionsPriceline);
    const cityFromId =
      cityFromRes.data[0].lat === 0
        ? cityFromRes.data[1].id
        : cityFromRes.data[0].id;
    const cityToId =
      cityToRes.data[0].lat === 0 ? cityToRes.data[1].id : cityToRes.data[0].id;
    if (cityFromId && cityToId) {
      const options = {
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/community/v1/flights/search",
        params: {
          location_arrival: cityToId,
          sort_order: "PRICE",
          date_departure: departureDate,
          itinerary_type: trip,
          class_type: classes,
          location_departure: cityFromId,
          number_of_stops: "1",
          price_max: "20000",
          number_of_passengers: "1",
          duration_max: "2051",
          price_min: "100",
          date_departure_return: returnDate,
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_PRICELINE_PROVIDER,
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      };

      const { data } = await axios.request(options);
      return data;
    }
    return { message: "Could not fetch flights data." };
  } catch (error) {
    console.log(error);
  }
};
