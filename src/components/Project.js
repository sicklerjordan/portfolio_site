
import React from 'react';
import ss from './images/ss.png'
import rick from './images/rick.png'
import crypto from './images/crypto-site.png'
import admin from './images/admin.png'
import reddit from './images//reddit.png'
import color from './images/color.png'
import kkvid from './images/kkvid.mp4'
import rickVid from './images/rickVid.mov'
import cryptoVid from './images/cryptoVid.mov'
import adocVid from './images/adocVid.mov'
import redditVid from './images/redditVid.mov'
import colorVid from './images/colorVid.mov'



import kkVid from './images/kkVid.mov'

import { useEffect } from 'react';
import './Project.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Work() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    
  return (
    <div data-aos='fade-in'>
        <h1 id="work"className='project-header'>SOME OF MY WORK</h1>
        <a href='https://github.com/sicklerjordan' target="_blank" id="sub"><p className='project-sub'>GITHUB</p></a>

        <div className='project-container'>
        <div className='card'>
                <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={cryptoVid}/>
                </video>
            </div> 
            <div className='card'>
                <video muted autoStart autoPlay loop>
                {//<source autoStart autoPlay  type="video/mp4" src={}/>}
                </video>
            </div> 
            <div className='card'>
                <img src={ss} alt='' />
            </div>
            <div className='card'>
                <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={adocVid}/>
                </video>
            </div> 
            <div className='card'>
                <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={kkvid}/>
                </video>
            </div> 
            <div className='card'>
            <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={colorVid}/>
                </video>
            </div>
            <div className='card'>
            <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={redditVid}/>
                </video>
            </div>
            <div className='card'>
                <img src={color} alt='' />
            </div>
            <div className='card'>
                <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={kkVid}/>
                </video>
            </div> 
        </div>
    </div>
    );
}

export default Work;
