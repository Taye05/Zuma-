import React from 'react';
// import Food from '../Hero/food.jpg';
import './Hero.css';
import Zoom from 'react-reveal/Zoom';

const Hero = () => {
    return(
        <div className='hero'>
          <Zoom>
        <div >
           <h1 className="text-5xl font-black pb-2 ml-24">ZUMa</h1>
           <h3 className="pb-8">contemporary japanese cousine</h3>
           <div>
               <p className='text-sm text-center border-double border-2 border-sky-500 p-3 border-x-4'>make a reservation</p>
           </div>
           <div className='flex justify-around p-3 '>
               <p className="border-b-2 border-white">private dining</p>
               <p className="border-b-2 border-white">locations</p>
           </div>
        </div>
        </Zoom>
        </div>
    )
}

export default Hero;