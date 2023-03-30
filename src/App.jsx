import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import HotelsPage from "./pages/HotelsPage";
import HotelDetails from "./pages/HotelDetails";
import HotelRoot from "./pages/HotelRoot";

import Flights from "./components/Flights";
import Booking from "./components/Booking";
import Carousel from "./components/Carousel";

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
        path: "hotels",
        element: <HotelRoot />,
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
  return (
    // <div>
    //   <Nav />
    //   <Banner />
    //   <Destinations />
    //   <Booking />
    //   <Selects />
    //   <Carousel />
    //   <Footer />
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
