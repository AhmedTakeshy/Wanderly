import Map, {
  Marker,
  Popup,
  FullscreenControl,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const MapComp = ({ location }) => {
  const [showPopup, setShowPopup] = useState(true);

  const loc = {
    address: location.address.addressLine1,
    lat: location.latitude,
    lng: location.longitude,
  };

  return (
    <div className="w-full h-screen md:h-1/4 lg:h-1/3 mb-4 flex relative">
      <Map
        initialViewState={{
          longitude: loc.lng,
          latitude: loc.lat,
          zoom: 13,
        }}
        style={{ width: "100%", height: "100%" }}
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
              className="rounded text-black"
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
      {/* <p className="text-md-center lg:w-32 md:w-28">
          {loc.address.substring(0, 50)}
        </p> */}
    </div>
  );
};

export default MapComp;
