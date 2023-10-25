
'use client'

import SkillCard from "../components/SkillCard";
import useSkills from "../hooks/useSkills";

const Skills = () => {
    const skills = useSkills;
  return (
    <div className="py-5 sm:min-h-[100vh] flex items-center" id="skills">
      <div className="w-full" >
        <h1 className='sm:text-3xl 
        text-2xl
        pb-4 text-center 
        sm:my-20 
        my-10
        border-b-2 
        px-5
        dark:border-white
        border-black
        w-fit mx-auto'>My Skills</h1>

        <div className="grid min-[450px]:grid-cols-4
         grid-cols-3
         mx-auto w-[90%] place-content-between">
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
    </div>
  )
}

export default Skills