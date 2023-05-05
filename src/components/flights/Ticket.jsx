import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useLocation } from "react-router-dom";

const Ticket = () => {
  const { state } = useLocation();
  const { firstSegment, secondSegment } = state;
  const { isAuthenticated, user } = useAuth0();
  const weekdayFromDate = (date) => {
    const weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    const dateObj = new Date(date);
    const weekdayIndex = dateObj.getDay();
    const weekday = weekdays[weekdayIndex];
    return weekday;
  };
  const depDay = weekdayFromDate(
    firstSegment.departInfo.time.dateTime.split("T")[0]
  );
  const arrDay = weekdayFromDate(
    firstSegment.arrivalInfo.time.dateTime.split("T")[0]
  );
  const extractTime = (dateTime) => dateTime.split("T")[1].slice(0, 5);
  const depTime = extractTime(firstSegment.departInfo.time.dateTime);
  const arrTime = extractTime(firstSegment.arrivalInfo.time.dateTime);

  const subtractMinutesFromTime = (time, minutesToSubtract) => {
    const [hours, minutes] = time.split(":").map(Number);
    let totalMinutes = hours * 60 + minutes - minutesToSubtract;
    const newHours = Math.floor(totalMinutes / 60) % 24;
    const newMinutes = totalMinutes % 60;
    return `${newHours.toString().padStart(2, "0")}:${newMinutes
      .toString()
      .padStart(2, "0")}`;
  };
  const boardingTime = subtractMinutesFromTime(depTime, 40);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80)",
      }}
    >
      <div className="absolute inset-0 z-0 bg-blue-900 top-28 opacity-80"></div>
      <div className="z-10 w-full h-full max-w-md mx-auto bg-blue-900 rounded-3xl">
        <div className="flex flex-col">
          <div className="relative p-4 m-4 bg-white drop-shadow-2xl rounded-3xl">
            <div className="flex-none sm:flex">
              <div className="relative hidden w-32 h-32 mb-3 sm:mb-0">
                <img
                  src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                  alt="aji"
                  className="object-cover w-32 h-32 rounded-2xl"
                />
                <a
                  href="#"
                  className="absolute p-1 -ml-3 text-xs font-medium tracking-wider text-white transition duration-300 ease-in bg-green-400 rounded-full -right-2 bottom-2 hover:bg-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <span className="w-8 h-8 mr-3 bg-white rounded-full">
                      <img
                        src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
                        className="h-8 p-1"
                      />
                    </span>
                    <h2 className="font-medium">
                      {firstSegment.departInfo.airport.name}
                    </h2>
                  </div>
                  <div className="ml-auto text-blue-800">
                    {firstSegment.equipmentName.split(" ")[1].slice(0, 4)}
                  </div>
                </div>
                <div className="my-5 border-b-2 border-dashed "></div>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex-auto my-1 text-xs text-gray-400">
                      <span className="mr-1 ">{depDay}</span>
                      <span>{depTime}</span>
                    </div>
                    <div className="flex-none w-full text-lg font-bold leading-none text-blue-800">
                      {firstSegment.departInfo.airport.code}
                    </div>
                    <div className="text-xs">
                      {firstSegment.departInfo.airport.name.split(" ")[0]}
                    </div>
                  </div>
                  <div className="flex flex-col mx-auto">
                    <img
                      src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1"
                      className="w-20 p-1"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex-auto my-1 text-xs text-gray-400">
                      <span className="mr-1">{arrDay}</span>
                      <span>{arrTime}</span>
                    </div>
                    <div className="flex-none w-full text-lg font-bold leading-none text-blue-800">
                      {firstSegment.arrivalInfo.airport.code}
                    </div>
                    <div className="text-xs">
                      {firstSegment.arrivalInfo.airport.name.split(" ")[0]}
                    </div>
                  </div>
                </div>
                <div className="pt-5 my-5 border-b-2 border-dashed ">
                  <div className="absolute w-5 h-5 -mt-2 bg-blue-900 rounded-full -left-2"></div>
                  <div className="absolute w-5 h-5 -mt-2 bg-blue-900 rounded-full -right-2"></div>
                </div>
                <div className="flex items-center p-5 mb-5 text-sm">
                  <div className="flex flex-col">
                    <span className="text-sm">Flight</span>
                    <div className="font-semibold">
                      {firstSegment.equipmentName}
                    </div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <span className="text-sm">Gate</span>
                    <div className="font-semibold">B3</div>
                  </div>
                </div>
                <div className="flex items-center px-5 mb-4">
                  <div className="flex flex-col text-sm">
                    <span className="">Board</span>
                    <div className="font-semibold">{boardingTime}</div>
                  </div>
                  <div className="flex flex-col mx-auto text-sm">
                    <span className="">Departs</span>
                    <div className="font-semibold">{depTime}</div>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="">Arrived</span>
                    <div className="font-semibold">{arrTime}</div>
                  </div>
                </div>
                <div className="pt-5 my-5 border-b-2 border-dashed">
                  <div className="absolute w-5 h-5 -mt-2 bg-blue-900 rounded-full -left-2"></div>
                  <div className="absolute w-5 h-5 -mt-2 bg-blue-900 rounded-full -right-2"></div>
                </div>
                <div className="flex items-center px-5 pt-3 text-sm">
                  <div className="flex flex-col">
                    <span className="">Passenger</span>
                    {isAuthenticated ? (
                      <div className="font-semibold">{user.name}</div>
                    ) : (
                      <div className="font-semibold">Please login</div>
                    )}
                  </div>
                  <div className="flex flex-col mx-auto">
                    <span className="">Cabin class</span>
                    <div className="font-semibold">
                      {firstSegment.cabinClass}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="">Seat</span>
                    <div className="font-semibold">12 E</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-5 text-sm ">
                  <h6 className="font-bold text-center">Boarding Pass</h6>
                  <div
                    className={`h-14 w-0 inline-block mt-4 relative left-2/4 translate-x-[-90px] shadow-[1px 0 0 1px, 5px 0 0 1px, 10px 0 0 1px, 11px 0 0 1px, 15px 0 0 1px, 18px 0 0 1px, 22px 0 0 1px, 23px 0 0 1px, 
                        26px 0 0 1px, 30px 0 0 1px, 35px 0 0 1px, 37px 0 0 1px, 41px 0 0 1px, 44px 0 0 1px, 47px 0 0 1px, 51px 0 0 1px, 56px 0 0 1px, 59px 0 0 1px, 64px 0 0 1px, 68px 0 0 1px, 72px 0 0 1px, 74px 0 0 1px, 
                        77px 0 0 1px, 81px 0 0 1px, 85px 0 0 1px, 88px 0 0 1px, 92px 0 0 1px, 95px 0 0 1px, 96px 0 0 1px, 97px 0 0 1px,
                         101px 0 0 1px, 105px 0 0 1px, 109px 0 0 1px, 110px 0 0 1px, 113px 0 0 1px, 116px 0 0 1px, 120px 0 0 1px, 123px 0 0 1px, 127px 0 0 1px, 130px 0 0 1px, 131px 0 0 1px, 134px 0 0 1px, 135px 0 0 1px, 138px 0 0 1px, 141px 0 0 1px, 144px 0 0 1px,
                         147px 0 0 1px, 148px 0 0 1px, 151px 0 0 1px, 155px 0 0 1px, 158px 0 0 1px, 162px 0 0 1px, 165px 0 0 1px, 168px 0 0 1px, 173px 0 0 1px, 176px 0 0 1px, 177px 0 0 1px, 180px 0 0 1px]`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
