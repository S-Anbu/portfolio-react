import React from 'react'
import './Body.css';
import Anbu from '../assets/Anbu.png';
import IcBaselineWhatsapp from '../assets/IcBaselineWhatsapp'
import IonLogoLinkedin from '../assets/IonLogoLinkedin'
import BiGithub from '../assets/BiGithub'
const Body = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-1 gap-2 items-center justify-center px-5 md:px-10 lg:px-36'>
      <div className=' sm:hidden'>
        <img className=' border-[#0d6efd] shadow-xl border mt-5' src={Anbu} alt="Anbarasan-subramani" />
      </div>
      <div className='col-span-2'>
        <span className=' text-2xl md:text-5xl lg:text-7xl 1023-1200:text-6xl font-semibold md:block'>Hi,</span>
        <span className='text-2xl md:text-5xl lg:text-7xl 1023-1200:text-6xl font-semibold md:block'>I'm <span className='text-[#0d6efd] '>Anbarasan</span> </span>
        <span className='text-2xl md:text-5xl lg:text-7xl 1023-1200:text-6xl font-semibold'>Web Designer & Developer</span>
      </div>
      <div className='hidden sm:block'>
        <img className=' border-[#0d6efd] shadow-xl border mt-5' src={Anbu} alt="Anbarasan-subramani" />
      </div>
        <div className='col-span-3'>
          <button className='CustomBtn' type="button">Contact</button>
          <button className='CustomBtn ml-4' type="button">Download Resume</button>
        </div>
        <div className='iconEl flex mt-5 space-x-10 '>
          <a target='_blank' href="https://wa.me/+917502252206">
            <IcBaselineWhatsapp/>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/anbarasan-subramani-8b4473259">
          <IonLogoLinkedin/>
          </a>
          <a target='_blank' href="https://github.com/S-Anbu">
          <BiGithub/>
          </a>
          
        </div>
    </div>
  )
}

export default Body