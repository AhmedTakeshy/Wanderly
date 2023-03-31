import React from "react";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import Maldives3 from "../../assets/maldives3.jpg";
import KeyWest from "../../assets/keywest.jpg";
import Elnido from "../../assets/El Nido.jpg";
import DestinationCard from "./DestinationCard";

const Destination = () => {
  return (
    <div className=" mx-8 pb-16 pt-32 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
      <DestinationCard bg={BoraBora} text="Bora Bora" />
      <DestinationCard bg={BoraBora2} text="Maldives" />
      <DestinationCard bg={Maldives} text="Antigua" />
      <DestinationCard bg={Maldives2} text="Cozumel" />
      <DestinationCard bg={Maldives3} text="Jamaica" />
      <DestinationCard bg={KeyWest} text="Key West" />
      <DestinationCard bg={Elnido} text="El Nido" />
    </div>
  );
};

export default Destination;
