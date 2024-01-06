import React from "react";

import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { LiaHackerrank } from "react-icons/lia";
import "./Icons.css";

const Icons = () => {
  return (
    <div className="icons">
      <a href="https://github.com/Vibudh08" target="_blank">
        <FaGithub className="git icn" />
      </a>
      <a href="https://www.linkedin.com/in/vibudh08" target="_blank">
        <FaLinkedin className="linked icn" />
      </a>
      <a href="https://www.hackerrank.com/dashboard" target="_blank">
        <LiaHackerrank className="linked icn" />
      </a>
    </div>
  );
};

export default Icons;
