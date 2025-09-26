import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Ham from "../assets/hamburger.png";
import X from "../assets/close.png";

export default function NavBar() {
  const [isMobile, setiSMobile] = useState(false);

  return (
    <header className="navbar">
      <div className="containerNav">
        <div className="logoName">
          <NavLink to="/" onClick={() => setiSMobile(false)}>
            <h3>
              <span>V</span>IBUDH
            </h3>
          </NavLink>
        </div>

        <ul className={isMobile ? "navul navul-mobile" : "navul"}>
          <li className="navli">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setiSMobile(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setiSMobile(false)}
            >
              About
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setiSMobile(false)}
            >
              Experience
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setiSMobile(false)}
            >
              Project
            </NavLink>
          </li>
          <li className="navli">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setiSMobile(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button className="trigger" onClick={() => setiSMobile(!isMobile)}>
          {isMobile ? <img src={X} alt="" /> : <img src={Ham} alt="" />}
        </button>
      </div>
    </header>
  );
}
