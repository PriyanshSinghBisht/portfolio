import Link from 'next/link'
import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaEnvelope, FaTools } from "react-icons/fa";

const MobileSidebar = ({ closeSideNav, currLink }) => {
  return (
    <motion.div 
      className='glass dark:glass-dark h-full w-[280px] gap-y-4 flex flex-col py-6'
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex items-center justify-between px-6 mb-6'>
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          PSB
        </span>
        <button 
          onClick={closeSideNav}
          className='p-2 rounded-lg hover:bg-indigo-500/10 transition-colors'
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 dark:text-white text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <nav className='flex flex-col gap-y-2 px-4'>
        {links.map((link, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              className={`flex items-center gap-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                currLink === link.link
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "text-slate-600 dark:text-slate-400 hover:bg-indigo-500/10 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
              href={link.link}
              onClick={closeSideNav}
            >
              <link.logo className="w-5 h-5" />
              {link.name}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  )
}

const links = [
  { name: "About Me", link: "#aboutme", logo: FaUser },
  { name: "Projects", link: "#projects", logo: FaProjectDiagram },
  { name: "Skills", link: "#skills", logo: FaTools },
  { name: "Contact Me", link: "#contactme", logo: FaEnvelope },
]

export default MobileSidebar