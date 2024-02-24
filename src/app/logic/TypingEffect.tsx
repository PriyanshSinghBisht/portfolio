'use client';

import { TypeAnimation } from 'react-type-animation';


const TypingEffect = () => {

  return (
    <TypeAnimation
    sequence={[
      'I am Priyansh Singh Bisht',
      1000,
      'I am a Web Developer',
      1000,
      'I am a Web Designer',
      1000,
    ]}
    wrapper="span"
    speed={50}
    className="text-blue-500 
    break-words sm:text-5xl text-4xl font-[400] sm:leading-[80px] 
    leading-[50px] max-[660px]:text-center"
    repeat={Infinity}
  />
  )
}

export default TypingEffect