import React, { useEffect } from "react";
import "./Skill.css";
import Sdata from "./SkillData";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container" data-aos="fade-up">
      <h1>Skills</h1>
      <div className="mainskills">
        {Sdata.map((skill) => {
          return (
            <div className="skills" data-aos="fade-up">
              <img src={skill.img} />
              <div>
                <h2>{skill.heading}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
