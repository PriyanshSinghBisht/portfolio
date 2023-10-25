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
         <motion.h1 className='text-4xl sm:mb-10 mb-5 '
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
         w-[400px] 
         sm:max-w-[50vw]
         max-[500px]:w-[90%]
         xl:mx-20
         lg:mx-10
         sm:mx-5
         mx-auto
         aspect-square
         sm:mt-0
         mt-10
         '>
        
        <ImageContainer>
             <div className='
                w-full 
                h-full 
                rounded-full 
                overflow-hidden'
            
                >
               <img src="/images/mypic.png" alt="mypic" />

             </div>
        </ImageContainer>
      </div>
      </div>
  )
}

export default Hero