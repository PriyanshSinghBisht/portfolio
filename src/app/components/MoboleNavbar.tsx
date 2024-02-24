'use client'

import useNavigate from "../hooks/useNavigate"
import ThemeButtom from "./ThemeButtom";
import {VscMenu, VscClose} from 'react-icons/vsc';
import { useState } from "react";
import { useRouter } from "next/navigation";

const MobileNavbar = () => {
    const navigator =  useNavigate();
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const ActiveRoute = navigator.map(nav=>{
      if(nav.isActive) return nav.title;
    });
    const toggle = ()=>{
        setOpen((o)=> !o);
    }
    const handleclick = (link: string)=>{
       router.push(link);
       toggle();
    }
  return (
    <div className="
    bg-transparent 
    p-5
    sm:hidden
    flex
    text-black
    dark:text-white
    justify-end
    nav
    sticky
    top-0
    z-10
    bg-white
    dark:bg-black
    border-b-[1px]
    border-black
    dark:border-white
    ">
    
     <div onClick={toggle} className="
     text-2xl
      z-20
      mr-auto">
     {
     !open?
     <VscMenu strokeWidth="1px" />
     :<VscClose strokeWidth="1px" />
     }

     <h1 className="fixed w-full text-center top-5 left-0">{ActiveRoute}</h1>
     </div>
     
      <div className={`
      ${open? 'w-full': 'w-0'}
      h-full
      flex 
      flex-col 
      overflow-hidden
      fixed
      top-0
      left-0
      duration-200
      pt-20
      dark:bg-black
      bg-white
       z-10
      `}>
      {navigator.map((nav)=>(
        <div 
          key={nav.title}
          className="mx-auto">
            <div 
               onClick={()=>handleclick(nav.href)}
               className={`
                p-4
                hover:bg-slate-100
                dark:hover:bg-slate-800
                rounded-lg
                cursor-pointer
                border-black
                dark:border-white
                ${nav.isActive?" border-b-[0px]":" border-b-[1px]"}
                `}
               >
                {nav.title}
                </div>
        </div>
      ))}
       </div>

       <ThemeButtom/>
    </div>
  )
}

export default MobileNavbar