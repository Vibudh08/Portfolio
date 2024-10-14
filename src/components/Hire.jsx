import React, { useEffect } from "react";
import "./Hire.css";
import simage from '../assets/why.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Hire = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="hire">
      <div className="hcontent">
        <h2>Why Me?</h2>
        <p>
          As a passionate web developer, I have knowledge in ReactJs, Javascript,
          jQuery and MySQL technologies with industry working experience.
          I have keen interest in building clean and modern web appliactions.
          my academic background in MCA has equipped me with the necessary skills
          in software development, database management, and problem-solving.
        </p>
      </div>
      <div className="image">
        <img src={simage} />
      </div>
    </div>
  );
};

export default Hire;
