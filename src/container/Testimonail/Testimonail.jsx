import React, { useState, useEffect } from 'react'
import MotioWrap from '../../Wrapper/MotionWrap'
import { motion } from "framer-motion"
import AppWrap from '../../Wrapper/AppWrap'
import urlFor, { client } from '../../client'
// import ReactToolTip from "react-tooltip"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
function Testimonail() {
  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {

    const query = '*[_type == "testimonials"]';
    const brandQuery = '*[_type == "brands"]';

    client.fetch(brandQuery)
      .then((data) => {
        console.log("brand", data)
        setBrands(data)
      })

    client.fetch(query)
      .then((data) => {
        console.log(data)
        setTestimonials(data)
      })

  }, [])
  return (
    <div className='container md:mx-auto  sm:px-10 sm:py-8 p-4 '>
      {testimonials.length && (
        <div className=' flex justify-center flex-col items-center p-8 '>
          <div className="flex bg-white flex-col  md:flex-row  rounded-2xl shadow-xl p-8 md:w-4/6 h">
            <img className='self-center me-4 w-1/2 h-1/2 md:w-48 md:h-48 object-contain rounded-full' src={urlFor(testimonials[currentIndex].imageurl)} alt={testimonials[currentIndex].name} />
            <div className="">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div className='mt-4'>
                <h4 className="font-bold text-xl capitalize">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text font-normal italic text-base">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="flex mt-4">
            <div className="bg-white rounded-full h-10 w-10 flex items-center justify-between" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft size={30} />
            </div>

            <div className="ms-4 bg-white rounded-full h-10 w-10 ps-2 flex items-center justify-between" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight size={30} />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-center flex-wrap ">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
            className='mx-1'
          >
            <img className='w-32 h-32 object-contain grayscale ' src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(MotioWrap(Testimonail), "testimonails", "")