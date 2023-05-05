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
        className="absolute text-3xl cursor-pointer text-custom_purple left-2"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        size={20}
        className="absolute text-3xl cursor-pointer text-custom_purple right-2"
      />
      <div className="bg-gray-100  rounded-t-md w-full h-[9.5rem] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out">
        {reviews
          ? reviews.map(
              (item, index) =>
                index === slide && (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between flex-1 w-full"
                  >
                    <p className="w-4/5 h-20 p-2 overflow-auto text-center overscroll-none">
                      {`${
                        item.reviewTextGeneral
                          ? item.reviewTextGeneral
                          : "It was nice"
                      }
                ${item.reviewTextPositive}`}
                    </p>
                    <p className="w-full mt-auto text-center text-white bg-custom_purple rounded-b-md">
                      {item.firstName} - {item.overallScore} / 10.0
                    </p>
                  </div>
                )
            )
          : "No reviews yet"}
      </div>
    </div>
  );
};

export default SimCarousel;
