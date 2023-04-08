import React from "react";

const AboutPage = () => {
  return (
    <div className="pb-16 pt-32 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Our Story
            </h2>
            <p className="mt-6 text-gray-600">
              Wanderly was born out of our love for travel and exploration. As
              avid adventurers ourselves, we wanted to create a platform that
              made it easy for others to discover and plan their own trips. Our
              goal is to help people find unique destinations and experiences
              that they may not have otherwise considered and to make the
              planning process as smooth and enjoyable as possible. We believe
              that travel has the power to broaden our horizons, create lasting
              memories, and connect us with people and cultures from around the
              world. Join us on our journey and start exploring the world with
              Wanderly.
            </p>
            <p className="mt-4 text-gray-600">
              At Wanderly, we're passionate about helping you explore the world
              and create unforgettable memories. Whether you're looking for a
              relaxing beach vacation, an adventurous hike through the
              mountains, or a cultural immersion in a new city, we've got you
              covered. Our team of experienced travel experts is dedicated to
              curating the best travel experiences, from finding the perfect
              accommodations to arranging unique activities and excursions. We
              believe that travel should be accessible to everyone, which is why
              we work hard to offer affordable options without compromising on
              quality. Join us on a journey of discovery, and let's make your
              travel dreams a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
