import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./layouts/ErrorPage";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import HotelsPage, { HotelsDataAction } from "./pages/HotelsPage";
import HotelDetails from "./pages/HotelDetails";
import HotelsLayout from "./layouts/HotelLayout";

import Flights from "./components/Flights";
import Booking from "./components/Booking";
import Carousel from "./components/Carousel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "hotels",
        element: <HotelsLayout />,
        action: HotelsDataAction,
        children: [
          {
            index: true,
            element: <HotelsPage />,
          },
          {
            path: ":hotelId",
            element: <HotelDetails />,
          },
        ],
      },
      {
        path: "/flights",
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
