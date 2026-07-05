import React from 'react'
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div id="aboutme" className='w-full flex sm:flex-row flex-col-reverse min-h-[85vh] items-center'>
            <div className="left sm:w-[50%] w-full dark:text-white text-black flex flex-col justify-center items-center sm:items-start">
                <div className='max-w-[550px] z-10 relative'>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='text-sm sm:text-base font-medium mb-2 text-indigo-500 dark:text-indigo-400 tracking-wider uppercase'
                    >
                        Hello, I&apos;m
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='md:text-5xl sm:text-4xl text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                    >
                        Priyansh Singh Bisht
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='md:text-2xl sm:text-xl text-lg font-medium mb-6 text-slate-600 dark:text-slate-400'
                    >
<span className="dark:text-white text-slate-800">
                            I&apos;m a{' '}
                          </span>
                        <span className='text-indigo-500 dark:text-indigo-400 font-semibold'>
                            <Typewriter
                                words={['MCA Graduate', 'Full-Stack Developer', 'UI/UX Designer', 'Problem Solver']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className='text-base leading-relaxed text-slate-600 dark:text-slate-400 mb-8'
                    >
                        Dedicated full-stack developer with an MCA (May 2026). Proficient in building scalable web applications using modern frameworks, with a strong focus on clean architecture, performance optimization, and intuitive user experiences.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="mt-4 flex flex-col sm:flex-row gap-4"
                >
                    <a className="group relative px-6 py-3 rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-glow"
                        href="/resume/resume.pdf"
                    >
                        <span className="absolute inset-0 bg-gradient-primary animate-gradient"></span>
                        <span className="absolute inset-[2px] rounded-full bg-primary dark:bg-slate-900 transition-all duration-300 group-hover:bg-opacity-90"></span>
                        <span className="relative z-10 flex items-center gap-2 text-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download CV
                          </span>
                    </a>
                    <a target="_blank" href="https://github.com/PriyanshSinghBisht" className="group relative px-6 py-3 rounded-full font-medium glass dark:glass-dark overflow-hidden transition-all duration-300 hover:shadow-glow">
                        <span className="relative z-10 flex items-center gap-2 dark:text-white text-slate-800 group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </span>
                    </a>
                </motion.div>
            </div>
            <div className="right sm:w-[50%] w-full flex justify-center items-center z-0 mb-8 sm:mb-0">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className='relative w-full max-w-[400px] aspect-square animate-float'
                >
                    <div className='absolute inset-0 rounded-full bg-gradient-primary animate-pulse-glow opacity-30 blur-3xl'></div>
                    <div className='relative z-10 w-full h-full flex items-center justify-center'>
                        <img src="/me/me.png" alt="mypic" className="w-[70%] h-[70%] object-contain drop-shadow-2xl" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero