import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const SimCarousel = ({ reviews }) => {
  const [slide, setSlide] = useState(0);
  const length = reviews?.length;
  // console.log(length);

  const prevSlide = () => {
    let newIndex = slide;
    do {
      newIndex = newIndex - 1;
      if (newIndex < 0) {
        newIndex = length - 1;
      }
    } while (reviews[newIndex].reviewTextGeneral === "");
    setSlide(newIndex);
  };
  const nextSlide = () => {
    let newIndex = slide;
    do {
      newIndex = newIndex + 1;
      if (newIndex >= length) {
        newIndex = 0;
      }
    } while (reviews[newIndex].reviewTextGeneral === "");
    setSlide(newIndex);
  };

  return (
    <div className="max-w-[1240px] mx-auto mb-4 relative flex justify-center items-center select-none">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        size={20}
        className="absolute text-3xl text-blue cursor-pointer left-2"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        size={20}
        className="absolute text-3xl text-blue cursor-pointer right-2"
      />
      <div className="bg-gray-100  rounded-t-md w-full h-[9.5rem] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out">
        {reviews.map(
          (item, index) =>
            index === slide && (
              <>
                <p
                  key={index}
                  className="p-2 w-4/5 text-center overscroll-none overflow-auto"
                >
                  {`${item.reviewTextGeneral || ""} 
                ${item.reviewTextPositive}`}
                </p>
                <p
                  key={index + 1}
                  className="bg-blue text-white w-full rounded-b-md text-center mt-auto"
                >
                  {item.firstName} - {item.overallScore} / 10.0
                </p>
              </>
            )
        )}
      </div>
    </div>
  );
};

export default SimCarousel;
