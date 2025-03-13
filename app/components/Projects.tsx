import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "./ui/Heading";

const Projects = () => {

    return (
        <div className="flex flex-col w-full items-center" id="projects">
            <Heading caption="Projects" />
            <div className="max-w-[800px] flex flex-col sm:gap-y-10 gap-y-4 [transform-style:preserve-3d] bg-transparent">
                {projects.map((project, index) => (
                    <motion.div key={index} className="group sm:p-5 p-2 backdrop-blur-lg dark:bg-slate-200/20 bg-slate-200 rounded-lg relative overfow-hidden
               "
                        initial={{ opacity: 0, translateY: 200 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="[backface-visibility:hidden] bg-[#0009] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY[0deg]] duration-1000">
                            <img src={project.imgUrl} alt="project" className="w-full h-full bg-[#0009] " />
                        </div>

                        <div className=" font-bold absolute sm:bottom-10 top-0 sm:text-2xl text-lg left-0 bg-green-200 w-full h-full px-5 [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:[transform:rotateY(0deg)] duration-1000 rounded-lg text-center flex flex-col items-center justify-center 
                     ">
                            <h1 className="text-center mt-4">{project.title}</h1>
                            <p className="text-[14px] leading-[1.2] font-[500] text-blue-800 max-w-[500px] mb-3 ellips">{project.description}</p>
                            <div className="flex flex-wrap justify-center gap-x-1">
                                {project.tages.map((tag, index: number) => (
                                    <span key={index} className="px-1 py-[1px] bg-slate-800 text-white rounded-lg text-[13px]">{tag}</span>
                                ))}
                            </div>
                            <div className="flex mt-5 sm:mb-5 mb-1  gap-x-4">
                                <a href={project.githubUrl} target="_blank"><FaGithub className="cursor-alias min-[560px]:w-14 min-[560px]:h-14 w-8 h-8 hover:fill-blue-500" /></a>
                                <a href={project.websiteUrl} target="_blank"><FaGlobe className="cursor-alias min-[560px]:w-14 min-[560px]:h-14 w-8 h-8 hover:fill-blue-500" /></a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

const projects = [
    {
        title: "Simple Calculator",
        description: "This is simple calculator with storing history of calculation.",
        websiteUrl: "https://calculator555.netlify.app/",
        githubUrl: "https://github.com/PriyanshSinghBisht/Simple-Calculator",
        imgUrl: "/projects/calculator.png",
        tages: ["Reactjs", "math", "Responsive"],
    },
    {
        title: "Messenger Clone",
        description: "this website have features as real time communication and active user states using web socket via pusher api",
        websiteUrl: "https://messenger-clone-ten-lilac.vercel.app/",
        githubUrl: "https://github.com/PriyanshSinghBisht/messenger-clone",
        imgUrl: "/projects/messenger.png",
        tages: ["Nextjs@13", "pusher api", "prisma", "mongodb", "next auth"],
    },
    {
        title: "Lyrics",
        description: "this api get data from multiple shazam apis and give the songs with state managment through reaudx-toolkit",
        websiteUrl: "https://priyansh-lyriks.netlify.app/",
        githubUrl: "https://github.com/PriyanshSinghBisht/lyrics",
        imgUrl: "/projects/lyriks.png",
        tages: ["Reactjs", "reduxjs", "reduxjs/toolkit", "axios", "shazam-cor api"],
    },
    {
        title: "Netflix Clone",
        description: "This website have clone login page of netflix but other uis are different from original website design by me.",
        websiteUrl: "https://priyanshsinghbisht.github.io/netflix-clone",
        githubUrl: "https://github.com/PriyanshSinghBisht/netflix-clone",
        imgUrl: "/projects/netflix-clone.png",
        tages: ["Reactjs", "tmdb api", "react-router-dom", "responsive"],
    },

    {
        title: "Discord Clone",
        description: "this is discord clone with all features of real discord to use this you first need to login then create your server then send link to the friend whom to want to join the server.",
        websiteUrl: "https://discord-clone-priyansh.vercel.app/",
        githubUrl: "https://github.com/PriyanshSinghBisht/discord-clone",
        imgUrl: "/projects/discord-clone.png",
        tages: ["nextjs@13", "socket.io", "shadcn-ui", "mysql", "prisma"],
    }
]
export default Projects