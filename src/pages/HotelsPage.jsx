import HotelsData from "../components/hotels/HotelsData";

const HotelsPage = () => {
  return <HotelsData />;
};

export default HotelsPage;

export const HotelsDataAction = async ({ request }) => {
  console.log(request, "request");
  const data = await request.formData();
  console.log(data, "data");
  console.log(data.get("city"), "city");
  return data;
};
