import React from "react";
import Banner from "../components/Banner";

const HomePage = () => {
  return <Banner />;
};

export default HomePage;

export const HotelsAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data);
};
