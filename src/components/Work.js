import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return(
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex  flex-col lg:flex-row gap-x-10 '>
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              {/* text */}
              <div>
                <h2 className='h2 leading-tight text-accent'>
                  My  Latest <br />
                  Work.
                </h2>
                <p className='max-w-sm mb-16'>
                  Here are some of my projects which I have made during several hackathons and my entire 2nd year of engineering.
                  The technologies used are React, Java and Vue. Visit my github repo's to see more projects.
                  Thank You !
                </p>
                <a href='https://github.com/falcaozane'><button className='btn btn-sm mb-5' >View All</button></a>
              </div>
              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div>
                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>Java</span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <span className='text-3xl text-white'>Pac-man</span>
                  </div>
                </div>
              </div>
            </div>  
          </motion.div>
          <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1 flex flex-col gap-y-10 '>
            {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                <div>
                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>React</span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <a href='https://connect-4-zane.netlify.app/'><span className='text-3xl text-white'>Connect-4</span></a>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:mt-9'>
                <div>
                  {/* overlay */}
                  <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                  {/* img */}
                  <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
                  {/* pretitle */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                    <span className='text-gradient'>Vue</span>
                  </div>
                  {/* title */}
                  <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                    <a href='https://weight-tracker-zane.netlify.app/'><span className='text-3xl text-white'>Weight-Tracker</span></a>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
