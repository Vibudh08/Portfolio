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
          I am a Frontend Developer with 1+ year of experience in building
          responsive and scalable web applications using React.js, Next.js,
          Redux, Tailwind CSS, and JavaScript (ES6+). I also have experience in
          API integration, authentication, and MongoDB database management. With
          my MCA background, I focus on delivering clean, maintainable code and
          impactful digital solutions.
        </p>
      </div>
      <div className="image">
        <img src={simage} />
      </div>
    </div>
  );
};

export default Hire;
