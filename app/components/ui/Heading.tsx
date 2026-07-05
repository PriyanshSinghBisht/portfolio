import React from 'react'
import { motion } from "framer-motion";

const Heading = ({ caption }: { caption: string }) => {
  return (
    <motion.div 
      className="lg:my-20 sm:my-10 my-10 w-full flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-sm sm:text-base font-medium text-indigo-500 dark:text-indigo-400 tracking-widest uppercase mb-2">
        Portfolio
      </h2>
      <h1 className="text-center sm:text-5xl text-3xl font-bold dark:text-white text-slate-900 mb-4">
        {caption}
      </h1>
      <div className="relative w-20 h-1">
        <div className="absolute inset-0 bg-gradient-primary rounded-full animate-gradient"></div>
      </div>
    </motion.div>
  );
};

export default Heading;