import React from "react";
import { Button } from "../buttons/Button";
import { motion } from "framer-motion";

export const Contact: React.FC = () => {
  return (
    <div id="contact">
      <div className="h-screen flex justify-center items-center font-montserrat">
        <motion.div
          className="container mx-auto px-96"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-2 text-[#007AFF]">
              Get In Touch
            </h2>
            <p className="text-xl">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
          </motion.div>

          <motion.form
            className="mt-12"
            action=""
            method="POST"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-10">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#007AFF]"
                  placeholder="John Doe"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#007AFF]"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>
              <div className="mt-10 relative col-span-2">
                <textarea
                  id="message"
                  name="message"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#007AFF]"
                  placeholder="message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Your Message
                </label>
              </div>
              <motion.div
                className="col-span-2 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button type="submit" className="mt-10 w-80 py-3">
                  Send
                </Button>
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};
