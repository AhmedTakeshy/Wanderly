import DestinationCard from "./DestinationCard";
import Title from "../UI/Title";

import cairo from "../../assets/cairo.jpg";
import cappadocia from "../../assets/Cappadocia.jpg";
import rome from "../../assets/rome.jpg";
import paris from "../../assets/paris.jpg";
import spain from "../../assets/spain.jpg";
import canada from "../../assets/canada.jpg";
import dubai from "../../assets/dubai.jpg";
import pakistan from "../../assets/pakistan.jpg";
import sriLanka from "../../assets/sri-lanka.jpg";

const destinationData = [
  {
    bg: cairo,
    title: "Luxor",
    detail: "The Theban Necropolis",
  },
  {
    bg: cappadocia,
    title: "Cappadocia",
    detail: "Hot air balloon",
  },
  {
    bg: rome,
    title: "Rome",
    detail: "Lazio",
  },
  {
    bg: paris,
    title: "Paris",
    detail: "Eiffel Tower",
  },
  {
    bg: spain,
    title: "Seville",
    detail: "Alcázar of Seville",
  },
  {
    bg: canada,
    title: "Alberta",
    detail: "Banff National Park",
  },
  {
    bg: dubai,
    title: "Dubai",
    detail: "Museum of the Future",
  },
  {
    bg: pakistan,
    title: "Punjab",
    detail: "Bahawalpur District",
  },
  {
    bg: sriLanka,
    title: "Sri Lanka",
    detail: "Arugam Bay Beach",
  },
];

const Destination = () => {
  return (
    <>
      <Title title="Popular Destinations" />
      <div className="mx-16 pb-32 pt-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {destinationData.map((destination, index) => (
          <DestinationCard
            key={index}
            id={index}
            bg={destination.bg}
            title={destination.title}
            detail={destination.detail}
          />
        ))}
      </div>
    </>
  );
};

export default Destination;
