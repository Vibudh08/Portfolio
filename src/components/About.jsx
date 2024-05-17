import React, { useEffect } from "react";
import "./About.css";
import Skill from "./Skill";
import Hob from "./Hob";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import Resume from "../assets/Vibudh.Resume.pdf";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 10000 });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="about">
      <div className="intro" data-aos="fade-down">
        <h3>Hello I'm </h3>
        <span>VIBUDH RATHORE</span>
        <p>Web Developer</p>
        <Icons />
        <div className="btn">
          <a href={Resume} download>
            <button className="btns1">Resume</button>
          </a>
          <Link to={"/contact"}>
            {" "}
            <button>Hire Me</button>
          </Link>
        </div>
      </div>

      <div className="education" data-aos="fade-up">
        <h1>EDUCATION</h1>
        <div className="degrees">
          <ul>
            <li>
              <p>Master of Computer Application</p>
            </li>
          </ul>
          <span>Galgotias University, Greater Noida</span>

          <ul>
            <li>
              <p>Bachelor of Science</p>
            </li>
          </ul>
          <span>CSJMU, Kanpur</span>

          <ul>
            <li>
              <p>Intermediate</p>
            </li>
          </ul>
          <span>Rosy Public School, Farrukhabad</span>

          <ul>
            <li>
              <p>Matriculation</p>
            </li>
          </ul>
          <span>Rosy Public School, Farrukhabad</span>
        </div>
      </div>

      <div className="education" data-aos="fade-up">
        <h1>CERTIFICATES</h1>
        <div className="degrees">
          <ul>
            <li>
              <p>IBM - Web Development Fundamentals</p>
              <br />
            </li>
          </ul>

          <ul>
            <li>
              <p>Udemy - Improving Software Dev Productivity</p>
              <br />
            </li>
          </ul>

          <ul>
            <li>
              <p>Hackerrank - Python basic certificate</p>
              <br />
            </li>
          </ul>

          <ul>
            <li>
              <p>Udemy - JavaScript Practicals crash course</p>
              <br />
            </li>
          </ul>
        </div>
      </div>
      <Skill />
      <Hob />
    </div>
  );
};

export default About;
