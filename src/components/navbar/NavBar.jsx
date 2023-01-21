import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseFill />
            Air
          </span>
          VnV
        </h1>
        <button className="btn">Sign In</button>
        <ul className="nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="hamburger">
          <HiOutlineMenuAlt4 className="icon" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
