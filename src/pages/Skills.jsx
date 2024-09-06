import html from "../assets/images/html.png";
import react from "../assets/images/react.png";
import node from "../assets/images/node-js.png";
import mongodb from "../assets/images/mongodb.png";
import javascript from "../assets/images/js.png";
import tailwind from "../assets/images/tailwind-css.png";
import express from "../assets/images/express-js.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      name="skills"
      className="h-screen overflow-hidden px-[14rem] max-xl:h-full max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-[2rem] pb-[4rem]"
    >
      <h1 className="text-center py-20 text-[1.8rem]">Skills</h1>

      <div className="flex flex-wrap items-center justify-between gap-14 mx-[10rem] max-xl:mx-[6rem] max-md:mx-[2rem] max-sm:mx-0 max-md:gap-8 max-[500px]:gap-4 my-anima">
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={react} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400] text-md">React</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={node} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">Node JS</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={mongodb} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">MongoDB</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={javascript} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">Javascript</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={tailwind} alt="" className="w-14 h-14 object-contain" />
          </span>
          <h3 className="font-[400]">Tailwind CSS</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={express} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">Express JS</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={html} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">HTML5</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={html} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">HTML5</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={html} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">HTML5</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={html} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">HTML5</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={html} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">HTML5</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={html} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">HTML5</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={html} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">HTML5</h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="grid place-items-center p-4 rounded-full bg-blue-200">
            <img src={html} alt="" className="w-14 h-14 object-cover" />
          </span>
          <h3 className="font-[400]">HTML5</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
