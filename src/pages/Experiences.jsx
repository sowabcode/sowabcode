import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { PiBagFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const Experiences = () => {
  return (
    <div
      name="experiences"
      className="h-full overflow-hidden px-[14rem] max-xl:px-[8rem] max-lg:px-[4rem] max-[500px]:px-[2rem] pb-[4rem]"
    >
      <h1 className="text-center my-10 text-[2rem] font-[500] max-lg:my-10">
        Experiences
      </h1>

      <div className="grid place-items-center max-md:flex my-anima">
        <div className="h-[620px] w-1 bg-gray-300 rounded-full relative max-sm:h-[650px] my-anima">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="grid place-items-center absolute top-[5rem] right-[-26px] bg-white rounded-full w-14 h-14 shadow-medium"
          >
            <div className="grid place-items-center bg-violet-200 rounded-full w-10 h-10">
              <PiBagFill size={24} className="text-violet-500" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white w-[460px] absolute top-12 max-md:top-0 right-[1900%] rounded-lg px-4 py-2 my-anima max-xl:w-[420px] max-lg:right-[1500%] max-lg:w-[300px] max-md:left-[1900%] max-md:w-[450px] max-sm:w-[300px] max-[500px]:left-[1200%] max-[400px]:left-[1000%] max-[400px]:w-[270px] shadow-medium my-anima"
          >
            <div className="leading-3">
              <h2 className="text-slate-700 font-[500] text-lg">
                Kouma Academy
              </h2>
              <span className="text-slate-400 text-sm">Jan 2023 - Today</span>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <GoDotFill className="text-blue-900" />
                <p className="text-slate-500">Web Developper</p>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-blue-900" />
                <p className="text-slate-500">
                  Performance and User Experience Optimization
                </p>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-blue-900" />
                <p className="text-slate-500">Mentoring junior developers</p>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2 mt-4">
              <p className="bg-slate-200 text-xs font-semibold rounded-full px-4 py-0.5 ">
                React
              </p>
              <p className="bg-slate-200 text-xs font-semibold rounded-full px-4 py-0.5 ">
                Node.js
              </p>
              <p className="bg-slate-200 text-xs font-semibold rounded-full px-4 py-0.5 text-nowrap">
                Tailwind CSS
              </p>
              <p className="bg-slate-200 text-xs font-semibold rounded-full px-4 py-0.5 ">
                JavaScript
              </p>
              <p className="bg-slate-200 text-xs font-semibold rounded-full px-4 py-0.5 ">
                TypeScript
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="grid place-items-center absolute top-[18rem] right-[-26px] bg-white rounded-full w-14 h-14 shadow-medium"
          >
            <div className="grid place-items-center bg-violet-200 rounded-full w-10 h-10">
              <PiBagFill size={24} className="text-violet-500" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white absolute w-[460px] left-[1900%] top-[16rem] rounded-lg px-4 py-2 my-anima max-xl:w-[420px] max-lg:left-[1500%] max-lg:w-[300px] max-md:left-[1900%] max-md:w-[450px] max-sm:w-[300px] max-[500px]:left-[1200%] max-[400px]:left-[1000%] max-[400px]:w-[270px] shadow-medium my-anima"
          >
            <div className="leading-3">
              <h2 className="text-slate-700 font-[500] text-lg">Work 1</h2>
              <span className="text-slate-400 text-sm">
                Jan 2021 - Jun 2022
              </span>
            </div>
            <p className="mt-4 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatum sit esse ab id magnam repellat nam commodi dolore et
              adipisci
            </p>
          </motion.div>

          {/* Left 2 */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="grid place-items-center absolute top-[31rem] right-[-26px] bg-white rounded-full w-14 h-14 shadow-medium"
          >
            <div className="grid place-items-center bg-violet-200 rounded-full w-10 h-10">
              <PiBagFill size={24} className="text-violet-500" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white w-[460px] absolute top-[29rem] right-[1900%] rounded-lg px-4 py-2 my-anima max-xl:w-[420px] max-lg:right-[1500%] max-lg:w-[300px] max-md:left-[1900%] max-md:w-[450px] max-sm:w-[300px] max-[500px]:left-[1200%] max-[400px]:left-[1000%] max-[400px]:w-[270px] shadow-medium my-anima"
          >
            <div className="leading-3">
              <h2 className="text-slate-700 font-[500] text-lg">Work 1</h2>
              <span className="text-slate-400 text-sm">
                Jan 2021 - Jun 2022
              </span>
            </div>
            <p className="mt-4 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatum sit esse ab id magnam repellat nam commodi dolore et
              adipisci
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
