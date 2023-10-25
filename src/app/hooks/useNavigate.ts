'use client'

import { useEffect, useState } from "react";

const useNavigate = ()=>{
    const  [isActive, setIsActive] = useState("aboutme");
  
    
  useEffect(()=>{
   
    const skills = document.querySelector("#skills");
    const aboutme = document.querySelector("#aboutme");
    const projects = document.querySelector("#projects");
    const contactme = document.querySelector("#contactme");

    const handleScroll = (e: any)=>{
        let active = '';
        const skillsTop  :any = skills?.getBoundingClientRect().y.toFixed() || 100;
        const aboutmeTop : any = aboutme?.getBoundingClientRect().y.toFixed() || 100;
        const projectsTop : any = projects?.getBoundingClientRect().y.toFixed() || 100;
        const contactmeTop :any = contactme?.getBoundingClientRect().y.toFixed() || 100;
       
            if(Math.abs(aboutmeTop) <= 50 ){
                active = "aboutme";
            }
            else if(Math.abs(skillsTop) <= 50 ){
                active = "skills";
            }
            else if(Math.abs(projectsTop) <= 50 ){
                    active = "projects";
                }
            else  if(Math.abs(contactmeTop) <= 50 ){
                    active = "contactme";
                }
            
            if(active !== ''){
            setIsActive(active);
            }
    };

    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[]); 

    const nav = [
        {
            title: "About Me",
            href:  "#aboutme",
            isActive: isActive === "aboutme",
        },
        {
            title: "Projects" ,
            href: "#projects",
            isActive: isActive === "projects",
        },
        {
            title: "Skills",
            href: "#skills",
            isActive: isActive === "skills",
        },
        {
            title: "Contact Me",
            href: "#contactme",
            isActive: isActive === "contactme",
        },
    ];

    return nav;
}

export default useNavigate;