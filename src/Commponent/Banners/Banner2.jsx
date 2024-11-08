import React from 'react'
import Bannerpng from "../../assets/fruit-plate2.png"
import {motion} from "framer-motion"
import { FadeUp } from '../../utility/animation'
export default function Banner2() {
  return (
    <section className='bg-secondary/10'>
      <div className='container grid grid-col-1 md:grid-cols-2 space-y-6 md:space-y-0 py-24'>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]' >
          <motion.h1 
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}          
          className='text-3xl lg:text-5xl font-bold uppercase '>Fully Natural</motion.h1>
          <motion.p 
           variants={FadeUp(0.7)}
           initial="hidden"
           whileInView="visible"
           viewport={{once:true}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quisquam, doloremque est vel nisi possimus
             id omnis quibusdam eligendi consequuntur tempore expedita nihil laboriosam, quis praesentium! Totam voluptatibus quo 
             quae.</motion.p>
          <motion.p
           variants={FadeUp(0.9)}
           initial="hidden"
           whileInView="visible"
           viewport={{once:true}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, nihil?</motion.p>
          <motion.p
           variants={FadeUp(1.2)}
           initial="hidden"
           whileInView="visible"
           viewport={{once:true}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, molestiae voluptas. Dolores quam quos quas?</motion.p>   
          <motion.div 
          variants={FadeUp(1.5)}
          initial="hidden"
          animate="visible"className='flex justify-center md:justify-start'>
             <button className='primary-btn '>Learn More</button>
         </motion.div>
        </div>

      </div>
      <div className='flex justify-center items-center'>
        <motion.img 
        initial={{opacity:0,x:200, rotate:75}}
        whileInView={{opacity:1,x:0, rotate:0}}
        transition={{duration:1,delay:0.2}}
        viewport={{once:true}}
        src={Bannerpng} alt="" className='w-[300px] md:max-w-[400px] object-cover h-full drop-shadow- '/>
      </div>
      </div>
    </section>
  )
}
