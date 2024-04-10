import React from 'react'

function NaviagtionDots({ active }) {
    return (
        <div className='hidden md:flex  flex-col absolute right-0 top-1/2 z-[10]' >
            {["home", "about", "work", "skills", "testimonails", "contact"].map((link, index) => (


                <a
                    key={index}
                    className={`ms-1 font-bold text-2xl  rounded-full     ${active === link ? "text-neutral-900" : "text-gray-400"}`}
                    href={`#${link}`}
                >
                    &bull; {/* Bullet point character */}

                </a>

            ))}
        </div>
    )
}

export default NaviagtionDots