import React from 'react';
import './Side.css'
import {FaGithubSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'


function Side() {
 

  return (
    <div className='side'>
        <div>
            <div className='socials'>
                <a href='https://github.com/sicklerjordan'><FaGithubSquare /></a>
                <FaLinkedin />
                <FaTwitterSquare />
                <FaFacebookSquare />
            </div>
        </div>
        <div className='lines'>
            <div className='right-line'></div>
        </div>
    </div>
    );
}

export default Side;
