import DestinationCard from "./DestinationCard";
import Title from "../Title";

import cairo from "../../assets/cairo.jpg";
import cappadocia from "../../assets/Cappadocia.jpg";
import rome from "../../assets/rome.jpg";
import paris from "../../assets/paris.jpg";
import spain from "../../assets/spain.jpg";
import canada from "../../assets/canada.jpg";
import dubai from "../../assets/dubai.jpg";
import pakistan from "../../assets/pakistan.jpg";
import sriLanka from "../../assets/sri-lanka.jpg";

const Destination = () => {
  return (
    <>
      <Title title="Popular Destinations" />
      <div className="mx-16 pb-32 pt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <DestinationCard
          bg={cairo}
          title="Luxor"
          detail="The Theban Necropolis"
        />
        <DestinationCard
          bg={cappadocia}
          title="Cappadocia"
          detail="Hot air balloon"
        />
        <DestinationCard bg={rome} title="Rome" detail="Lazio" />
        <DestinationCard bg={paris} title="Paris" detail="Eiffel Tower" />
        <DestinationCard
          bg={spain}
          title="Seville"
          detail="Alcázar of Seville"
        />
        <DestinationCard
          bg={canada}
          title="Alberta"
          detail="Banff National Park"
        />
        <DestinationCard
          bg={dubai}
          title="Dubai"
          detail="Museum of the Future"
        />
        <DestinationCard
          bg={pakistan}
          title="Punjab"
          detail="Bahawalpur District"
        />
        <DestinationCard
          bg={sriLanka}
          title="Sri Lanka"
          detail="Arugam Bay Beach"
        />
      </div>
    </>
  );
};

export default Destination;
