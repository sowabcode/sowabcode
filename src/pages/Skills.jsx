import css from "../assets/images/tech/CSS3.png";
import html from "../assets/images/tech/HTML5.png";
import react from "../assets/images/tech/React.png";
import node from "../assets/images/tech/Node.js.png";
import mongodb from "../assets/images/tech/MongoDB.png";
import javascript from "../assets/images/tech/JavaScript.png";
import typescript from "../assets/images/tech/TypeScript.png";
import tailwind from "../assets/images/tech/Tailwind.png";
import express from "../assets/images/tech/Express.png";
import git from "../assets/images/tech/Git.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const skills = [
  { name: "Node.js", img: node },
  { name: "Express.js", img: express },
  { name: "MongoDB", img: mongodb },
  { name: "React", img: react },
  { name: "TypeScript", img: typescript },
  { name: "JavaScript", img: javascript },
  { name: "Tailwind CSS", img: tailwind },
  { name: "HTML5", img: html },
  { name: "CSS3", img: css },
  { name: "Git", img: git },
];

const Skills = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      name="skills"
      className="h-auto overflow-hidden px-[14rem] max-xl:h-full max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-[2rem] pb-[4rem]"
    >
      <h1 className="text-center py-10 text-[2rem] font-[500]">Skills</h1>

      <div className="grid grid-cols-5 gap-10 max-xl:mx-[6rem] max-md:grid-cols-3 max-md:mx-[2rem] max-sm:mx-0 max-md:gap-8 max-[500px]:gap-4 my-anima">
        {skills?.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <span className="grid place-items-center p-4 rounded-full bg-blue-200">
              <img
                src={skill.img}
                alt=""
                className={`${
                  skill.name === "React" ||
                  skill.name === "MongoDB" ||
                  skill.name === "Express JS"
                    ? "object-cover"
                    : "object-contain"
                } w-14 h-14`}
              />
            </span>
            <h3 className="font-[400] text-md text-center">{skill.name}</h3>
          </div>
        ))}
        {/* <div className="flex flex-col items-center gap-2">
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
          <h3 className="font-[400] text-center">Tailwind CSS</h3>
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
        </div> */}
      </div>
    </motion.div>
  );
};

export default Skills;
