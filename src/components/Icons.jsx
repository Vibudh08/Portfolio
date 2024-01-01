import React from "react";
import {Link} from 'react-router-dom'

import {FaGithub, FaLinkedin, } from 'react-icons/fa'
import './Icons.css'

const Icons = () => {
  return (
    <div className="icons">
      <a href='https://github.com/Vibudh08' target = "_blank"><FaGithub className="git icn" /></a>
      <a href='https://www.linkedin.com/in/vibudh08' target = "_blank"><FaLinkedin className="linked icn" /></a>
    </div>
  );
};

export default Icons;
