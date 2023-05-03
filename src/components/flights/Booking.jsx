import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useForm } from "react-hook-form";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-between">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4 ">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at Wanderly Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, Wanderly is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center rounded">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full focus:outline-none"
        >
          <div className="flex flex-col my-4 relative">
            <label htmlFor="trip">Trip-type</label>
            <select
              id="trip"
              className="border rounded-md p-2"
              {...register("trip", { required: true })}
            >
              <option value="round">Round-trip</option>
              <option value="oneWay">One-Way</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <div className="flex justify-between items-center gap-4 relative">
              <input
                placeholder="From?"
                type="text"
                name="CityFrom"
                {...register("CityFrom", { required: true })}
                className="border rounded-md p-2 w-2/4"
              />
              <MdFlightTakeoff className="text-black absolute left-[8rem] md:left-[9.5rem] top-[50%]  translate-y-[-50%]" />
              <input
                placeholder="To?"
                type="text"
                name="CityTo"
                {...register("CityTo", { required: true })}
                className="border rounded-md p-2 w-2/4"
              />
              <MdFlightLand className="text-black absolute right-2 top-[50%] translate-y-[-50%]" />
            </div>
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="departure">Departure</label>
            <input
              id="departure"
              name="departure_date"
              className="border rounded-md p-2"
              type="date"
              {...register("departure_date", { required: true })}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="return">Return</label>
            <input
              id="return"
              name="return_date"
              className="border rounded-md p-2"
              type="date"
              {...register("return_date", { required: true })}
            />
          </div>
          <button className="w-full my-4">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
