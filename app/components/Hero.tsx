import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className='w-full flex sm:flex-row flex-col-reverse min-h-[80vh]'>
            <div className="left sm:w-[50%] w-full dark:text-white text-black flex flex-col justify-center items-cener">
                <div className='max-w-[500px] z-10 relative'>
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className='md:text-3xl text-2xl font-semibold pb-2 font-merienda'>Hellow !</motion.h1>
                    <motion.h4
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className='md:text-5xl sm:text-5xl text-3xl font-bold mb-5 font-pacifico'>I am
                        <span className='text-purple-500 '> Priyansh Singh Bisht</span></motion.h4>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >I am currently pursuing Mca with a passion for web development and design. Check out my portfolio to see my work and explore my journey in the world of web development.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="mt-8 flex flex-col sm:flex-row gap-y-5 sm:gap-y-0">
                    <a className="rounded-sm bg-purple-500 text-white px-4 py-2 mr-2 bg-gradient-to-br 
                    from-purple-500 to-purple-700 w-fit
                    hover:from-purple-700 hover:to-purple-500 hover:shadow [cursor:url('/download.png')]"
                        href="/resume/resume.pdf"
                    >Download CV</a>
                    <a target="_blank" href="https://github.com/PriyanshSinghBisht" className="block w-fit border border-purple-700 hover:text-purple-500 px-4 py-2 mr-2 ">Visit Github</a>
                </motion.div>
            </div>
            <div className="right sm:w-[50%] w-full flex justify-center items-center z-0">
                <motion.div
                    initial={{ scale: 0, rotate: 360 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                    className='relative w-full aspect-square'>
                    <img src="/me/blue-back.png" alt="blue-back" />
                    <img src="/me/pink-back.png" alt="pink-back" />
                    <img src="/me/me.png" alt="mypic" />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero