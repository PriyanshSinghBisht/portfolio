import Link from 'next/link'
import ThemeButton from './ThemeButton';
import { Titan_One } from "@next/font/google"

const titan_one = Titan_One({
  subsets: ["latin"],
  weight: "400"
})

const Navbar = ({ openSideNav, changeNavColor }: {
  openSideNav: () => void,
  changeNavColor: boolean
}) => {
  return (
    <header className={`dark:text-white text-black flex items-center 
    justify-between w-full md:py-5 sm:py-3 py-2 sticky top-0 z-10 lg:px-20  min-[500px]:px-10 px-5 transition-background duration-1000 
    ${changeNavColor ? "bg-white dark:bg-[var(--primary)]" : ""}`} id="aboutme">
      <div onClick={openSideNav} className='sm:hidden flex 
       '><Menu /></div>
      <p className={`${titan_one.className} text-[25px]  [text-shadow:_0_4px_8px_#000a] dark:[text-shadow:_0_4px_10px_#fff9]`}>PSB</p>
      <div className='sm:flex hidden'>
        {links.map((link, index) => (
          <Link
            className='px-3 py-2 font-semibold hover:underline'
            key={index}
            href={link.link}
          >
            {link.name}</Link>

        ))}
      </div>
      <ThemeButton />
    </header>
  )
}

const Menu = () => (
  <div className='w-6 h-6 dark:fill-white fill-black sm:hidden flex'>
    <svg viewBox="0 0 18 15">
      <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
      <path d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
      <path d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
    </svg>
  </div>
);

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
export default Navbar