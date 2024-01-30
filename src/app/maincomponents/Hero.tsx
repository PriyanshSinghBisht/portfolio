import {motion} from 'framer-motion';
import React, { useEffect } from 'react'
import TypingEffect from '../logic/TypingEffect'
import ImageContainer from '../components/ImageContainer';

const Hero = () => {
    const stringArray = ['Priyansh Singh Bisht', 'a Webdevelper'];
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
          <div className='sm:w-[500px] min-h-[250px] sm:pl-0'>
              <motion.h1 className='sm:text-[30px] text-4xl font-bold mb-5 '
                initial={{ x: 200}}
                whileInView={{x:0}}
              >Hellow !</motion.h1>
              
              <motion.div 
                initial={{ x: 200}}
                whileInView={{x:0}}
              >
              <TypingEffect stringArray={stringArray} delay={100} /> 
              </motion.div>
          </div>
          <div className='
            w-[500px]
            max-[500px]:w-[90%]
            xl:mx-20
            lg:mx-10
            sm:mx-5
            mx-auto
            aspect-square
            sm:mt-0
            mt-10
            relative
            '>
              <img src="/images/group2.png" alt="mypic" 
                  className="w-[600px] h-auto brightness-125 absolute top-0 -left-16"/>
              <img src="/images/group.png" alt="mypic" 
                  className="w-[600px] h-auto brightness-125 absolute top-0 -left-8"/>
              <img src="/images/mypic2.png" alt="mypic" 
                  className="w-[600px] h-auto brightness-125 absolute"/>
          </div>
      </div>
  )
}

export default Hero