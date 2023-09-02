import React, { useEffect } from "react";
import "./Hire.css";
import simage from '../assets/ImagePic1.png'
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
          You should hire me because I have the ability to perform the task,
          which is beneficial for growth of organization as well myself. You may
          have many options, and why do you have to choose me? <br/>&nbsp;&nbsp;1. I never stop
          to improve myself, never give up for hard work and try my best. <br/>&nbsp;&nbsp;2.
          I love to take responsibility and I like challenges. <br/>&nbsp;&nbsp;3. I need the
          right opportunity and you are the response.
        </p>
      </div>
      <div className="image">
        <img src={simage}/>
      </div>
    </div>
  );
};

export default Hire;
