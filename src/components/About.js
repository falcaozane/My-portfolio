import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; //hook
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  })
  return(
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto mt-5'>
        <div className='flex flex-col gap-y-12 lg:mt-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-2 h-screen '>
          {/* image */}
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='hidden lg:block flex-1 bg-about bg-contain bg-no-repeat h-[550px] items-center'></motion.div>
          {/* text */}
          <motion.div variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1'>
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>I'm Studying Computer Engineering @FRCRCE.</h3>
            <p className='mb-6'>
            A third-year Computer Engineering student with an ardent passion for computers & web technology. I am enthusiasticabout Competitive Programming, WebD, and Cryptography & take an immense interest in learning newer algorithms and computer languages.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-16'>
              <div>
                <div className='text-[45px] font-tertiary text-gradient mb-4 p-2'>
                  {inView ? <CountUp start={0} end={6} duration={3} />: null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  worked on
                </div>
              </div>
              <div>
              <a href='https://www.linkedin.com/in/zane-falcao-014a41247/details/certifications/'>
                    <div className='text-[45px] font-tertiary text-gradient mb-4 p-2'>
                    
                      {inView ? <CountUp start={0} end={14} duration={3} />: null}
                    </div>
                    <div className='font-primary text-sm tracking-[2px]'>
                        Certifications
                    </div>
              </a>
              </div>
              {
                /*
                  
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2 mt-2'>
                  {inView ? <CountUp start={0} end={2} duration={3} />: null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  worked on
                </div>
              </div> 
                 */
              }
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
