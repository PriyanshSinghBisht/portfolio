import React from 'react'
import { motion} from 'framer-motion';

const ImageContainer = ({ children } 
    :{children:  React.ReactNode}) => {
  return (
    <motion.div className='
       relative
       w-[90%] 
       aspect-square
       flex 
       justify-center
       items-center
       group
       '
       initial={{scale: 0.5}}
       whileInView={{scale: 1}}
       >

        {children}
           
        <div className='
            effect
            absolute
            top-0
            left-0
            w-full
            h-full
            rounded-full
            border-r-red-800
            border-r-8
            group-hover:border-r-[16px] 
             '/>
               <div className='
            effect
            absolute
            top-0
            left-0
            w-full
            h-full
            rounded-full
            border-l-blue-800
            border-l-8
            group-hover:border-l-[16px]
             '/>
                   <div className='
            effect
            absolute
            top-0
            left-0
            w-full
            h-full
            rounded-full
            border-t-green-800
            border-t-8
            group-hover:border-t-[16px]
             '/>
                   <div className='
            effect
            absolute
            top-0
            left-0
            w-full
            h-full
            rounded-full
            border-b-yellow-800
            border-b-8
            group-hover:border-b-[16px]
             '/>
        </motion.div>
  )
}

export default ImageContainer