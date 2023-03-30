import { Outlet } from "react-router-dom";

const HotelRoot = () => {
  return (
    <>
      <main className="pt-28">
        <Outlet />
      </main>
    </>
  );
};

export default HotelRoot;
