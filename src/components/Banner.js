import React from 'react';
import Image from '../assets/about.png'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import {Link} from 'react-scroll';

const Banner = () => {
  return(
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
          <div className='flex flex-col gapy-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            {/* text */}
            <div  className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.7}}>ZANE <span>FALCAO</span></motion.h1>
            </div>
            <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.8}}   className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-1'>I am a </span>
              <TypeAnimation sequence={[
                'Frontend Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Generative A.I Developer',
                2000,
              ]} 
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.7}}  className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Aspiring Engineer
            </motion.p>
            <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0' >
                  <Link to='contact'>
                      <button className='btn btn-lg mr-3'>
                        Contact me
                      </button>
                  </Link>
                <a href='https://drive.google.com/file/d/1iKSPDuHrOlOTotc7bWgdyXI8hvK0hARJ/view?usp=sharing' className='text-gradient btn-link'>
                    My Resume
                </a>
            </motion.div>
            {/* socials */ }
            <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/falcaozane' className='cursor-pointer'>
              <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/zane-falcao-014a41247/' className='cursor-pointer'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/falcaozane/' className='cursor-pointer'>
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {
            /*
            
            image 
            <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'}  className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
                <img src={''} alt='' />
            </motion.div>
          
            */
          }
          </div>   
      </div>
    </section>
  );
};

export default Banner;
