import React from 'react'
import ThreeDot from '../assets/ThreeDot'
import './Navcomponent.css';
const navcomponent = () => {
  
  return (
    <div className='flex justify-between px-10 shadow py-4 font-semibold '>
        <span><a href="#">S-Anbu</a></span>
      <ul className=' ulel hidden sm:flex'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <ul className=' mobile-ulel  sm:hidden'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <button className='sm:hidden'>
        <ThreeDot/>
      </button>
    </div>
  )
}

export default navcomponent