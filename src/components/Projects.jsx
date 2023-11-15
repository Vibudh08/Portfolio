import React, { useEffect } from "react";
import "./Projects.css";
import data from "./ProjectData";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="proj">
      <h1>My Projects</h1>
      {data.map((pdata) => {
        return (
          <div className="main" data-aos="fade-up">
            <div className="maincontent">
              <span>{pdata.subtitle}</span>
              <h2>{pdata.title}</h2>
              <p>{pdata.description}</p>
              <a href={pdata.link} target="_blank">
                <button>See Project</button>
              </a>
            </div>
            <div className="mimage">
              <img src={pdata.pimg} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
