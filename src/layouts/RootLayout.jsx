import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/UI/Nav";
import Footer from "../components/UI/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userActions } from "../store/user-slice";
import Contact from "../components/UI/ContactForm";
import ScrollToTop from "../components/UI/ScrollToTop";

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
