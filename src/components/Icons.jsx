import React from "react";
import {FaInstagram, FaGithub, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import './Icons.css'

const Icons = () => {
  return (
    <div className="icons">
      <FaInstagram className="insta icn" />
      <FaGithub className="git icn" />
      <FaLinkedin className="linked icn" />
      <FaFacebookSquare className="fb icn" />
    </div>
  );
};

export default Icons;
