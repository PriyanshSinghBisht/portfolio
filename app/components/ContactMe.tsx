import React, { useState, useEffect } from "react";
import { GoPaperAirplane } from "react-icons/go";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

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
     <h1 className="text-center sm:text-4xl text-2xl text-black dark:text-white font-bold lg:my-10 my-5">Contact Me</h1>
      <form action="" className="max-w-[800px] mx-auto  p-5">
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
            type="text"
            name="name"
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
          outline-none border-none focus:[box-shadow:0_0_0px_3px_#0af]"
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
            type="text"
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
          outline-none border-none focus:[box-shadow:0_0_0px_3px_#0af]"
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
          placeholder="Send Message..."
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
            outline-none border-none focus:[box-shadow:0_0_0px_3px_#0af]
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
             ${
               disabled || buttonDisabled
                 ? "bg-slate-500"
                 : `
             dark:bg-blue-800 dark:hover:bg-blue-900
             bg-blue-700  hover:bg-blue-600`
             }
          `}
          disabled={disabled || buttonDisabled}
          onClick={handleSend}
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
                <span className="hidden group-hover:block ">
                  <GoPaperAirplane />
                </span>
              </div>
            )}
          </div>
        </motion.button>
      </form>
    </div>
  );
};

export default ContactMe;