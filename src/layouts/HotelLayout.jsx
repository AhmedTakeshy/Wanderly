import { Outlet } from "react-router-dom";
const HotelsLayout = () => {
  return (
    <>
      <main className="pt-28">
        <Outlet />
      </main>
    </>
  );
};

export default HotelsLayout;
