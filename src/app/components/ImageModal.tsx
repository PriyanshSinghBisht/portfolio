import React from 'react'

interface ImageModalProps{
    src: string;
    onClose: ()=> void;
    isOpen: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
    src,
    onClose,
    isOpen,
}) => {
  return (
    <div className={`
      fixed
      top-0
      left-0
      w-full
      h-full
      z-50
      bg-[rgba(0,0,0,0.5)]
      ${isOpen?"flex": "hidden"}
      items-center
      justify-center
      `}
      onClick={onClose}
      >
        <img
         src={src}
         className='w-full max-w-[900px] h-auto 
          max-h-[90%]
          '
        />
        
        </div>
  )
}

export default ImageModal