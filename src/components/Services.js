import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Bachelor of Engineering in Computer Engineering',
    description: 
    'Fr. Conceicao Rodrigues College Of Engineering (2021-2025)',
    link: 'Learn More',
    info: 'Mumbai University'
  },
  {
    name: '12th, HSC (Science)',
    description: 
    'Thomas Baptista Junior College,Papdi, Vasai West (2021)',
    link: 'Learn More',
    info: 'Maharashtra State Board of Secondary and Higher Secondary Education'
  },
  {
    name: '10th, SSC',
    description: 
    "St. Anthony's Convent High School, Vasai West (2019)" ,
    link: 'Learn More',
    info: 'Maharashtra State Board of Secondary and Higher Secondary Education'
  },
]

const Services = () => {
  return(
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-gradient mb-6'>Education</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            
            </h3>
            { /*<button className='btn btn-sm '>See my work</button> */}
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1'>
            {/* services list */}
            <div >
              { services.map((service, index)=>{
                  // destructure service 
                  const {name, description,link,info} = service;
                  return (
                    <div className='border-b border-white/20 h-[150px] mb-[15px] flex' key={index}>
                        <div className='max-w-[676px]'>
                          <h3 className='text-[20px] tracking-wider font-primary font-semibold mb-2 text-accent'>{name}</h3>
                          <h4 className='font-secondary leading-tight'>{ description }</h4>
                          <p className=' leading-tight'>{info}</p>
                        </div>
                        {
                          /*
                          <div className='flex flex-col flex-1 items-end'>
                          <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                          <a href='#' className='text-gradient text-sm'>{link}</a>
                          </div>
                           */
                        }
                        
                    </div>
                  )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
