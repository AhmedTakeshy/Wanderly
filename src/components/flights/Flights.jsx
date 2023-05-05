import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";
import SearchForm from "./SearchForm";
const Flights = () => {
  return (
    <div className="max-w-[1240px] mx-auto pb-16 my-8 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:gap-4">
        <img
          className="object-cover w-full h-full col-span-2 row-span-2 rounded-md md:col-span-3"
          src={BoraBora}
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-tl-md"
          src={BoraBora2}
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-tr-md"
          src={Maldives}
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-bl-md"
          src={Maldives2}
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-br-md"
          src={KeyWest}
          alt="/"
        />
      </div>
      <SearchForm />
    </div>
  );
};

export default Flights;
