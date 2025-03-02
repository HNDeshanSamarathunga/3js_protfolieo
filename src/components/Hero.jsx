import React from 'react'
import { motion } from "framer-motion";

import { styles } from '../styles';
import { ComputersCanvas} from './canvas';
import { section } from 'framer-motion/client';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 h-40 sm:h-80 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Deshan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          "AI Innovator, Web Developer, Tech Enthusiast,<br className='hidden sm:block'/> Hobbyist in Cybersecurity" 🚀
          </p>
        </div>
      </div>
      
      <ComputersCanvas/>
    </section>
  )
}

export default Hero