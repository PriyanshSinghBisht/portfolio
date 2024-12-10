import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-white  dark:bg-[#1b2053] h-32 flex sm:flex-row flex-col items-center justify-around text-black dark:text-white'>
       <div className=" text-[13px] sm:text-left text-center sm:mt-0 mt-3">
            <p className="font-bold sm:text-md text-sm">Priyansh Singh Bisht</p>
            <p className="font-medium text-sm">March 2024</p>
       </div> 
        <div className="flex gap-x-2 sm:self-end mb-4 ">
            {socialMedia.map((media: any)=>(
                <div key={media.name}>
                   <a href={media.link} target="_blank"><media.icon className="w-5 h-5 dark:text-white text-black dark:hover:text-blue-400 hover:text-slate-700" /></a>
                </div>
            ))}
        </div>
       
       <p className="text-center font-[serif]">@copyright2024</p>
    </div>
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