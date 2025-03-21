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

  useEffect(() => {
    console.log("rerendering");
  });

  return (
    <div className=' mx-auto w-full h-full dark:bg-slate-900 bg-slate-400'>

      {/* MobileSideNav Start */}
      <div className={`fixed top-0 ${isNavbarOpen ? "left-[0%]" : "-left-[100%] "}
                    h-full z-40 flex sm:hidden  duration-1000`} >
        <MobileSidebar
          currLink={currLink}
          closeSideNav={closeSideNav} />
      </div>
      {/* MobileSideNav End */}
      <main
        className="bg-slate-300 dark:bg-primary w-full h-full overflow-x-hidden relative flex flex-col gap-y-10"
        onScroll={handleScroll}>
        {/* Gradients Start */}
        <div className=" dark:block circle1   lg:w-[700px] sm:w-[400px] w-[350px] 
                  aspect-square rounded-full absolute sm:top-[100px] sm:-left-[200px]
                  top-[5%] -left-[20%] z-0"
        />
        <div className=" dark:block circle2 lg:w-[600px] sm:w-[500px] w-[350px] aspect-square rounded-full absolute
                  sm:-top-[200px] sm:-right-[150px] top-[50%] -right-[20%] z-0"
        />
        {/* Gradients End */}
        <div className={`${isNavbarOpen ? "w-full h-full" : "w-0 h-0"} fixed dark:bg-black/20 top-0 left-0 z-20`}
          onClick={closeSideNav}>
        </div>
        <Toaster />
        <Navbar openSideNav={openSideNav} changeNavColor={ChangeNavColor} />
        <div className='lg:px-20 max-w-[1300px] mx-auto min-[500px]:px-10 px-5 sm:gap-y-10 gap-y-5 w-full z-10'>
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