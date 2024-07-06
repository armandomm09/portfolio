import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../style'
import { useMediaQuery } from 'react-responsive'
import OnixCanvas from './canvas/Robots/Onix'
import QuesilloCanvas from './canvas/Robots/Quesillo'
const Hero = () => {


  

  return (
    <section className=' relative w-full h-screen mx-auto flex'>
      <div className=''>
        <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-col items-start gap-5 sm:flex-row`}>
          <div className=' flex flex-row'>
            <div className=' flex flex-col justify-center items-center mt-5'>
              <div className=' w-5 h-5 rounded-full bg-tertiary' />
              <div className=' w-1 sm:h-80 h-40 bg-gradient-to-b from-tertiary' />
            </div>
            <div className=' ml-4'>
              <h1 className={`${styles.heroHeadText}`}> Meet <span className=' text-tertiary font-bold'>Armando</span> </h1>
              <p className={`${styles.heroSubText}`}>Basically, I make robots...</p>
            </div>
          </div>
          {/* <QuesilloCanvas /> */}
          <OnixCanvas />
        </div>
      </div>
    </section>
  )
}

export default Hero