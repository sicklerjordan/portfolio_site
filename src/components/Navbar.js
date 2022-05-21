import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa'
import { CgShapeHexagon } from 'react-icons/cg';
import gsap from 'gsap'
import image1 from './images/image.png'
import { AiOutlinePlus } from 'react-icons/ai'

function Navbar() {
    const [togg, setTogg] = useState(true)

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(click === false ? true : false)
    }

    gsap.fromTo('.head-icon', { duration: 1, opacity: 1, rotation: 0}, {duration: 60, delay: 1, opacity: 1, scale: 1, rotate: 2000})
    
   

  return (
    <div>
        <div className='container'>
            <div className='colone'>
            <CgShapeHexagon className='head-icon' />
                <p>Jordans <span>Portfolio</span></p>
            </div>
            {/*<
            <div className='coltwo'>
               <a href='#about'><p>About</p></a>
            </div>
            <div className='colthree'>
                <a href='#work'><p>Work</p></a>
            </div>
            <div className='colfour'>
                <a href='#contact'><p>Contact</p></a>
  </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='#about'>About </a>
                </li>
                <li>
                    <a href='#work'>Work </a>
                </li>
                <li>
                    <a href='#contact'>Contact </a>
                </li>
            </ul>
            */}
            <div className='sideBar-container'>
                <img className="profile-pic" src={image1} />
                <p className='current-job'>Currently working at Trinity Insight as a UX Engineer</p>
                <div className='sideContainer'>
                <p className='email' onClick={() => {
                    setTogg()
                }}>SICKLERJORDAN@GMAIL.COM</p>
                {togg ? <p className='email' id="drop">githubs</p> :
                <p className='email' id="drop">githubs</p>}
                <p className='email'>https://github.com/sicklerjordan</p>
                </div>
            </div>
            {/*<div className='colfive' onClick={handleClick}>
                {click === false ? <GiHamburgerMenu /> : <FaTimes />}
           </div>}*/}
        </div>
    </div>
    );
}

export default Navbar;
