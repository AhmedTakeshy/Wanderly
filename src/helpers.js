import axios from "axios";
export const dateConverter = (date) => {
  const dateStr = date;
  const dateConvert = new Date(`${dateStr} 2023`);
  const formattedDate = dateConvert.toISOString().substring(0, 10);
  return formattedDate;
};

export const HotelsAction = async ({ request }) => {
  const data = await request.formData();
  const { city, date, rooms } = Object.fromEntries(data);
  const startDate = dateConverter(date.slice(0, 10));
  const endDate = dateConverter(date.slice(13, 23));

  const optionsPriceline = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_PRICELINE_PROVIDER,
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
    },
  };
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
