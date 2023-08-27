import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [hum,setHum]=useState(true);
  const changebtn=()=>{
    setHum(!hum)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <h3><span>V</span>IBUDH</h3>
      </div>
      <div className="links">
        <div className="bigscrn">
        <Link to={'/'}>Home</Link>
        <Link to={'/project'}>Projects</Link>
        <Link to={'/about'}>About me</Link>
        <Link to={'/contact'}>Contact me</Link>
        </div>
        <div className="hicon" onClick={changebtn}>
          {hum?<GiHamburgerMenu/>:<AiOutlineClose/>}     
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
