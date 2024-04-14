import React, { useState, useEffect } from 'react'
import AppWrap from '../../Wrapper/AppWrap'
import { animate, motion } from "framer-motion"
import urlFor, { client } from '../../client'
import { FaEye } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import MotioWrap from '../../Wrapper/MotionWrap';
import { IoEyeSharp } from "react-icons/io5";
import about from "../../assets/about01.png"
import { FaGithubSquare } from "react-icons/fa";
import { fetchProjectCategory } from './Work.api';

function Work() {
  const [works, setWorks] = useState([]);

  const [Active, setActive] = useState("All")
  const [portfolioSections, setPortfolioSections] = useState(["All"])
  // const portfolioSections = ["UI", "Front End", "Back End", "MERN Stack", "Web Development", "App Development", "All"];
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 })
  const [filterWork, setfilterWork] = useState([])
  const handleWorkFilter = (item) => {
    setActive(item)
    console.log(item)
    setanimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }])
      if (item === "All") {
        setfilterWork(works)
      }
      else {
        console.log(works)
        setfilterWork(works.filter((work) => work.tags.includes(item)))
      }


    }, 500);

  }

  useEffect(() => {

    const fetchProjectCats = async () => {
      const response = await fetchProjectCategory()
      console.log("Response of the fetch project category ", response.data)
      setPortfolioSections(response.data)
    }
    fetchProjectCats();

    // setPortfolioSections(response)
  }, [])
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => {
        console.log(data)
        setWorks(data)
        // console.log(data[0]?.imgUrl?.asset?._ref)
        setfilterWork(data)
      })
  }, [])

  return (
    <div className='container md:mx-auto  sm:px-10 sm:py-8 p-4 '>
      <div>
        <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">My Creative <span class="text-secondaryColor">Portfolio</span> Section</h2>
        <div className='flex flex-row flex-wrap justify-center w-full h-full mt-12'>
          {portfolioSections?.map((items, index) => (
            <div key={index}
              onClick={() => handleWorkFilter(items)}
              className={`ms-6 ${Active === items ? "bg-secondaryColor text-white duration-150" : "bg-white"}  cursor-pointer  py-1 px-2 my-1 md:px-4 rounded-md  uppercase`}
            >{items.projectCategoryName}</div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 my-10 p-4 '

        >
          {filterWork.map((work, index) => {
            return (
              <div className='flex flex-col items-center w-full h-full bg-whiteColor md:mx-5 rounded-lg hover:shadow-xl hover:duration-200 ' key={index}>
                <div className='relative'>
                  {/* Image with hover effect */}
                  {/* <div className="relative group">
                    <img className='mt-4 rounded w-full md:px-4  relative transition duration-300 group-hover:scale-105' src={urlFor(work?.imgUrl?.asset?._ref + "?h=200")} />
                    {/* Icons displayed on hover */}
                  <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"

                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: "easeInOut", staggerDirection: 0.5 }}>
                    <a href='' className='flex flex-row items-center justify-center opacity-0 : hover:opacity-100' target='_blank'>
                      {/* Icon 1 */}
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="mr-2">
                        <FaEye size={30} />
                      </motion.div>
                      {/* Icon 2 */}
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}>
                        <FaSquareGithub size={30} />
                      </motion.div>
                    </a>
                  </motion.div>
                  {/* </div> */}
                  <div className='relative group'>
                    <img src={about} className='w-96 h-68 object-cover rounded-lg transition duration-500 transform ' alt="About 1" />
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity rounded-lg'>
                      <div className='flex flex-row justify-center items-center w-full h-full'>
                        <a href='#'><IoEyeSharp className='text-white me-2' size={30} /></a>
                        <a href='#'>    <FaGithubSquare className='text-white me-4' size={30} /></a>

                      </div>
                    </div>
                  </div>
                  {/* Title and tags */}
                  <div className='text-center py-5'>
                    <p className='text-xl font-medium'>{work?.title}</p>
                    <p className='text-sm font-normal'>{work?.title}</p>
                    <div className='  px-4 py-1 rounded-sm'>
                      <p className='font-semibold'>{work?.tags[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(MotioWrap(Work), "work", "")