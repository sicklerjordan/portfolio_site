import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { CgShapeHexagon } from 'react-icons/cg';
import './Intro.css';

function Intro() {

  const h1Ref = useRef()
  const h2Ref = useRef()
  const icon = useRef()

  useEffect(() => {
    
      gsap.to(h1Ref.current, { duration: 1.5, delay: 1.5, y: '50%', ease: 'bounce' })
      gsap.to(h2Ref.current, { duration: 1.5, delay: 2.5, y: '50%', ease: 'bounce' })
      gsap.to('.app', {duration: 1.5, delay: 5, y: '-100%', ease: 'sine'})
      gsap.fromTo('.icon', { duration: 40, opacity: 1, rotation: 0}, {duration: 40, opacity: 1, scale: 1, rotate: 2000})
    
  } )

  return (
    <div>
    <div className="app">
      <CgShapeHexagon className='icon' />
      <p className='jay'>JS</p>
      <h1 className="head" ref={h1Ref}>Jordan</h1><h1 className="head" ref={h2Ref} id="sickler">Sickler</h1>
    </div>

    </div>
  );
}

export default Intro;