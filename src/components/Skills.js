import React from 'react'
import { skills } from './data'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Skills = () => {
  return (
    <section id='skills' className='py-8 lg:section sm:mb-20 h-[300px]'>
        <div className='container mx-auto '>
            <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}}>
                <h4 className='text-xl uppercase text-gradient  font-medium mb-2 tracking-wide'>I have worked on:</h4>
            </motion.div>
            <div className='grid grid-cols-10 md:grid-flow-row'>
            
                {skills.map((skill, index)=>{
                    return(
                        <motion.div variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='lg:mr-3 lg:mt-10  sm:mr-16'>
                            <img src={skill.image} alt=''/>
                         </motion.div>
                    );
                })}
                
            </div>
        </div>
    </section>
  );
}

export default Skills