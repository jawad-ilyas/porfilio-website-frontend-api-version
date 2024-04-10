import React from 'react'
import { circIn, motion, transform } from "framer-motion"
import profileImg from "../../assets/profile.png"
import profileCircle from "../../assets/circle.svg"
import flutter from "../../assets/flutter.png"
import redux from "../../assets/redux.png"
import sass from "../../assets/sass.png"
import './Header.css'
const scaleVariantes = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}
export default function Header() {
  return (
    // ! Todo add background img if you need bgIMG.png
    <div id='home' className=' relative bg-cover bg-no-repeat flex flex-row'  >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className='app_header-info'
      >
        <div className='app__header-badge mt-6 '>
          <div className='badge-cmp app__flex shadow-xl py-3 px-4 rounded-2xl'>
            <span>👋</span>
            <div className='ml-5'>
              <p className=''>Hello , I am</p>
              <h1>Jawad Mughal Dev</h1>

            </div>
          </div>
          <div className='tag-cmp app_flex mt-4  ms-8 shadow-xl py-5 px-8 rounded-2xl'>
            <p className=''>Web Developer</p>
            <p className=''>App Developer</p>


          </div>
        </div>
      </motion.div>


      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
        className='app_header-img'
      >
        <img src={profileImg} alt='profile_bg' />
        <motion.img
          src={profileCircle}
          alt='profile-circle-img'
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='app_header-img' />


      </motion.div>


      <motion.div
        variants={scaleVariantes}
        whileInView={scaleVariantes.whileInView}
        className='app__header-circles flex flex-column cicleImages  items-start ml-4 w-full h-full'

      >
        {[flutter, redux, sass].map((circle, index) => (
        <div className={`circle-cmp app__flex  rounded-full shadow-xl bg-whiteColor w-16 h-16 even:w-32 even:h-32`} key={index}>
            <img src={circle} alt={`${index + circle}`} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
