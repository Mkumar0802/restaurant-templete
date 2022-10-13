import React from 'react';
// import hero data
import { heroData } from '../data.js';
// import motion
import { motion } from 'framer-motion';
// import variants
import { staggerContainer, fadeIn } from '../variants';
// import components
import Header from './Header.js';

const Hero = () => {
  // destructure hero data
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <section className='bg-hero min-h-[980px] bg-cover bg-right'>
      <Header />
      <div className='container mx-auto min-h-[980px] flex justify-center items-center'>
        {/* text */}
        <motion.div
          variants={staggerContainer(0.4, 2)}
          initial='hidden'
          animate={'show'}
          className='text-center flex flex-col items-center'
        >
          {/* pretitle */}
          <motion.div
            variants={fadeIn('down')}
            className='text-white text-[24px] lg:text-[28px] font-primary italic lg:font-medium mb-1'
          >
            {pretitle}
          </motion.div>
          {/* title */}
          <motion.h1 variants={fadeIn('down')} className='h1 mb-5'>
            {title}
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down')}
            className='text-white max-w-[540px] mb-8'
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn('down')}>
            <button className='btn'>{btnText}</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
