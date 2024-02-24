import {motion} from 'framer-motion';
import React, { useEffect } from 'react'
import TypingEffect from '../logic/TypingEffect'

const Hero = () => {
  return (
    <div 
      id="aboutme"
      className='
      flex 
      lg:p-20 
      sm:flex-row
       flex-col 
       sm:p-10 
       p-5
       sm:min-w-[50vw]
       w-full
       sm:justify-center
       sm:items-center
       '
     >
          <div className='sm:w-[500px] max-[650px]:text-center 
          min-h-[210px] sm:pl-0'>
              <motion.h1 className='sm:text-4xl text-3xl font-medium 
              sm:mb-5 mb-2 sm:leading-[20px] leading-[40px] 
              max-[650px]:text-center max-[650px]:mt-5' 
                initial={{ x: 200}}
                whileInView={{x:0}}
              >Hellow !</motion.h1>
                     
              <TypingEffect /> 
          </div>
          <div className='
            w-[500px]
            max-[500px]:w-[90%]
            xl:mx-20
            lg:mx-10
            mx-auto
            aspect-square
            relative
            '>
              <img src="/images/group2.png" alt="mypic" id="bg-pink"
                  className="w-[600px] animate-toggleSize h-auto brightness-125 absolute top-0 -left-16"/>
              <img src="/images/group.png" alt="mypic" id="bg-blue"
                  className="w-[600px] h-auto animate-toggleSize brightness-125 absolute top-0 -left-8"/>
              <img src="/images/mypic2.png" alt="mypic" 
                  className="w-[600px] h-auto brightness-125 absolute"/>
          </div>
      </div>
  )
}

export default Hero