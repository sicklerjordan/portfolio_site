import React from 'react';
import './Hero.css'
import heroVid from './images/AdobeStock_141505206.mov'

function Hero() {
  return (
    <div className='container-hero'>
        <div className='hero'>
            <h4>Hello my name is</h4>
            <h2>Jordan Sickler.</h2>
            <h2>FRONT-END WEB DEVELOPER</h2>
             <p>I’m a web developer who focuses on writing clean,<br/>
                elegant, and efficent code. I enjoy creating things that<br/>
                live on the internet. Currently located in Tampa, Florida.</p>
            <a href='mailto:sicklerjordan@gmail.com'><button>Contact Me</button></a>
        </div>
        <div className='vid-container'>
        <video className='heroVid' muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={heroVid}/>
                </video>
        </div>
    </div>
    );
}

export default Hero;
