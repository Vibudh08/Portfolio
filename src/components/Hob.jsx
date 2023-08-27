import React, { useEffect } from "react";
import "./Hob.css";
import hdata from "./Hobdata";
import AOS from "aos";
import "aos/dist/aos.css";

const Hob = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="hob">
      <h1 data-aos="fade-up">More About Me</h1>
      {hdata.map((hobs) => {
        return (
          <div className="hobcontent" data-aos="fade-up">
            <img src={hobs.himg} />

            <div className="hcons">
              <h2>{hobs.heading}</h2><hr/>
              <p>{hobs.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hob;
