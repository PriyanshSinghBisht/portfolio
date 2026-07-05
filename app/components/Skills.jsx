import { motion } from "framer-motion";
import Heading from "./ui/Heading";

const Skills = () => {
  return (
    <div id="skills" className="my-10">
      <Heading caption="Skills & Tech Stack" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-5xl mx-auto">
        {skills.map((sk, index) => (
          <motion.div
            key={sk.name}
            className="group relative p-4 rounded-2xl glass dark:glass-dark hover-lift cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                <img
                  src={`/skills/${sk.name}.png`}
                  alt={sk.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium dark:text-slate-300 text-slate-700 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors capitalize">
                {sk.name}
              </span>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-indigo-500/0 group-hover:border-indigo-500/30 transition-colors duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const skills = [
  { name: "html" },
  { name: "css" },
  { name: "javascript" },
  { name: "tailwindcss" },
  { name: "reactjs" },
  { name: "nextjs" },
  { name: "nodejs" },
  { name: "mongodb" },
  { name: "mysql" },
  { name: "github" },
  { name: "git" },
  { name: "typescript" },
];

export default Skills;