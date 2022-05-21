import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Side from './components/Side'
import Contact from './components/Contact'
import About from './components/About'
import Hero from './components/Hero'
import Intro from './components/Intro';
import Project from './components/Project'
import useLocalStorage from 'use-local-storage';
import {BsToggleOff} from 'react-icons/bs'
import {BsToggleOn} from 'react-icons/bs'





function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>

{theme === 'light' ? <div className='toggle-mode'>CHANGE THEME</div> : <div className='toggle-mode'>CHANGE THEME</div>} 

{theme === 'light' ? <BsToggleOff onClick={switchTheme} className='toggle'/> : <BsToggleOn onClick={switchTheme} className='toggle'/>} 

  {/*   <Intro />*/}
      <Navbar /> 
      <Project />
      {/*<Hero />*/}
     {/* <About />*/}
      
      <Contact />
     <Side />
    </div>
  );
}

export default App;
