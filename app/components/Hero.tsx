import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex sm:flex-row flex-col-reverse'>
        <div className="left sm:w-[50%] w-full dark:text-white text-black flex flex-col justify-center items-cener">
            <div className='max-w-[500px]'>
                <h1 className='md:text-3xl text-2xl font-semibold pb-2 '>Hellow !</h1>
                <h4 className='md:text-5xl text-4xl font-bold mb-5'>I am Priyansh Singh Bisht</h4>
                <p>I am a third-year BCA student with a passion for web development and design. Check out my portfolio to see my work and explore my journey in the world of web development.</p>
            </div>
        </div>
        <div className="right sm:w-[50%] w-full flex justify-center items-center">
            <div className='relative w-full aspect-square'>
                <img src="/me/blue-back.png" alt="blue-back" />
                <img src="/me/pink-back.png" alt="pink-back" />
                <img src="/me/me.png" alt="mypic" />
            </div>
        </div>
    </div>
  )
}

export default Hero