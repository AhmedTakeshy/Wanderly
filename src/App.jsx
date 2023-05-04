import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./layouts/ErrorPage";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import HotelsPage from "./pages/HotelsPage";
import HotelDetails, { hotelDetailsLoader } from "./pages/HotelDetails";
import HotelsLayout from "./layouts/HotelLayout";
import { flightsAction, HotelsAction } from "./helpers";
import PropagateLoader from "react-spinners/PropagateLoader";

import CarPage from "./pages/CarPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/user/ProfilePage";
import FlightPage from "./pages/FlightPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/hotels",
        element: <HotelsLayout />,
        action: HotelsAction,
        children: [
          {
            index: true,
            element: <HotelsPage />,
          },
          {
            path: ":id",
            element: <HotelDetails />,
            loader: hotelDetailsLoader,
          },
        ],
      },
      {
        path: "flights",
        element: <FlightPage />,
        action: flightsAction,
      },
      {
        path: "car",
        element: <CarPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <PropagateLoader
          className="flex justify-center items-center"
          color="#36d7b7"
          cssOverride={{
            margin: "1rem auto",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        />
      }
    />
  );
}

export default App;
