// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import universityLogo from "../assets/university-logo.jpg"; // Replace with your actual image path
import schoolLogo from "../assets/school-logo.jpg"; // Replace with your actual image path

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Education = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center lg:items-start mt-10"
      >
        <motion.h1 variants={childVariants} className="text-4xl font-bold pb-4">
          My Education
        </motion.h1>

        <motion.ul variants={containerVariants} className="space-y-8 max-w-lg">
          {/* University Education */}
          <motion.li
            variants={childVariants}
            className="border-b border-stone-300 pb-4 flex items-start"
          >
            {/* University Logo */}
            <a
              href="http://www.mmmut.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={universityLogo}
                alt="University Logo"
                className="w-24 h-auto mr-4"
              />
            </a>
            <div>
              <h3 className="text-2xl font-semibold">
                B.Tech | Computer Science and Engineering
              </h3>
              <p>Madan Mohan Malaviya University of Technology, 2022-2026</p>
            </div>
          </motion.li>

          {/* High School Education */}
          <motion.li
            variants={childVariants}
            className="border-b border-stone-300 pb-4 flex items-start"
          >
            {/* School Logo */}
            <a
              href="https://www.stjosephlucknow.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={schoolLogo}
                alt="School Logo"
                className="w-24 h-auto mr-4"
              />
            </a>
            <div>
              <h3 className="text-2xl font-semibold">
                XII | St.Joseph College, 2020-2021
              </h3>
            </div>
          </motion.li>

          <motion.li
            variants={childVariants}
            className="border-b border-stone-300 pb-4 flex items-start"
          >
            {/* School Logo */}
            <a
              href="https://www.stjosephlucknow.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={schoolLogo}
                alt="School Logo"
                className="w-24 h-auto mr-4"
              />
            </a>
            <div>
              <h3 className="text-2xl font-semibold">
                X | St.Joseph College, 2018-2019
              </h3>
            </div>
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Education;
