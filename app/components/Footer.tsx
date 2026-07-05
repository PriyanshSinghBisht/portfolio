import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="relative mt-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-purple-500/10"></div>
            <div className="relative glass dark:glass-dark">
                <div className="max-w-6xl mx-auto px-5 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <motion.div 
                            className="md:col-span-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/" className="inline-block mb-4">
                                <span className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    PSB
                                </span>
                            </Link>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Full-stack developer | MCA Graduate (May 2026). Experienced in building scalable web applications with modern JavaScript frameworks and a focus on performance and user-centric design.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold mb-4 dark:text-white text-slate-900">Navigation</h3>
                            <ul className="space-y-2">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link 
                                            href={link.link}
                                            className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold mb-4 dark:text-white text-slate-900">Contact</h3>
                            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <li>priyanshbisht5@gmail.com</li>
                                <li>Uttar Pradesh, India</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-semibold mb-4 dark:text-white text-slate-900">Connect</h3>
                            <div className="flex gap-3">
                                {socialMedia.map((media: any, index) => (
                                    <motion.a
                                        key={index}
                                        href={media.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full glass dark:glass-dark flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300"
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <media.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            © {currentYear} Priyansh Singh Bisht. All rights reserved.
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">
                            Built with passion and React
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const socialMedia = [
    { name: "Facebook", icon: ImFacebook2, link: "" },
    { name: "Instagram", icon: RiInstagramFill, link: "" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/priyansh-bisht-a45751235" },
    { name: "GitHub", icon: FaGithub, link: "https://github.com/PriyanshSinghBisht" },
    { name: "LeetCode", icon: SiLeetcode, link: "https://leetcode.com/u/Priyansh2552/" }
];

const links = [
    { name: "About Me", link: "#aboutme" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contactme" },
]

export default Footer