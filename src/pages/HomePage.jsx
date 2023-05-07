import Banner from "../components/home/Banner";
import Destination from "../components/home/destination/Destination";
import HotelsHistory from "../components/hotels/HotelsHistory";
import Cookies from "../components/home/Cookies";
import { useSelector } from "react-redux";
const HomePage = () => {
  const cookies = useSelector((state) => state.ui.cookies);
  return (
    <>
      <Banner />
      <main>
        <HotelsHistory />
        <Destination />
      </main>
      {!cookies && <Cookies />}
    </>
  );
};

export default HomePage;
