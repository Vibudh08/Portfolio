import React from "react";
import "./Experience.css";
import btj from "../assets/btj_alpha_technology_pvt_ltd_logo.jpg";
import hrb from "../assets/hrbotics_logo.jpg";

export default function Experience() {
  const experiences = [
    {
      company: "BTJ Alpha Technology",
      role: "Frontend Developer",
      duration: "Jul 2024 – Oct 2025",
      type: "Full-time",
      time: "1 yr 4 mos",
      img: btj,
      description:
        "Built and maintained responsive web applications using React.js and Tailwind CSS. Developed Admirer.in (e-commerce platform) with product catalog, cart, checkout, payments, and shipping integration. Contributed to company website and real estate platform (property listings, dashboards, authentication).",
      tech: ["React", "JavaScript", "Tailwind CSS", "Rest API", "CSS", "Git"],
    },
    {
      company: "HrBotics",
      role: "Web Developer Intern",
      duration: "Jul 2023 – Sep 2023",
      type: "Internship",
      time: "3 mos",
      img: hrb,
      description:
        "Assisted in building internal dashboards, optimized UI, and worked with backend APIs. Created a react website DGital during internship.",
      tech: ["React.js", "HTML", "CSS"],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">My Experience</h2>

      <div className="experience-container">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-card">
            <img src={exp.img} alt=""  className="image"/>
            <div>
              <h3 className="role">
                {exp.role}
                <div className="company">
                  {exp.company} . {exp.type}
                </div>
              </h3>
              <p className="duration">{exp.duration}  .  {exp.time}</p>
              <p className="desc">{exp.description}</p>
              <div className="tech-stack">
                {exp.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
