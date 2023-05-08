import Map, {
  Marker,
  Popup,
  FullscreenControl,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const MapComp = ({ location }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const handlewindwosresize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handlewindwosresize);
    return () => {
      window.removeEventListener("resize", handlewindwosresize);
    };
  }, []);
  const isMobile = width <= 768;
  const loc = {
    address: location.address.addressLine1,
    lat: location.latitude,
    lng: location.longitude,
  };

  return (
    <div className="relative flex w-full h-screen mb-4 md:h-1/4 lg:h-1/3">
      <Map
        initialViewState={{
          longitude: loc.lng,
          latitude: loc.lat,
          zoom: 15,
        }}
        style={{ width: "100%", height: `${isMobile ? "75%" : "100%"}` }}
        mapStyle="mapbox://styles/ahmedtakeshy/clh5krhqx00pp01qy4bw138fq"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
      >
        <NavigationControl />
        <FullscreenControl position="top-left" />
        <Marker
          longitude={loc.lng}
          latitude={loc.lat}
          anchor="bottom"
          onClick={() => setShowPopup((prev) => !prev)}
        >
          {showPopup && (
            <Popup
              className="text-black rounded"
              longitude={loc.lng}
              latitude={loc.lat}
              anchor="top"
              closeButton={false}
              closeOnClick={false}
            >
              {loc.address.substring(0, 30)}
            </Popup>
          )}
          <FaMapMarkerAlt size={30} className="text-custom_purple" />
        </Marker>
      </Map>
    </div>
  );
};

export default MapComp;
