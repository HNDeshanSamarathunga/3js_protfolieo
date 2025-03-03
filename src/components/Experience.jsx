import React from "react";
// import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-col mt-20">

      </div>
    </>
  );
};

export default SectionWrapper(Experience,"work");
