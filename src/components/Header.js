import React from "react";
import headercars from "../static/cars.png"

const Header = (props) => {
  return (
    <>
      
      <div id="Home" className="header-content px-8 sm:px-36 flex flex-col justify-between py-44  
       w-full">
        
        <div>
          <h1 className="text-cyan-50 titleMove text-4xl font-extrabold sm:text-3xl md:text-7xl lg:text-8xl drop-shadow-lg">{props.title}</h1>
          <p className="text-cyan-50 text-lg sm:text-2xl md:text-4xl  lg:text-5xl pt-5 drop-shadow-lg">{props.subTitle}</p>
        </div>
        <div className="btn mt-28 flex justify-evenly">
          <button
            className=" py-1 sm:py-3 rounded-md cursor-pointer hover:bg-cyan-50 hover:text-black text-cyan-50 sm:text-sm md:text-md lg:text-lg bg-[var(--first)] bg-opacity-75 ease-in duration-300 font-bold"
            type="submit"
          >
            <a className="px-2 sm:px-16 " href="#Packages">Explore More</a>
          </button>
          <button
            className="py-1 rounded-md cursor-pointer hover:bg-cyan-50 hover:text-black text-cyan-50 sm:text-sm md:text-md lg:text-lg bg-[var(--first)] bg-opacity-75 ease-in duration-300 font-bold"
            type="submit"
          >
            <a className="px-2 sm:px-16 " href="#Booking">Book Now</a>
          </button>
        </div>
        <div className="w-full carsMove">
          <img className="w-full h-full object-cover" src={headercars} alt="cars"/>
        </div>
      </div>
    </>
  );
};

export default Header;
