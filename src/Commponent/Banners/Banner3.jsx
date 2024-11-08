import React from 'react'
import Bannerpng from "../../assets/banner-bg.jpg"
import {motion} from "framer-motion"
import { FadeLeft } from '../../utility/animation'
export default function Banner3() {
  const bgStyle= {
    backgroundImage:`url(${Bannerpng})`,
    backgroundPosition:"center",
    bachgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }; 
  return (
    <section className='bg-secondary/10'>
      <div 
      style={bgStyle}
      className='container grid grid-col-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl'>
      <div></div>
      <div className='flex justify-center flex-col'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]' >
          <motion.h1 
          variants={FadeLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}          
          className='text-3xl lg:text-5xl font-bold uppercase '>Healthy Food</motion.h1>
          <motion.p 
           variants={FadeLeft(0.7)}
           initial="hidden"
           whileInView="visible"
           viewport={{once:true}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quisquam, doloremque est vel nisi possimus
             id omnis quibusdam eligendi consequuntur tempore expedita nihil laboriosam, quis praesentium! Totam voluptatibus quo 
             quae.</motion.p>
          <motion.p
           variants={FadeLeft(0.9)}
           initial="hidden"
           whileInView="visible"
           viewport={{once:true}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, nihil?</motion.p>
          <motion.p
           variants={FadeLeft(1.2)}
           initial="hidden"
           whileInView="visible"
           viewport={{once:true}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, molestiae voluptas. Dolores quam quos quas?</motion.p>   
          <motion.div 
          variants={FadeLeft(1.5)}
          initial="hidden"
          animate="visible"className='flex justify-center md:justify-start'>
             <button className='primary-btn '>Learn More</button>
         </motion.div>
        </div>

      </div>
      </div>
    </section>
  )
}


