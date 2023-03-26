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
              <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}}>ZANE <span>FALCAO</span></motion.h1>
            </div>
            <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.8}}   className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-1'>I am a </span>
              <TypeAnimation sequence={[
                'Frontend Developer',
                2000,
                'UI/UX Designer',
                2000,
                'Java Developer',
                2000,
              ]} 
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}}  className='mb-8 max-w-lg mx-auto lg:mx-0'>
              lorem short into about yourself
            </motion.p>
            <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0' >
                  <Link to='contact'>
                      <button className='btn btn-lg mr-3'>
                        Contact me
                      </button>
                  </Link>
                <a href='https://doc-08-24-docs.googleusercontent.com/docs/securesc/ijbfbboo65o9uce4p5rhb35k99j849si/2ajmdtufb823fulcklqvdbk488c594k6/1679806425000/03792370031194959822/03643169566616713163/1rtrImdgUPfHmro42Za62PrN5GTjdPAEy?ax=ALy03A7MC1QjiG9gKPQChaKSQKRi5LIhc9J2qmtj5-lMPLhKF8djK_xludMNMnIeiExMhwWoiK5DpRfSAo6J1uJ-hz2vGb92n6gQgWnaA5D1yvdLXjybJTLNtag2yvnbEl0LhqMBHSmYvHVwney5yZU2wBGxSyfp_eeH0vGlFpUySJOj-uJv2LyYnlSdLDz3Z-v2qvooMIjPUFk_wiESypZRuJwp4bmNgx_N4XOo-ljKaIshEx9caPS_PyytnGqcs8-P5q9sn9VCt0l9zBMcbZtAm3SYcoBxcp9jtkZoOGE_Sr3F7MC91cRkTMPiiST3dcDRMlnTyh-p9stSNqI6uER4-BTdqJEApHKwPHpa_DxiyN5LHl94J7cEdp19zFXBF7gPCSp-suK2G5DmXmtkL4NXJuMEw9LtoitsWpMMEESrnL25Ot4nTO1K7utquZmekz1IPMd1KYG_RJIXZuzKVNzrlouTu3qtb101YVrCiGRTwuSsFDB6oV4rWEc2d9-6-Ays2Pbg3r3y1WV55TDbOC9WCDughwUEDcTGSc4wCndcZjlcgWc7ni1qLXxndkPdCcdUQ1_iiGlxDNotV7Zfb6roqZiv4tesBUadL2laCt_zzipvdAlTi8s06_sUlyKF8xeWH84dESpZwvIfN67z281rULgDSXUmm2wHLW2kK6GsubWuQLyPSZQSdnRVWYqXcpGWL7FjA_Cs6oETPTIv33ryibc7e7VWHjjgMkcbzk9Eq_Ve_jK0E8M-30-WDOnRkuxEehmQ_7nTLINzOTV4FgFt7aEInpgMYfp69Mw0FK1bSoMvKs6JN7J0SJXWJpQOLGWizWcKRjGIbRDQtgZ8ZZRETm0kKF_JGh7-_WhVgMtlgmhaiIP67JhxR456_MtRkTDQI1VtskjolXaadqRAuQIiva1QZwnvcLQZTMOieEI6HZXJbRXsJApLNLcg5V4psjlXDEwqSRkm0eiF-cOcUwdjrxdlJdux7Ya4NMDGsm_HhQ&uuid=7c682a42-b2ff-41c4-aa5f-58b0aa3d8c60&authuser=0&nonce=7776r5hic3coc&user=03643169566616713163&hash=ldbvt076k5i3cu2ro0klpp6nq6fcfdui' className='text-gradient btn-link'>
                    My Resume
                </a>
            </motion.div>
            {/* socials */ }
            <motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/falcaozane'>
              <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/zane-falcao-014a41247/'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/falcaozane/'>
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
