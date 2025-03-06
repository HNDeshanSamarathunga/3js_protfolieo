import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What I have done</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col px-4 mt-10 space-y-10 sm:px-6 md:px-12 lg:px-24">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1d1836] text-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Icon */}
            <div className="absolute -left-4 sm:-left-7 top-5 w-12 sm:w-14 h-12 sm:h-14 rounded-full flex justify-center items-center bg-[#232631] shadow-md">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[50%] h-[50%] object-contain"
              />
            </div>

            {/* Content */}
            <div className="ml-5 sm:ml-4">
              <h3 className="text-[20px] sm:text-[24px] font-bold">{experience.title}</h3>
              <p className="text-secondary text-[14px] sm:text-[16px] font-semibold">
                {experience.company_name}
              </p>
              <p className="text-sm text-gray-400">{experience.date}</p>
            </div>

            {/* Points List */}
            <ul className="mt-4 ml-4 space-y-2 list-disc sm:mt-5 sm:ml-5">
              {experience.points.map((point, i) => (
                <motion.li
                  key={i}
                  className="text-white-100 text-[12px] sm:text-[14px] tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
