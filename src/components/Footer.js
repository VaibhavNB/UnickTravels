import React from "react";
import guideImg from "../static/menGuide1.jpg";

const Footer = () => {
  return (
    <div className="px-4 sm:px-36 py-10 bg-cyan-50">
      <div className="w-full flex flex-col sm:flex-row  justify-between ">
        <div className="flex w-1/3 flex-start flex-col">
          <ul className="flex justify-start flex-col">
            <li className="mx-3 my-2 text-start">
              <a href="#Home">Home</a>
            </li>
            <li className="mx-3 my-2 text-start">
              <a href="#Packages">Packages</a>
            </li>
            <li className="mx-3 my-2 text-start">
              <a href="#Destinations">Destinations</a>
            </li>
            <li className="mx-3 my-2 text-start">
              <a href="#Vehicles">Vehicles</a>
            </li>
            <li className="mx-3 my-2 text-start">
              <a href="#Gallery">Gallery</a>
            </li>
            <li className="mx-3 my-2 text-start">
              <a href="#Booking">Booking</a>
            </li>
          </ul>
        </div>
        <div className="guideTalk w-2/3 flex flex-col justify-center">
          <div className="guideTestimony flex m-4">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={guideImg}
              alt="Guide"
            />
            <p className="text-center self-center p-4">
              lorem23 this is the sample text where the website owner can share
              the things they want to
            </p>
          </div>
          <div className="guideTestimony flex m-4">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={guideImg}
              alt="Guide"
            />
            <p className="text-center self-center p-4">
              lorem23 this is the sample text where the website owner can share
              the things they want to
            </p>
          </div>
          <div className="guideTestimony flex m-4 align-middle">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={guideImg}
              alt="Guide"
            />
            <p className="text-center self-center p-4">
              lorem23 this is the sample text where the website owner can share
              the things they want to
            </p>
          </div>
        </div>
      </div>
      <p className="text-center">&copy;||2023 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
