'use client'

import { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';

import Navbar from './components/Navbar'
import MobileSidebar from './components/MobileSidebar'
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Page = () => {
  const params = useParams();
  const [currLink, setCurrLink] = useState("/#aboutme");
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [ChangeNavColor, setChangeNavColor] = useState(false);
  const openSideNav = () => setNavbarOpen(true);
  const closeSideNav = () => setNavbarOpen(false);

  useEffect(() => {
    if (window.location.hash) {
      setCurrLink(window.location.hash);
    }
  }, [params])

  const handleScroll = (e: any) => {
    if (e.target.scrollTop != 0) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  }

  return (
    <div className='min-h-screen w-full dark:bg-primary bg-slate-100'>
      <AnimatePresence>
        {isNavbarOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSideNav}
            />
            <div className='fixed top-0 left-0 h-full z-40 sm:hidden'>
              <MobileSidebar
                currLink={currLink}
                closeSideNav={closeSideNav}
              />
            </div>
          </>
        )}
      </AnimatePresence>
      
      <main
        className="bg-slate-100 dark:bg-primary w-full min-h-screen overflow-x-hidden relative"
        onScroll={handleScroll}
      >
        <div className="fluid-grid">
          <div className="fluid-grid-overlay" />
          <div className="fluid-grid-nodes" />
        </div>
        
        <Toaster />
        <Navbar openSideNav={openSideNav} changeNavColor={ChangeNavColor} />
        
        <div className='lg:px-20 max-w-[1400px] mx-auto min-[500px]:px-10 px-5 pt-24 pb-10'>
          <Hero />
          <Projects />
          <Skills />
          <ContactMe />
        </div>
        
        <Footer />
      </main>
    </div>
  )
}

export default Page