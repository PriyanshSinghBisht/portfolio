'use client'

import { BsSunFill, BsMoonFill } from 'react-icons/bs';


const ThemeButtom = () => {
   
    const handleChangeTheme = () => {
        document.documentElement.classList.toggle('dark');
        console.log(   document.querySelector("html")?.classList);
    };
    
  return (
    <div className="
     w-12
     h-6
     bg-blue-900
     rounded-full
     relative
     hover:bg-blue-700
     z-20
    "
    onClick={handleChangeTheme}
    >
      <div className="
      w-6
      h-6
      dark:bg-black
      bg-white
      rounded-full
      flexCenter
      absolute
      top-0
      left-0
      dark:left-[70%]
      duration-1000
      "
      >
       <BsSunFill className="w-5 h-5  text-white hidden dark:block \"/>
       <BsMoonFill className="dark:hidden text-[#666]"/>
      </div>
    </div>
  )
}

export default ThemeButtom