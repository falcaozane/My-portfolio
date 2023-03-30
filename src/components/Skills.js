import React from 'react'
import { skills } from './data'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Skills = () => {
  return (
    <section id='skills' className='py-15 lg:section'l>
        <div className='container mx-auto'>
            <div className='grid grid-cols-10 md:grid-flow-row'>
            <motion.div variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}}>
                <h4 className='text-xl uppercase text-gradient  font-medium mb-2 tracking-wide'>I have worked on:</h4>
            </motion.div>
                {skills.map((skill, index)=>{
                    return(
                        <motion.div variants={fadeIn('down',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}}>
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