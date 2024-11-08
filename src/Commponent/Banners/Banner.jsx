import React from 'react'
import Bannerpng from "../../assets/fruits-splash.png"
import {motion} from "framer-motion"
import { FadeUp } from '../../utility/animation'
export default function Banner() {
  return (
    <section className='bg-secondary/10'>
      <div className='container grid grid-col-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
      <div className='flex justify-center items-center'>
        <motion.img 
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{type:"spring",stiffness:100,delay:0.2}}
        viewport={{once:true}}
        src={Bannerpng} alt="" className='w-[300px] md:max-w-[400px] object-cover drop-shadow h-full '/>
      </div>
      <div className='flex justify-center flex-col'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]' >
          <motion.h1 
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}          
          className='text-3xl lg:text-6xl font-bold uppercase '>Brand Info</motion.h1>
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
      </div>
    </section>
  )
}

