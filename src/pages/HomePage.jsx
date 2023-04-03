import React from "react";
import Banner from "../components/Banner";
import Destination from "../components/destination/Destination";
// import { useState } from "react";
// import bannerVid from "../assets/beachVid.mp4";
// import { AiOutlineSearch } from "react-icons/ai";
// import { GoLocation } from "react-icons/go";
// import { SlCalender } from "react-icons/sl";
// import { BsPeople } from "react-icons/bs";
// import { useRef } from "react";
// import DateRangeComp from "../components/DataRange";
// import { useDispatch } from "react-redux";
// import { searchActions } from "../store/search-slice";
// import { Form, redirect, useActionData, useNavigate } from "react-router-dom";

const HomePage = () => {
  // const cityInput = useRef();
  // const adultsInput = useRef();
  // const [dateInput, setDateInput] = useState({});
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const actionData = useActionData();
  // console.log(actionData);

  // const dateTransfered = (data) => {
  //   setDateInput(data);
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const city = cityInput.current.value;
  //   const adults = adultsInput.current.value;
  //   const startDate = dateInput.startDate.toISOString().slice(0, 10);
  //   const endDate = dateInput.endDate.toISOString().slice(0, 10);
  //   const date = { startDate, endDate };
  //   console.log(date, city, adults);
  //   dispatch(searchActions.getData({ city, date, adults }));
  //   navigate("/hotels");
  // };

  // return (
  //   <div className=" w-full h-screen relative">
  //     <video
  //       className="w-full h-full object-cover"
  //       autoPlay
  //       muted
  //       loop
  //       src={bannerVid}
  //     />
  //     <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
  //       <h1>First Class Travel</h1>
  //       <h2 className="py-4">Top 1% Locations Worldwide</h2>
  //       <Form
  //         method="post"
  //         action="/"
  //         // onSubmit={submitHandler}
  //         className="flex justify-between items-center flex-col md:flex-row max-w-[700px] mx-auto w-full border p-1
  //         rounded-lg text-black bg-gray-100/90"
  //       >
  //         <div className="flex flex-col justify-between w-full md:w-auto px-4 md:px-0 md:gap-4  md:flex-row">
  //           <div className="flex justify-start gap-2 items-center">
  //             <GoLocation size={18} className="icon" />
  //             <input
  //               className="bg-transparent focus:outline-none p-2 font-semibold"
  //               type="text"
  //               name="city"
  //               ref={cityInput}
  //               placeholder="Where to go"
  //               defaultValue={cityInput.current?.value}
  //               required
  //             />
  //           </div>
  //           <div className="flex justify-start gap-2 items-center">
  //             <SlCalender size={18} className="icon" />
  //             <DateRangeComp onTransfer={dateTransfered} />
  //           </div>
  //           <div className="flex justify-start gap-2  items-center">
  //             <BsPeople size={18} className="icon" />
  //             <input
  //               className="bg-transparent focus:outline-none p-2 w-[130px] font-semibold" //w-[300px] sm:w-[400px]
  //               type="number"
  //               name="adults"
  //               ref={adultsInput}
  //               placeholder="Adults"
  //               defaultValue={adultsInput.current?.value}
  //               required
  //             />
  //           </div>
  //         </div>
  //         <div className=" md:w-auto w-full">
  //           <button className="md:m-1 w-full md:w-auto" type="submit">
  //             <span className=" md:hidden inline font-bold tracking-widest">
  //               Search
  //             </span>
  //             <AiOutlineSearch
  //               size={20}
  //               className="icon hidden md:inline"
  //               style={{ color: "#ffffff" }}
  //             />
  //           </button>
  //         </div>
  //       </Form>
  //     </div>
  //   </div>
  // );
  return (
    <>
      <Banner />
      <main>
        <Destination />
      </main>
    </>
  );
};

export default HomePage;
