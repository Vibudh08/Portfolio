import React, { useEffect } from 'react'
import './About.css'
import Skill from './Skill'
import about from '../assets/vibudh2.png'
import Hob from './Hob'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'
import Icons from './Icons'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className='about'>

        <div className='intro' data-aos="fade-down">
            <h3>Hello I'm </h3>
            <span>VIBUDH RATHORE</span>
            <p>Web Developer</p>
            <Icons/>
            <div className='btn'>
                <button className='btns1'>Download Resume</button>
               <Link to={'/contact'}> <button>Hire Me</button></Link>
            </div>
            <div className='aimg' >
            <img src={about} alt='My image' data-aos="fade-up"/>
            </div>
        </div>


        <div className='education' data-aos="fade-up">
            <h1>EDUCATION</h1>
            <div className='degrees'>
                <ul>
                    <li><p>Master of Computer Application</p></li>
                </ul>
                <span>Galgotias University, Greater Noida</span>

                <ul>
                    <li><p>Bachelor of Science</p></li>
                </ul>
                <span>CSJMU, Kanpur</span>

                <ul>
                    <li><p>Intermediate</p></li>
                </ul>
                <span>Rosy Public School, Farrukhabad</span>

                <ul>
                    <li><p>Matriculation</p></li>
                </ul>
                <span>Rosy Public School, Farrukhabad</span>
            </div>

            
        </div>
        <Skill/>
        <Hob/>
    </div>
  )
}

export default About