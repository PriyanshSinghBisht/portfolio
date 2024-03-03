import { IconType } from "react-icons"
import { motion } from 'framer-motion';

import {GrReactjs}  from 'react-icons/gr';
import {TbBrandNextjs} from 'react-icons/tb';
import {TiHtml5} from 'react-icons/ti';
import {DiCss3} from 'react-icons/di';
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript, TbBrandPython, TbBrandCpp} from 'react-icons/tb';

const Skills = ()=>{
    return(
        <div id="skills">
             <h1 className="text-center sm:text-4xl text-2xl text-black dark:text-white font-bold lg:my-20 my-10">Skills</h1>

             <div className="grid min-[450px]:grid-cols-4
         grid-cols-3
         mx-auto w-[90%] place-content-between text-black dark:text-white gap-x-2">
            {
             skills.map((sk, index) =>(
              <div 
               key={sk.name}
              className="flex justify-center">
                  <SkillCard Icon={sk.Icon} name={sk.name} index={index} />
               </div>
             ))
            
            }
        </div>
        </div>
    )
}

const SkillCard = ({  Icon, name, index  }) => {
  return (
    <motion.div className="flex flex-col items-center my-4 group
       shadow-xl hover:shadow-3xl hover:scale-95
     dark:shadow-blue-800  p-3 rounded-lg "
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
             dark:bg-blue-900
             group-hover:bg-slate-300
             dark:group-hover:bg-blue-800
             group-hover:scale-115
           " >
        <Icon className="text-5xl group-hover:scale-110" />
        </div>
        <p className="w-fit px-3 py-2  mt-2 group-hover:scale-95
        
        bg-slate-100 dark:bg-blue-400 rounded-lg 
        dark:group-hover:bg-blue-500 group-hover:bg-slate-200">{name}</p>
    </motion.div>
  )
}

const skills = [
    {
       name: "html",
       Icon: TiHtml5 ,
    },
    {
        name: "css",
        Icon: DiCss3,
     },
     {
        name: "javascript",
        Icon: TbBrandJavascript ,
     },
     {
        name: "tailwind",
        Icon: SiTailwindcss,
     },
     {
        name: "reactjs",
        Icon: GrReactjs,
     },
     {
        name: "nextjs",
        Icon: TbBrandNextjs,
     },
     {
        name: "cpp",
        Icon: TbBrandCpp,
     },
     {
        name: 'python',
        Icon: TbBrandPython,
     }
     
];

export default Skills;