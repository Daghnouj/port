import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-6'>
          <div className='flex items-center text-white font-medium gap-3'>
            <FaUser className='text-secondary' />
            <span className='font-bold'>Name:</span> Raouia Daghnouj
          </div>
          <div className='flex items-center text-white font-medium gap-3'>
            <FaEnvelope className='text-secondary' />
            <span className='font-bold'>Email:</span>{" "}
            <a
              href='mailto:raouia0.daghnouj@esprit.tn'
              className='text-secondary underline'
            >
              raouia.daghnouj@esprit.tn
            </a>
          </div>
          <div className='flex items-center text-white font-medium gap-3'>
            <FaPhone className='text-secondary' />
            <span className='font-bold'>Phone:</span> +216 22407434
          </div>
          <div className='flex items-center text-white font-medium gap-3'>
            <FaGithub className='text-secondary' />
            <span className='font-bold'>GitHub:</span>{" "}
            <a
              href='https://github.com/Daghnouj'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary underline'
            >
              github.com/Daghnouj
            </a>
          </div>
          <div className='flex items-center text-white font-medium gap-3'>
            <FaLinkedin className='text-secondary' />
            <span className='font-bold'>LinkedIn:</span>{" "}
            <a
              href='https://www.linkedin.com/in/raouia-daghnouj-a4b5a7263'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary underline'
            >
              linkedin.com/in/raouia-daghnouj
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
