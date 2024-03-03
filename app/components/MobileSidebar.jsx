import Link  from 'next/link'

import { FaUser, FaProjectDiagram  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GiSkills } from "react-icons/gi";

const MobileSidebar = ({ closeSideNav, currLink }) => {
    console.log(currLink);
  return (
    <div className='backdrop-blur-lg dark:bg-[--primary] w-[200px] gap-y-4 flex flex-col text-black dark:text-white dark:shadow-none shadow-[0_0_100px_0px_#fff9]' >
        <div onClick={closeSideNav}
        className='p-4 ' >
            <Close />
         </div>
         <div className='max-[640px]:flex hidden flex-col gap-y-3 mx-2 '>
            {links.map((link,index)=>(
                    <Link
                      className={`${currLink==link.link?"dark:bg-blue-800 bg-pink-600":"dark:bg-blue-600 bg-pink-400"} px-3 py-2 bg-blue-100 dark:hover:bg-blue-800  hover:bg-pink-600 rounded-xl text-white
                      flex items-center gap-x-2`}
                      key={index}
                      href={link.link}
                      onClick={closeSideNav}
                      >
                       <link.logo/> 
                       {link.name}
                    </Link>
                ))}
        </div>
        </div>
  )
}

const Close = ()=>(
    <div className='w-7 h-7 fill-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
    </div>
)

const links = [
    {
    name: "About Me",
    link: "#aboutme",
    logo: FaUser,
},
{
    name: "Projects",
    link: "#projects",
    logo: FaProjectDiagram,
},
{
    name: "Skills",
    link: "#skills",
    logo: GiSkills,
},
{
    name: "Contact Me",
    link: "#contactme",
    logo: IoMdMail,
},

]
export default MobileSidebar
