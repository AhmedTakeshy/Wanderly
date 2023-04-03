import { Outlet } from "react-router-dom";

const HotelLayout = () => {
  return (
    <>
      <main className="pt-28">
        <Outlet />
      </main>
    </>
  );
};

export default HotelLayout;
