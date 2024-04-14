import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import urlFor, { client } from '../../client'
import AppWrap from '../../Wrapper/AppWrap';
import MotioWrap from '../../Wrapper/MotionWrap';
import axios from "axios"


const About = () => {
  const [about, setAbouts] = useState();

  const fetchAboutData = () => {


    axios.get("https://porfilio-website-frontend-api-backend-ui1y.vercel.app/api/v1/work/showWork")
      .then((response) => {
        console.log("fetch data into main for about section ", response)
        console.log("fetch data into main for about section ", response.data.data)

        setAbouts(response.data.data)
      })
      .catch((error) => {
        console.log("Error into the fetch data into front end : ", error)
      })
  }
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query)
      .then((data) => {
        // console.log(data)
        // console.log(data[0]?.imgUrl?.asset?._ref)
        // setAbouts(data)
      })

    fetchAboutData();

  }, [])


  return (
    <div className='container md:mx-auto  sm:px-10 sm:py-8'>
      <div className='m-6 md:m-0'>
        <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">I Know That <span class="text-secondaryColor">Good Design</span> means <span class="text-secondaryColor">Good Business</span></h2>

        <div className='grid grid-rows-auto grid-cols-1  lg:grid-cols-4 md:grid-cols-3 gap-5  w-full my-10'
        >
          {about?.map((item, index) => (
            <motion.div
              className='flex flex-col items-center w-full bg-gray-100 shadow-lg rounded-xl p-4 '
              initial={{ opacity: 0 }}
              key={index}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}

            >
              <div >
                {/* <img className='size-52' src={urlFor(item?.imgUrl?.asset?._ref + "?h=200")} /> */}
                <img className='size-52' src={item?.avatar} />

              </div>
              {/* <p className='font-semibold  text-xl mt-1'>{item.title}</p> */}
              <p className='font-semibold  text-xl mt-1'>{item.name}</p>
              {item.description}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default AppWrap(MotioWrap(About), "about", "bg-white")