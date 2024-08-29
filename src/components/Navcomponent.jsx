import React from 'react'
import {useState} from 'react'
import ThreeDot from '../assets/ThreeDot'
import './Navcomponent.css';
const navcomponent = () => {
  const [togglerMenu, settogglerMenu] = useState(false)
  return (
    <div className='flex justify-between px-10 shadow py-4 font-semibold fixed w-full top-0 left-0'>
        <span><a href="#">S-Anbu</a></span>
      <ul className=' ulel hidden sm:flex'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      {togglerMenu && <ul className=' mobile-ulel justify-center  sm:hidden'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>}
      <button onClick={()=>settogglerMenu(!togglerMenu)} className='sm:hidden'>
        <ThreeDot/>
      </button>
    </div>
  )
}

export default navcomponent