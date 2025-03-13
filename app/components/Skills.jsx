import { motion } from "framer-motion";
import Heading from "./ui/Heading";

const Skills = () => {
  return (
    <div id="skills" className="my-10">
      <Heading caption="Skills" />
      <div
        className="grid min-[390px]:grid-cols-3
         min-[768px]:grid-cols-5 min-[610px]:grid-cols-4 grid-cols-2
        w-[90%] place-content-between text-black dark:text-white sm:gap-x-2 mx-auto"
      >
        {skills.map((sk, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            // viewport={{once:true}}
            key={sk.name}
            className="flex justify-center min-[310px]:m-3 m-2 p-1 bg-white w-fit  rounded-lg 
            shadow-xl dark:bg-blue-900  relative z-0 "
          >
            <div
              className="relative z-10 hover:shadow-lg dark:hover:shadow-white/50 hover:shadow-black 
            transition-all duration-400 bg-white p-2 hover:-skew-x-[5deg]"
            >
              <img
                src={`/skills/${sk.name}.png`}
                alt={sk.name}
                className="w-20 h-20 object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const skills = [
  {
    name: "html",
  },
  {
    name: "css",
  },
  {
    name: "javascript",
  },
  {
    name: "tailwindcss",
  },
  {
    name: "reactjs",
  },
  {
    name: "nextjs",
  },
  {
    name: "nodejs",
  },
  {
    name: "mongodb",
  },
  {
    name: "mysql",
  },
  {
    name: "github",
  },
  {
    name: "git",
  },
];

export default Skills;
