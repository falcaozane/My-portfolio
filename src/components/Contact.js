import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {FiMail, FiPhone} from 'react-icons/fi'
const Contact = () => {
  return(
    <section id='contact' className='py-32 lg:section lg:mt-44'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1 flex justify-start items-center'>
              <div>
                <h4 className='text-xl uppercase text-gradient  font-medium mb-2 tracking-wide'>Get in touch</h4>
                <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
                <h6 className='text-[20px] lg:text-[35px] leading-none mb-12 '>
                  <FiPhone style={{'float':'left','marginRight':'15px'}} className='text-accent' /> +91 9028921961
                </h6>
                <h6 className='text-[20px] lg:text-[35px] leading-none mb-12 md:text-[10px]'>
                  <FiMail style={{'float':'left','marginRight':'15px'}} className='text-accent' />
                   falcaozane@gmail.com</h6>
              </div>
          </motion.div>
          {/* form */}
          <motion.form action="https://formsubmit.co/falcaozane@gmail.com" variants={fadeIn('left',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start lg:mt-10' method="POST">
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your name' name='name' />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your email' name='email' />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message' name='message' ></textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
