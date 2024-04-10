import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
function SocaialMedia() {
    return (
        <div className='absolute bottom-0 left-0'>
            <FaLinkedin size={25} className='ms-2 z-[101]  text-gray-900  rounded-full   hover:text-secondaryColor hover:duration-500 cursor-pointer' />
            <FaSquareXTwitter size={25} className='ms-2 z-[101]  text-gray-900  rounded-full  hover:text-secondaryColor hover:duration-500 cursor-pointer' />
            <FaFacebookSquare size={25} className='ms-2 z-[101]  text-gray-900  rounded-full  hover:text-secondaryColor hover:duration-500 cursor-pointer' />
            <FaSquareInstagram size={25} className='ms-2 z-[101]  text-gray-900  rounded-full  hover:text-secondaryColor hover:duration-500 cursor-pointer' />
            <FaSquareGithub size={25} className='ms-2 z-[101]  text-gray-900  rounded-full  hover:text-secondaryColor hover:duration-500 cursor-pointer' />
        </div>
    )
}

export default SocaialMedia