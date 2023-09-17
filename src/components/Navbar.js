import React from "react";
import PropTypes from 'prop-types';
import '../Navbar.css';

const Navbar = (props) => {

  return (
    <>
      <nav id="navbar" className="drop-shadow-md">
        <div className="nav-wrapper">
          
          <div className="font-bold logo">
            
            <a className="hover:text-[var(--second)]" href="#home">UNICK-TRAVELS</a>
          </div>
      
          
          <ul className="" id="menu">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Packages">Packages</a></li>
            <li><a href="#Destinations">Destinations</a></li>
            <li><a href="#Vehicles">Vehicles</a></li>
            <li><a href="#Gallery">Gallery</a></li>
            <li><a href="#Booking">Booking</a></li>
          </ul>
        </div>
      </nav>

      <div className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>
      
      
      <div className="overlay-menu">
        <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
      
    </>
  );
};

Navbar.propTypes =  { title: PropTypes.string};

Navbar.defaultProps = {title: "Title Here"};

export default Navbar;
