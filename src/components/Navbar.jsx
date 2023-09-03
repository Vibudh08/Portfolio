import React,{useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Ham from '../assets/hamburger.png'
import X from '../assets/close.png'



export default function NavBar() {

    const [isMobile,setiSMobile] =useState(false)
    return (

        <header className='navbar'>
        <div className='containerNav'>
            <div className='logoName'>
                <Link to="/"><h3><span>V</span>IBUDH</h3></Link>
            </div>
            <ul className={isMobile ? 'navul navul-mobile' : 'navul'}
                >
                <li className='navli' onClick={()=>{setiSMobile(false)}}>
                    <Link to="/" >
                        Home
                    </Link>
                </li>
                <li className='navli' onClick={()=>{setiSMobile(false)}}>
                    <Link to="/about" >
                        About
                    </Link>
                </li>
                <li className='navli' onClick={()=>{setiSMobile(false)}}>
                    <Link to="/project">
                        Project
                    </Link>
                </li>
                <li className='navli' onClick={()=>{setiSMobile(false)}}>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            
            <button className='trigger' onClick={()=>setiSMobile(!isMobile)}>
                {isMobile ? <img src={X} alt="" /> : <img src={Ham}/>}
            </button>
        </div>
    </header>
  )
}
