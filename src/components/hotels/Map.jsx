import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";

const Map = ({ location }) => {
  const loc = {
    address: location.address.addressLine1,
    center: {
      lat: location.latitude,
      lng: location.longitude,
    },
  };
  return (
    <div className="w-full h-screen md:h-1/4 lg:h-1/3 mb-4 flex">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAP_KEY }}
        defaultCenter={loc.center}
        defaultZoom={17}
      >
        <div className="flex items-center justify-start">
          <Icon icon="mdi:map-marker" className=" text-cyan-700 text-6xl" />
          <p className="text-md-center lg:w-32 md:w-28">
            {loc.address.substring(0, 50)}
          </p>
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default Map;
