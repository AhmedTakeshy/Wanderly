import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userActions } from "../store/user-slice";
import Contact from "../components/ContactForm";
import ScrollToTop from "../components/ScrollToTop";

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
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
