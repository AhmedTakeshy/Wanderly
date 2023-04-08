import Banner from "../components/Banner";
import Destination from "../components/destination/Destination";
import HotelsHistory from "../components/hotels/HotelsHistory";

const HomePage = () => {
  return (
    <>
      <Banner />
      <main>
        <HotelsHistory />
        <Destination />
      </main>
    </>
  );
};

export default HomePage;
