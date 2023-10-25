'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link'
import { FiExternalLink} from 'react-icons/fi';
import ImageModal from '../components/ImageModal';
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const closeModal = ()=>{
     setIsModalOpen(false);
  }
  const openModal = (src: string)=>{
    setImageSrc(src);
    setIsModalOpen(true);
  }
  return (
    <div id="projects">
      <ImageModal isOpen={isModalOpen} src={imageSrc} onClose={closeModal} />
     <h1 className='
      sm:text-3xl
      text-2xl
      w-fit
      px-10
      py-5
      border-b-2
      dark:border-white
      border-black
      text-center
      mx-auto
      mb-2
     '>
        My Projects
     </h1>
     <p className='text-center mb-10'>Here are my some of recent projects.</p>
     <div className='sm:mx-20  min-[500px]:mx-10 mx-5 sm:mt-20 mt-10 
        '>
        <motion.div className='flex lg:flex-row flex-col  
          sm:rounded-none rounded-lg overflow-hidden 
          hover:scale-105 duration-1000
         '
         initial={{ scale:0.5 }}
         whileInView={{ scale:1}}
         >
          <img 
            src="/images/netflix-clone.png"
            className='
            lg:w-[50%]
            sm:w-[90vw]
            w-full
            sm:aspect-video
            aspect-[3/1.8]
            duration-100
            '
            alt="netflix-clone"
            onClick={()=>openModal('/images/netflix-clone.png')}
            />
        
        <div className='sm:p-10 p-5 bg-gradient-green lg:w-[50%] w-full flex justify-center flex-col'>
             <h1 className='text-yellow-500 text-xl sm:text-3xl'>Netflix-clone</h1>
             <Link 
              href="https://priyanshsinghbisht.github.io/netflix-clone/"
              target='block'
              className='text-blue-500 underline break-words 
              group hover:text-black dark:hover:text-white
              sm:py-3 
              '
              >
                  https://priyanshsinghbisht.github.io/netflix-clone/ 
                  <FiExternalLink className="hidden group-hover:inline ml-3 duration-200 text-xl"/>
                  </Link>
              <p><span>#React </span>
              <span> #react-router-dom</span>
              </p>
        </div>
        </motion.div>

        <motion.div  className='flex lg:flex-row-reverse flex-col 
         sm:mt-20 mt-10
         sm:rounded-none rounded-lg overflow-hidden
         hover:scale-105 duration-1000
         '
         initial={{ scale:0.5 }}
         whileInView={{ scale:1}}
         >

        <img 
            src="/images/messenger.png"
            className='
            lg:w-[50%]
            sm:w-[90vw]
            w-full
            duration-100
            sm:aspect-video
            aspect-[3/1.8]
            '
            alt="netflix-clone"
            onClick={()=>openModal('/images/messenger.png')}
            />
            
             
             <div className='sm:p-10 p-5 bg-gradient-yellow lg:w-[50%] w-full flex justify-center flex-col'>
             <h1 className='text-yellow-500 text-xl sm:text-3xl'>Messenger-clone</h1>
             <Link 
              href="https://messenger-clone-ten-lilac.vercel.app/"
              target='block'
              className='sm:py-3 text-blue-500 underline break-words group dark:hover:text-white hover:text-black'
              >
                  https://messenger-clone-ten-lilac.vercel.app/
                  <FiExternalLink className="hidden  group-hover:inline ml-3 text-xl"/>
                  </Link>
                  <p><span>#nextjs #mongodb #prisma</span></p>
        </div>
        </motion.div>
    </div>
    
   
    </div>
  )
}

export default Projects