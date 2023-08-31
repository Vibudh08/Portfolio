import './Hero.css'
import React, { useEffect } from 'react'
import vib from "../assets/vib.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import Icons from './Icons';


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='hero'>
        <div className='himage'>
            <img src={vib}/>
        </div>
        <div className='content'>
            <p>Hello, <span>I'm </span></p>
            <h2><span>VIBUDH RATHORE</span></h2>
            <p>Full Stack developer</p>

            <div className='btns'>
            <a href="Resume.Vib.pdf" download><button className='btn1'>Resume</button></a>
                <Link to={'/contact'}><button className='btn2'>Let's Talk</button></Link>
            </div>
            <Icons/>
        </div>
    </div>
  )
}

export default Hero