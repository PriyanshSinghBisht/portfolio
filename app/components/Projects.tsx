import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import Heading from "./ui/Heading";

const Projects = () => {

    return (
        <div className="flex flex-col w-full items-center" id="projects">
            <Heading caption="My Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="group relative rounded-2xl overflow-hidden glass dark:glass-dark hover-lift"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <img 
                                src={project.imgUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-xl font-bold dark:text-white text-slate-900 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    <a href={project.githubUrl} target="_blank" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                    <a href={project.websiteUrl} target="_blank" className="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                                        <FaGlobe className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tages.map((tag, index: number) => (
                                    <span 
                                        key={index} 
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
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
        description: "A simple calculator with storing history of calculations. Built with React for a smooth and interactive experience.",
        websiteUrl: "https://calculator555.netlify.app/",
        githubUrl: "https://github.com/PriyanshSinghBisht/Simple-Calculator",
        imgUrl: "/projects/calculator.png",
        tages: ["React", "JavaScript", "Responsive"],
    },
    {
        title: "Messenger Clone",
        description: "Real-time communication app with active user states using WebSocket via Pusher API. Full authentication system.",
        websiteUrl: "https://messenger-clone-ten-lilac.vercel.app/",
        githubUrl: "https://github.com/PriyanshSinghBisht/messenger-clone",
        imgUrl: "/projects/messenger.png",
        tages: ["Next.js", "Pusher API", "Prisma", "MongoDB"],
    },
    {
        title: "Modern E-commerce",
        description: "A responsive e-commerce platform showcasing clean component architecture and optimized performance with TypeScript.",
        websiteUrl: "https://ecommerce-s7zm.vercel.app/",
        githubUrl: "https://github.com/PriyanshSinghBisht/ecommerce",
        imgUrl: "/projects/ecommerce.png",
        tages: ["React", "TypeScript", "Tailwind", "Vite"],
    },
    {
        title: "Netflix Clone",
        description: "Netflix-style streaming interface with TMDB API integration for movie data and React Router for navigation.",
        websiteUrl: "https://priyanshsinghbisht.github.io/netflix-clone",
        githubUrl: "https://github.com/PriyanshSinghBisht/netflix-clone",
        imgUrl: "/projects/netflix-clone.png",
        tages: ["React", "TMDB API", "Router"],
    },
    {
        title: "Discord Clone",
        description: "Full-featured Discord clone with server creation, real-time messaging via Socket.io, and user authentication.",
        websiteUrl: "https://discord-clone-priyansh.vercel.app/",
        githubUrl: "https://github.com/PriyanshSinghBisht/discord-clone",
        imgUrl: "/projects/discord-clone.png",
        tages: ["Next.js", "Socket.io", "Shadcn UI", "MySQL"],
    }
]
export default Projects