import Link from 'next/link'
import ThemeButton from './ThemeButton';
import { motion } from 'framer-motion';

const Navbar = ({ openSideNav, changeNavColor }: {
  openSideNav: () => void,
  changeNavColor: boolean
}) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      changeNavColor 
        ? "glass dark:glass-dark shadow-lg" 
        : "bg-transparent"
    }`}>
      <nav className="flex items-center justify-between w-full md:py-4 sm:py-3 py-3 lg:px-20 min-[500px]:px-10 px-5">
        <Link href="/" className="relative group">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            PSB
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <div className='sm:flex hidden gap-1'>
          {links.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className='px-4 py-2 rounded-full font-medium text-sm dark:text-slate-300 text-slate-700 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300'
                href={link.link}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeButton />
          <button 
            onClick={openSideNav} 
            className='sm:hidden flex p-2 rounded-lg hover:bg-indigo-500/10 transition-colors'
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 dark:text-white text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

const links = [
  { name: "About", link: "#aboutme" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contactme" },
]

export default Navbar