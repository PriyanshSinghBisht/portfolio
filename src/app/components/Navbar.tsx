'use client'

import Link from "next/link";
import useNavigate from "../hooks/useNavigate"
import ThemeButtom from "./ThemeButtom";
import MobileNavbar from "./MoboleNavbar";
import { useEffect, useRef } from "react";

const Navbar = () => {
    const navigator =  useNavigate();

  return (
    <>
    <MobileNavbar />
    <div className="
    bg-transparent 
    px-14
    py-7
    sm:flex
    hidden
    text-black
    dark:text-white
    justify-end
    nav
    sticky
    top-0
    z-50
    "
    >
      <div className="mr-10 flex">
      {navigator.map((nav)=>(
        <div 
          key={nav.title}>
            <Link 
               href={`/${nav.href}`}
               className={`
                p-5
                rounded-lg
                ${nav.isActive?'bg-slate-100 dark:bg-slate-800':''}
                active:text-blue-500
               `}
               >
                {nav.title}
                </Link>
        </div>
      ))}
       </div>
       <ThemeButtom/>
    </div>
    </>
  )
}

export default Navbar