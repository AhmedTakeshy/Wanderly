import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userActions } from "../store/user-slice";

const RootLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.addLocation(location.pathname));
  }, [dispatch, location.pathname]);
  return (
    <>
      <Nav />
      <main className="select-none min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
