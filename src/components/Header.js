import React from "react";
import headercars from "../static/header-cars.png"

const Header = (props) => {
  return (
    <>
      
      <div id="Home" className="header-content px-8 sm:px-36 flex flex-col justify-between py-44  
       w-full">
        
        <div>
          <h1 className="text-cyan-50 text-4xl sm:text-3xl md:text-7xl lg:text-8xl drop-shadow-lg">{props.title}</h1>
          <p className="text-cyan-50 text-lg sm:text-2xl md:text-4xl  lg:text-5xl pt-5 drop-shadow-xl">{props.subTitle}</p>
        </div>
        <div className="btn my-10 flex justify-center">
          <button
            className="px-8 sm:px-16 py-3 rounded-md cursor-pointer hover:bg-cyan-50 hover:text-black text-cyan-50 sm:text-md md:text-lg lg:text-xl bg-[var(--first)] bg-opacity-75 ease-in duration-300 font-bold"
            type="submit"
          >
            <a href="/">Explore More</a>
          </button>
        </div>
        <div className="w-full">
          <img className="w-full h-full object-cover" src={headercars} alt="cars"/>
        </div>
      </div>
    </>
  );
};

export default Header;
