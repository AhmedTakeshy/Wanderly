import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gradient-to-br from-[#c0c0aa] to-[#6ce6d9] select-none">
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h1>Wanderly</h1>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Where travel isn't just about seeing new places, it's about
              discovering a new you.
            </p>
            <div className="flex mt-6 space-x-4">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaPinterest className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">About Wanderly</p>
              <div className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link className="hover:text-white" to="about">
                  Our Story
                </Link>
                <a className="hover:text-white" href="#">
                  Our Team
                </a>
                <a className="hover:text-white" href="#">
                  Join the Community
                </a>
                <a className="hover:text-white" href="#">
                  Contact Us
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium">Travel Services</p>
              <div className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:text-white" href="#">
                  Flight Bookings
                </a>
                <a className="hover:text-white" href="#">
                  Hotel Bookings
                </a>
                <a className="hover:text-white" href="#">
                  Tour Packages
                </a>
                <a className="hover:text-white" href="#">
                  Car Rentals
                </a>
                <a className="hover:text-white" href="#">
                  Travel Insurance
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium">Helpful Resources</p>
              <div className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:text-white" href="#">
                  Travel Tips
                </a>
                <a className="hover:text-white" href="#">
                  Destination Guides
                </a>
                <a className="hover:text-white" href="#">
                  Reviews &amp; Recommendations
                </a>
                <a className="hover:text-white" href="#">
                  FAQ
                </a>
                <a className="hover:text-white" href="#">
                  Blog
                </a>
              </div>
            </div>
            <div>
              <p className="font-medium">Legal &amp; Policies</p>
              <div className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:text-white" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-white" href="#">
                  Terms &amp; Conditions
                </a>
                <a className="hover:text-white" href="#">
                  Refund Policy
                </a>
                <a className="hover:text-white" href="#">
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-gray-800">Copyright © 2022 Wanderly</p>
      </div>
    </footer>
    // <div className="w-full bg-gray-100 py-16">
    //   <div className="max-w-[1240px] mx-auto flex flex-col px-4">
    //     <div className="sm:flex text-center justify-between items-center">
    //       <h1>Wanderly</h1>
    //       <div className="flex justify-between w-full sm:max-w-[280px] my-4">
    //         <FaFacebook className="icon" />
    //         <FaTwitter className="icon" />
    //         <FaYoutube className="icon" />
    //         <FaPinterest className="icon" />
    //         <FaInstagram className="icon" />
    //       </div>
    //     </div>
    //     <div className="flex justify-between">
    //       <ul className="lg:flex">
    //         <li>About</li>
    //         <li>Partnerships</li>
    //         <li>Careers</li>
    //         <li>Newsroom</li>
    //         <li>Advertising</li>
    //       </ul>
    //       <ul className="text-right lg:flex">
    //         <li>Home</li>
    //         <li>Destinations</li>
    //         <li>Travel</li>
    //         <li>View</li>
    //         <li>Book</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
