import React, { useState, useEffect } from 'react'
import AppWrap from '../../Wrapper/AppWrap'
import { animate, motion } from "framer-motion"
import urlFor, { client } from '../../client'
// import ReactToolTip from "react-tooltip"
import { Tooltip as ReactTooltip } from 'react-tooltip'
import MotioWrap from '../../Wrapper/MotionWrap'

function Skill() {

  const [skills, setskills] = useState([])
  const [experiences, setExperiences] = useState([])
  useEffect(() => {

    const query = '*[_type == "experiences"]';
    const workQuery = '*[_type == "skills"]';

    client.fetch(workQuery)
      .then((data) => {
        console.log(data)
        setskills(data)
      })

    client.fetch(query)
      .then((data) => {
        console.log(data)
        console.log(data[0]?.works[0]?.name)
        setExperiences(data)
      })

  }, [])

  return (
    <div className='container md:mx-auto  sm:px-10 sm:py-8 p-4 '>
      <h2 className="text-xl md:text-3xl font-semibold mb-4 text-center">Skill & Experience</h2>
      <div className='flex md:flex-row flex-col  w-full py-16'>
        <motion.div className='flex flex-row items-center justify-center  flex-wrap w-full  md:w-1/2'>
          {skills?.map((skill, index) => (
            <motion.div

              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={index}

            >
              <div className=''>

                <img src={urlFor(skill?.icon)} className={`${skill.bgColor} h-28 w-28 bg-white rounded-full p-4 mx-4 shadow-2xl `} />
              </div>

              <p className='mt-1 capitalize font-medium text-center'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='md:w-1/2   h-full mt-16 md:mt-0'>
          {experiences.map((item, index) => (
            // console.logitem.works)
            <div className='flex items-center justify-center md:justify-start ms-8'>
              <div className='me-8'>
                <p className='text-secondaryColor font-medium text-xl'>{item.year}</p>
              </div>
              <div className='my-4'>
                {item?.works?.map((work) => {
                  return <>
                    <motion.div whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      key={index}
                      data-tip
                      data-for={work.name}
                      className='mb-3'
                    >
                      <h4 className='text-xl font-medium '> {work.name}</h4>
                      <p>{work.company}</p>
                    </motion.div>
                    <ReactTooltip

                      id={work.name}
                      effect="solid"
                      arrowColor='#fff'
                    >

                       {work?.desc}
                    </ReactTooltip>
                  </>
                })}
              </div>
            </div>
          ))}

        </motion.div>


      </div>

    </div>
  )
}

export default AppWrap(MotioWrap(Skill), "skills", "bg-white")