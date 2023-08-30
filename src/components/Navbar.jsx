import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [hum,setHum]=useState(true);

  return (
    <nav className="navbar">
      <div className="logo">
        <h3><span>V</span>IBUDH</h3>
      </div>
      <div className="links">
        <ul className={hum ? 'navul' :'navul navul-mobile' }>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About me</Link></li>
          <li><Link to={'/project'}>Projects</Link></li>
          <li><Link to={'/contact'}>Contact me</Link></li>
        </ul>
      </div>
      <div className="hicon" onClick={()=>setHum(!hum)}>
          {hum? <AiOutlineClose/> :<GiHamburgerMenu/>}     
      </div>
    </nav>
  );
};

export default Navbar;
