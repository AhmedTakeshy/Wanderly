import Destinations from "./components/Destinations";
import Booking from "./components/Booking";
import Selects from "./components/selects/Selects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import HotelsPage, { HotelsLoader } from "./pages/HotelsPage";
import HotelDetails from "./pages/HotelDetails";
import { HotelsAction } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        action: HotelsAction,
      },
      {
        path: "hotels",
        element: <HotelsPage />,
        loader: HotelsLoader,
        children: [
          {
            path: ":hotelId",
            element: <HotelDetails />,
          },
        ],
      },
      {
        path: "destination",
        element: <Destinations />,
      },
      {
        path: "travel",
        element: <Selects />,
      },
      {
        path: "book",
        element: <Booking />,
      },
      {
        path: "selects",
        element: <Selects />,
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
