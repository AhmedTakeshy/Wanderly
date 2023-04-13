import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./layouts/ErrorPage";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import HotelsPage from "./pages/HotelsPage";
import HotelDetails, { hotelDetailsLoader } from "./pages/HotelDetails";
import HotelsLayout from "./layouts/HotelLayout";
import { HotelsAction } from "./helpers";

import Flights from "./components/Flights";
import Booking from "./components/Booking";
import Carousel from "./components/Carousel";
import AboutPage from "./pages/AboutPage";

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
        element: <Flights />,
      },
      {
        path: "travel",
        element: <Carousel />,
      },
      {
        path: "book",
        element: <Booking />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
