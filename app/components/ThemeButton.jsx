import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [mounted, setMounted] = useState(false);

  const handleChangeTheme = (e) => {
    e.stopPropagation();
    if (darkTheme) {
      window.localStorage.theme = 'light'
      document.documentElement.classList.remove('dark');
    } else {
      window.localStorage.theme = 'dark'
      document.documentElement.classList.add('dark');
    }
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    setMounted(true);
    if (!window.localStorage.getItem("theme")) {
      window.localStorage.setItem("theme", "dark");
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkTheme(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkTheme(false);
    }
  }, []);

  if (!mounted) return <div className="w-8 h-8"></div>;

  return (
    <motion.button
      className="relative w-10 h-10 rounded-full glass dark:glass-dark flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={handleChangeTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {darkTheme ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-white"
          >
            <FiSun className="w-full h-full" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-slate-900"
          >
            <FiMoon className="w-full h-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeButton;