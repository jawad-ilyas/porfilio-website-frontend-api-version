import React from 'react'
import SocaialMedia from '../components/SocaialMedia';
import NaviagtionDots from '../components/NaviagtionDots';
const AppWrap = (Component, idName , classNames) => {
    return () => (
        <div id={idName} className={`relative ${classNames}`}>
            {/* <SocaialMedia /> */}
            <div>
                <Component />
                {/* <div className='absolute right-0 bottom-0'>
                    <p>lorem</p>
                    <p>lorem</p>
                </div> */}
            </div>
            <NaviagtionDots active={idName} />
        </div>
    );
};

// const AppWrap = (Component, idName, classNames) => function Hoc() {

//     return (
//         <div id={idName} className="relative">
//             {/* <SocaialMedia /> */}
//             <div>
//                 <Component />
//                 {/* <div className='absolute right-0 bottom-0'>
//                     <p>lorem</p>
//                     <p>lorem</p>
//                 </div> */}
//             </div>
//             <NaviagtionDots active={idName} />
//         </div>
//     );


// }


export default AppWrap