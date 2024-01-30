'use client'

import {motion} from 'framer-motion';
import Hero from "./maincomponents/Hero"
import Navbar from "./components/Navbar"
import Projects from "./maincomponents/Projects";
import Skills from "./maincomponents/Skills";
import Contact from './maincomponents/Contact';
import  { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

export default function Home() {

  return (
     <div className="
      bg-zink-200
      dark:bg-black
      text-black
      dark:text-white
     ">
       <Toaster />   
       <Navbar/>
      <div className='overflow-x-hidden w-full'>
       <Hero />
       <Projects />
       <Skills/>
       <Contact />
       <Footer/>
       </div>       
     </div>     
  )
}
