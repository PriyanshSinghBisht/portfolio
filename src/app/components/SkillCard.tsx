'use client'

import { IconType } from "react-icons"
import { motion } from 'framer-motion';

interface SkillCardProps{
    Icon: IconType;
    name: String;
    index: any;
}
const SkillCard : React.FC<SkillCardProps>= ({
    Icon,
    name,
    index
}) => {
  return (
    <motion.div className="flex flex-col items-center my-4 group
       shadow-xl hover:shadow-3xl hover:scale-95
     dark:shadow-slate-800  p-3 rounded-lg "
     initial={{opacity:0,scale:0}}
     whileInView={{opacity:1,scale:1}}
     transition={{ duration: 0.3, delay: index * 0.1 }}
      // viewport={{once:true}} 
     >
        <div className="dark:ring-white rounded-full 
           bg-slate-200 
           ring-inset
           ring-black
           ring-2 w-fit p-2
           group-hover:ring-4
             dark:bg-slate-800
             group-hover:scale-105
             group-hover:bg-slate-300
             dark:group-hover:bg-slate-900
             group-hover:scale-115
           " >
        <Icon className="text-5xl group-hover:scale-110" />
        </div>
        <p className="w-fit px-3 py-2  mt-2 group-hover:scale-95
        
        bg-slate-200 dark:bg-slate-800 rounded-lg 
        dark:group-hover:bg-slate-900 group-hover:bg-slate-300">{name}</p>
    </motion.div>
  )
}

export default SkillCard