'use client';

import { TypeAnimation } from 'react-type-animation';


interface TypingEffectProps{
   stringArray: string[];
   delay: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
   stringArray,
   delay
}) => {

  
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
    className="text-blue-500 w-[100px]
    break-words text-5xl font-bold leading-[80px]"
    repeat={Infinity}
  />
  )
}

export default TypingEffect