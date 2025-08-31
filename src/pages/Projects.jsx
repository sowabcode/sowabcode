import i2 from "../assets/images/i2.png";
import i3 from "../assets/images/i3.png";
import i4 from "../assets/images/i4.png";

import { FaGithub } from "react-icons/fa";
import { HiMiniViewfinderCircle } from "react-icons/hi2";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const projets = [
  {
    title: "Project Title",
    description:
      "Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, consectetur.",
    img: i2,
  },
  {
    title: "Project Title",
    description:
      "Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, consectetur.",
    img: i3,
  },
  {
    title: "Project Title",
    description:
      "Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, consectetur.",
    img: i4,
  },
  {
    title: "Project Title",
    description:
      "Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, consectetur.",
    img: i4,
  },
  {
    title: "Project Title",
    description:
      "Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, consectetur.",
    img: i2,
  },
  {
    title: "Project Title",
    description:
      "Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet, consectetur.",
    img: i3,
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="h-full overflow-hidden px-[14rem] max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-[2rem] pb-[4rem] bg-slate-100"
    >
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center my-10 text-[2rem] font-[500] max-lg:my-10"
      >
        Projects
      </motion.h1>

      <motion.div
        variants={fadeIn("down", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:grid-cols-1"
      >
        {projets.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-3 hover:scale-110 my-animation hover:shadow-md hover:shadow-blue-100"
          >
            <span className="view-project-tools">
              <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900 my-anima">
                <HiMiniViewfinderCircle
                  size={24}
                  className="text-slate-900 group-hover:text-white"
                />
              </div>
              <div className="my-anima group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900">
                <FaGithub
                  size={24}
                  className="text-slate-900 group-hover:text-white"
                />
              </div>
            </span>
            <img
              src={project.img}
              className="w-full h-[10rem] max-xl:h-[14rem] rounded-md max-sm:h-[10rem] my-anima"
              alt=""
            />
            <div className="space-y-2 mt-4">
              <h2 className="font-[500] text-lg text-slate-700">
                {project.title}
              </h2>
              <p className="font-[400] text-md  text-slate-500">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
