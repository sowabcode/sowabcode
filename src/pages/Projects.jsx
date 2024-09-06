// import top from "../assets/images/top.png";
import i2 from "../assets/images/i2.png";
import i3 from "../assets/images/i3.png";
import i4 from "../assets/images/i4.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { FaGithub } from "react-icons/fa";
import { HiMiniViewfinderCircle } from "react-icons/hi2";

const Projects = () => {
  return (
    <div
      name="projects"
      className="h-full overflow-hidden px-[14rem] max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-[2rem] pb-[4rem]"
    >
      <h1 className="text-center my-20 text-[1.8rem] max-lg:my-10">Projects</h1>

      <motion.div
        variants={fadeIn("down", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:grid-cols-1"
      >
        <div className="bg-white rounded-lg p-3 hover:scale-110 my-animation">
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
            src={i4}
            className="w-full h-[10rem] max-xl:h-[14rem] rounded-lg max-sm:h-[10rem] my-anima"
            alt=""
          />
          <div className="space-y-2 mt-4">
            <h2 className="font-[600] text-lg text-gray-800">Project Title</h2>
            <p className="font-[500] text-md leading-5 text-gray-500">
              Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 hover:scale-110 my-animation">
          <span className="view-project-tools">
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900 my-anima">
              <HiMiniViewfinderCircle
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900">
              <FaGithub
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
          </span>
          <img
            src={i2}
            className="w-full h-[10rem] max-xl:h-[14rem] rounded-lg max-sm:h-[10rem] my-anima"
            alt=""
          />
          <div className="space-y-2 mt-4">
            <h2 className="font-[600] text-lg text-gray-800">Project Title</h2>
            <p className="font-[500] text-md leading-5 text-gray-500">
              Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 hover:scale-110 my-animation">
          <span className="view-project-tools">
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900 my-anima">
              <HiMiniViewfinderCircle
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900">
              <FaGithub
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
          </span>
          <img
            src={i3}
            className="w-full h-[10rem] max-xl:h-[14rem] rounded-lg max-sm:h-[10rem] my-anima"
            alt=""
          />
          <div className="space-y-2 mt-4">
            <h2 className="font-[600] text-lg text-gray-800">Project Title</h2>
            <p className="font-[500] text-md leading-5 text-gray-500">
              Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 hover:scale-110 my-animation">
          <span className="view-project-tools">
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900 my-anima">
              <HiMiniViewfinderCircle
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900">
              <FaGithub
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
          </span>
          <img
            src={i4}
            className="w-full h-[10rem] max-xl:h-[14rem] rounded-lg max-sm:h-[10rem] my-anima"
            alt=""
          />
          <div className="space-y-2 mt-4">
            <h2 className="font-[600] text-lg text-gray-800">Project Title</h2>
            <p className="font-[500] text-md leading-5 text-gray-500">
              Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 hover:scale-110 my-animation">
          <span className="view-project-tools">
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900 my-anima">
              <HiMiniViewfinderCircle
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900">
              <FaGithub
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
          </span>
          <img
            src={i2}
            className="w-full h-[10rem] max-xl:h-[14rem] rounded-lg max-sm:h-[10rem] my-anima"
            alt=""
          />
          <div className="space-y-2 mt-4">
            <h2 className="font-[600] text-lg text-gray-800">Project Title</h2>
            <p className="font-[500] text-md leading-5 text-gray-500">
              Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-3 hover:scale-110 my-animation">
          <span className="view-project-tools">
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900 my-anima">
              <HiMiniViewfinderCircle
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
            <div className="group grid place-items-center cursor-pointer rounded-full p-2 bg-white hover:bg-slate-900">
              <FaGithub
                size={24}
                className="text-slate-900 group-hover:text-white"
              />
            </div>
          </span>
          <img
            src={i3}
            className="w-full h-[10rem] max-xl:h-[14rem] rounded-lg max-sm:h-[10rem] my-anima"
            alt=""
          />
          <div className="space-y-2 mt-4">
            <h2 className="font-[600] text-lg text-gray-800">Project Title</h2>
            <p className="font-[500] text-md leading-5 text-gray-500">
              Tech Stack: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
