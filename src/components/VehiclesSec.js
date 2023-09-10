import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import vehicle1 from "../static/crysta.png";
import vehicle2 from "../static/eratiga.png";
import vehicle3 from "../static/etios.png";
import vehicle4 from "../static/innova.png";
import vehicle5 from "../static/mini-bus.png";
import vehicle6 from "../static/swift-dezire.png";
import vehicle7 from "../static/tt.png";

const VehiclesSec = () => {
  
  return (
    <>
      <section id="Vehicles" class=" text-gray-600 body-font px-4 sm:px-36 flex justify-center">
        <div class="container flex flex-col py-24">
          <div class="flex flex-col justify-center text-center">
            <h1 class="sm:text-3xl text-3xl font-bold title-font mb-8">
              Our Vehicles
            </h1>
          </div>
          <div className="flex justify-center align-middle ">
              <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} stopOnHover={false} swipeable={false} interval={1500} useKeyboardArrows={true} className="w-[60%] sm:w-[70%]" showArrows={false}>
                <img alt="cars" src={vehicle1} className="w-full"/>
                <img alt="cars" src={vehicle2} className="w-full"/>
                <img alt="cars" src={vehicle3} className="w-full"/>
                <img alt="cars" src={vehicle4} className="w-full"/>
                <img alt="cars" src={vehicle5} className="w-full"/>
                <img alt="cars" src={vehicle6} className="w-full"/>
                <img alt="cars" src={vehicle7} className="w-full"/>
              </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default VehiclesSec;
