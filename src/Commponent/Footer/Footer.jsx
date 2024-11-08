import React from 'react'
import {FaGithub ,FaTwitter,FaLinkedin,FaLeaf} from "react-icons/fa"
import {motion} from "framer-motion"
export default function Footer() {
  return (
    <footer className='bg-primary/10 py-10'>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1,delay:0.2}}
      className='container justify-between flex items-center '>
      <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <p className=' text-primary'>Fruit</p>
                <p className='text-secondary'>Store</p>
                <FaLeaf className='text-green-500' />
            </div>
            <div className='text-3xl flex gap-3 items-center mt-6 text-gray-600'>
              <a href="https://github.com/mugesh202"><FaGithub /></a>
              <a href="https://x.com/GMugeshkumar202"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/ganesan-mugeshkumar-24565a337?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWlRPA%2FfIR8GwAasyCqkmdA%3D%3D"><FaLinkedin /></a> 

            </div>

      </motion.div>
    </footer>
  )
}

