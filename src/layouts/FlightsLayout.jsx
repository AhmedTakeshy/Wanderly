import { Outlet } from "react-router-dom";
const FlightsLayout = () => {
  return (
    <>
      <main className="pt-28">
        <Outlet />
      </main>
    </>
  );
};

export default FlightsLayout;
