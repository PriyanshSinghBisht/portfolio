import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='w-full sm:py-5 py-2 bg-white dark:bg-[#1b2053] flex flex-col sm:items-auto items-center text-black dark:text-white'>
        <div className="flex gap-x-2 sm:self-end mr-3 ">
            {socialMedia.map((media: any)=>(
                <div key={media.name}>
                   <a href={media.link} target="_blank"><media.icon className="w-5 h-5 dark:text-white text-black dark:hover:text-blue-400 hover:text-slate-700" /></a>
                </div>
            ))}
        </div>
       
       <p className="text-center my-2">@copyright2024</p>
       <div className="sm:ml-3 mb-2 text-[13px] sm:text-left text-center w-full">
            <p>Author: Priyansh Singh Bisht</p>
            <p>Date: March 2024</p>
       </div>

    </footer>
  )
}

const socialMedia =[
    {
        name: "Fackbook",
        icon: ImFacebook2,
        link: "",
    },
    {
        name: "Instagram",
        icon: RiInstagramFill,
        link: "",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "",
    },
    {
        name: "Github",
        icon: FaGithub,
        link: "https://github.com/PriyanshSinghBisht",
    },
]
export default Footer