import React from "react";
import PropTypes from 'prop-types';
import '../Navbar.css';

const Navbar = (props) => {

  return (
    <>
      <nav id="navbar" className="drop-shadow-md">
        <div class="nav-wrapper">
          
          <div class="logo">
            
            <a href="#home"><i class="fas fa-chess-knight"></i> UNICK-TRAVELS</a>
          </div>
      
          
          <ul className="" id="menu">
            <li><a href="#Home">Home</a></li>
            <li><a href="#Packages">Packages</a></li>
            <li><a href="#Destinations">Destinations</a></li>
            <li><a href="#Vehicles">Vehicles</a></li>
            <li><a href="#Gallery">Gallery</a></li>
          </ul>
        </div>
      </nav>

      <div class="menuIcon">
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>
      
      
      <div class="overlay-menu">
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
