import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";


const Footer = () => {
    return (
        <div className='bg-white  dark:bg-[#1b2053] flex flex-row flex-wrap gap-x-24 px-5 text-black dark:text-white py-10 sm:justify-center justify-start gap-y-10 text-start text-sm font-normal'>
            <div className=" text-[13px] sm:text-left sm:mt-0 mt-3">
                <p className="font-bold sm:text-md text-sm">Priyansh Singh Bisht</p>
                <p className="">March 2024</p>
            </div>

            <div className="flex flex-col ">
                <h2 className="font-semibold text-md mb-2 ">Links</h2>

                {links.map((link, index) => (
                    <Link
                        className='hover:text-sky-500'
                        key={index}
                        href={link.link}
                    >
                        {link.name}</Link>

                ))}

            </div >

            <div className="flex flex-col gap-y-4">
                <h1 className="text-md ">Social Media</h1>
                <div className="flex gap-x-2 sm:self-end mb-4 ">
                    {socialMedia.map((media: any) => (
                        <div key={media.name}>
                            <a href={media.link} target="_blank"><media.icon className="w-5 h-5 dark:text-white text-black dark:hover:text-blue-400 hover:text-slate-700" /></a>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="font-semibold text-md mb-2 ">Contact Info</h2>
                <ul>
                    <li>Email : priyanshbisht5@gmail.com</li>
                    <li>Address : Uttar Pradesh, India</li>
                    <li>Phone : +91 ----------</li>
                </ul>

            </div>
            <p className="font-normal text-center w-full">copyright ©  2024 By Priyansh Singh Bisht</p>
        </div>
    )
}

const socialMedia = [
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
        link: "https://www.linkedin.com/in/priyansh-bisht-a45751235",
    },
    {
        name: "Github",
        icon: FaGithub,
        link: "https://github.com/PriyanshSinghBisht",
    }, {
        name: "Leetcode",
        icon: SiLeetcode,
        link: "https://leetcode.com/u/Priyansh2552/"
    }
];

const links = [
    {
        name: "About Me",
        link: "#aboutme",
    },
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Contact Me",
        link: "#contactme",
    },

]
export default Footer