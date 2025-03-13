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
      toast.success("Message sent successfully !");
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setDisabled(false);
    }
  };
  return (
    <div id="contactme" className="dark:text-white text-black">
      <Heading caption="Contact Me" />

      <div className="flex pb-5 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-[1/1.5] sm:flex hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636432.6857899143!2d78.21886396775244!3d27.118390318048434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39994e9f7b4a09d3%3A0xf6a5476d3617249d!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1741670442741!5m2!1sen!2sin"
            className="border-none min-w-[200px] h-full"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>

        <form onSubmit={handleSend} className="max-w-[800px] p-5 flex-1">
          <div className="flex flex-col mb-4">
            <motion.label
              htmlFor="name"
              className="p-2 font-semibold text-lg "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Your Name
            </motion.label>
            <motion.input
              type="name"
              name="name"
              min-length="3"
              placeholder="Enter Your FullName"
              required
              disabled={disabled}
              onChange={(e) =>
                setFullMessage({ ...fullMessage, name: e.target.value })
              }
              value={fullMessage.name}
              className="text-black rounded-sm p-2 
            max-w-[400px]
          flex-1 border-2 border-slate-400 
          outline-none border-none focus:ring-sky-400 focus:ring-2 ring-offset-2 "
              initial={{ scale: 0.4 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.label
              htmlFor="email"
              className="p-2 font-semibold text-lg
           "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Your Email
            </motion.label>
            <motion.input
              type="email"
              required
              disabled={disabled}
              onChange={(e) =>
                setFullMessage({ ...fullMessage, email: e.target.value })
              }
              value={fullMessage.email}
              name="email"
              placeholder="Enter Your Email"
              className="text-black rounded-sm p-2 
          max-w-[400px]
          flex-1 
          outline-none border-none focus:ring-sky-400 focus:ring-2 ring-offset-2 "
              initial={{ scale: 0.4 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            />
          </div>
          <motion.label
            htmlFor="Message"
            className="p-2 font-semibold text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            Message
          </motion.label>
          <motion.textarea
            name="comment..."
            placeholder="Enter message here..."
            onChange={(e) =>
              setFullMessage({ ...fullMessage, message: e.target.value })
            }
            value={fullMessage.message}
            required
            disabled={disabled}
            className="
            w-full
            p-5 
            text-black 
            rounded-sm
            my-4
            min-h-[150px]
            outline-none border-none focus:ring-sky-400 focus:ring-2 ring-offset-2 
            "
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className={`
            w-full 
            rounded-lg
             text-white
             group
             py-2
             ${disabled || buttonDisabled
                ? "bg-gradient-to-r from-slate-400 to-slate-200"
                : `
             bg-gradient-to-r from-blue-500 to-green-500/50

             bg-blue-700  hover:bg-blue-600`
              }
          `}
            // disabled={disabled || buttonDisabled}
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
          >
            <div className="flex items-center justify-center gap-2">
              {disabled ? (
                <div className="loading text-blue-700 text-xl">
                  <ImSpinner2 />
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  Send Me
                  <span className="group-hover:rotate-[-25deg] duration-300">
                    <GoPaperAirplane />
                  </span>
                </div>
              )}
            </div>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;