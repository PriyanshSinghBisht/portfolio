import React, { useState, useEffect } from "react";
import { GoPaperAirplane } from "react-icons/go";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Heading from "./ui/Heading";

const ContactMe = () => {
  const [fullMessage, setFullMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      fullMessage.name.length > 0 &&
      fullMessage.email.length > 0 &&
      fullMessage.message.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [fullMessage.name, fullMessage.email, fullMessage.message]);

  const handleSend = async (e: any) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const res = await axios.post("api/message", fullMessage);
      setFullMessage({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div id="contactme" className="dark:text-white text-black">
      <Heading caption="Get In Touch" />

      <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 glass dark:glass-dark rounded-2xl p-6 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-4 dark:text-white text-slate-900">Let&apos;s Connect</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <p className="font-medium dark:text-white text-slate-900">priyanshbisht5@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                <p className="font-medium dark:text-white text-slate-900">Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={handleSend} 
          className="lg:w-1/2 glass dark:glass-dark rounded-2xl p-6 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-slate-300 text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                minLength={3}
                placeholder="John Doe"
                required
                disabled={disabled}
                onChange={(e) => setFullMessage({ ...fullMessage, name: e.target.value })}
                value={fullMessage.name}
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-300 dark:text-white placeholder-slate-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-slate-300 text-slate-700">
                Your Email
              </label>
              <input
                type="email"
                required
                disabled={disabled}
                onChange={(e) => setFullMessage({ ...fullMessage, email: e.target.value })}
                value={fullMessage.email}
                name="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-300 dark:text-white placeholder-slate-500"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-slate-300 text-slate-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              onChange={(e) => setFullMessage({ ...fullMessage, message: e.target.value })}
              value={fullMessage.message}
              required
              disabled={disabled}
              className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-300 min-h-[120px] resize-none dark:text-white placeholder-slate-500"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={disabled || buttonDisabled}
            className={`
              w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300
              ${disabled || buttonDisabled
                ? "bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-gradient-primary text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
              }
            `}
            whileHover={!buttonDisabled && !disabled ? { scale: 1.02 } : {}}
            whileTap={!buttonDisabled && !disabled ? { scale: 0.98 } : {}}
          >
            {disabled ? (
              <span className="flex items-center gap-2">
                <ImSpinner2 className="animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message
                <GoPaperAirplane className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactMe;