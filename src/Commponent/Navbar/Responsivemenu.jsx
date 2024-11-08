import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
import { div } from 'framer-motion/client';

export default function Responsivemenu({open}) {
  return (
   <AnimatePresence mode='wait'>
    {
        open &&(
            <motion.div 
            initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0, y:-100}}
            transition={{duration:0.3}}
            className='absolute top-20 left-0 w-full h-screen z-20'>
                <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl '>
                    <ul className='flex flex-col gap-10 items-center'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contacts</li>
                        <li></li>
                    </ul>
                </div>
            </motion.div>
        )
    }
   </AnimatePresence>
  )
}
