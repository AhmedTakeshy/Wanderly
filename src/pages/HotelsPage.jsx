import { json, useLocation } from "react-router-dom";

const HotelsPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>HotelsPage</h1>
      {/* <h2>{city}</h2> */}
    </>
  );
};

export default HotelsPage;

export const HotelsLoader = async ({ params }) => {
  const { city } = params;
  console.log(city);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_HOTELS_PROVIDER,
      "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
    },
  };
  const res = await fetch(
    `https://hotels-com-provider.p.rapidapi.com/v2/regions?locale=en_GB&query=${city}&domain=AE`,
    options
  );
  if (!res.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await res.json();
    console.log(resData);
    return resData;
  }
};
