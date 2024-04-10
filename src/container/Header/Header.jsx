import React from 'react';
import { motion } from "framer-motion";
import profileImg from "../../assets/profile.png";
import profileCircle from "../../assets/circle.svg";
import flutter from "../../assets/flutter.png";
import redux from "../../assets/redux.png";
import sass from "../../assets/sass.png";
import './Header.css'
import AppWrap from '../../Wrapper/AppWrap';
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};
const techImages = [flutter, redux, sass, sass, sass];
const Header = () => {
  return (
    <div id='home' className='container mx-auto    pt-40   relative bg-cover bg-no-repeat flex flex-col md:flex-row   justify-between items-start' >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className='w-full flex  md:justify-end'
      >
        <div className='mmt-6 flex flex-col ps-4  md:items-end '>
          <div className='shadow-2xl py-4 px-3 rounded-2xl me-8 flex'>
            <span className='text-4xl'>👋</span>
            <div className='ml-5'>
              <p className='text-2xl font-semibold'>Hello, I am</p>
              <h1 className='text-sm '>Jawad Mughal Dev</h1>
            </div>
          </div>
          <div className='mt-4 md:mt-12 mb-4 md:mb-0 ms-16 shadow-2xl py-3 px-6 rounded-2xl '>
            <p className='font-normal'>Web Developer</p>
            <p className='font-normal'>App Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delayChildren: 0.5 }}
        className='w-full relative'
      >
        <img src={profileImg} alt='profile_bg' className='z-[7] w-full relative' />
        <motion.img
          src={profileCircle}
          alt='profile-circle-img'
          whileInView={{ opacity: [0, 1] }}
          className='absolute top-24 left-10 z-[6] w-3/4 md:w-full'
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>


      <motion.div

        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='flex flex-row md:flex-col mt-4 justify-center flex-wrap circleImage self-center md:ml-4 w-full h-full z-[5]'
      >
        {techImages.map((circle, index) => (
          <div className={`rounded-full shadow-xl my-1 bg-white w-16 `} key={index}>
            <img src={circle} alt={`${index + circle}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default AppWrap(Header, "home")