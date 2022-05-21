import React from 'react';
import './Theme.css'
import useLocalStorage from 'use-local-storage';
import {BsToggleOff} from 'react-icons/bs'

const Theme = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

  return (
      <div className='app' >
          <div className='login'>
              <h5>Light Theme</h5>
              <BsToggleOff onClick={switchTheme}/>
          </div>
      </div>
      )
};

export default Theme;
