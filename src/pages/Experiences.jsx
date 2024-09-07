import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { PiBagFill } from "react-icons/pi";

const Experiences = () => {
  return (
    <div
      name="experiences"
      className="h-full overflow-hidden px-[14rem] max-xl:px-[8rem] max-lg:px-[4rem] max-[500px]:px-[2rem] pb-[4rem]"
    >
      <h1 className="text-center my-20 text-[1.8rem] max-lg:my-10">
        Experiences
      </h1>

      <div className="grid place-items-center max-md:block my-anima">
        <div className="h-[620px] w-1 bg-gray-300 rounded-full relative max-sm:h-[650px] my-anima">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="grid place-items-center absolute top-[5rem] right-[-26px] bg-white rounded-full w-14 h-14 shadow-lg"
          >
            <div className="grid place-items-center bg-violet-200 rounded-full w-10 h-10">
              <PiBagFill size={24} className="text-violet-500" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white w-[460px] absolute top-14 right-[1900%] rounded-lg px-4 py-2 my-anima max-xl:w-[420px] max-lg:right-[1500%] max-lg:w-[300px] max-md:left-[1900%] max-md:w-[450px] max-sm:w-[300px] max-[500px]:left-[1200%] max-[400px]:left-[1000%] max-[400px]:w-[270px] shadow-lg my-anima"
          >
            <div className="leading-3">
              <h2 className="font-semibold text-lg leading-none">Work 1</h2>
              <span className="text-gray-500 text-sm font-[500]">
                Jan 2021 - Jun 2022
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatum sit esse ab id magnam repellat nam commodi dolore et
              adipisci
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="grid place-items-center absolute top-[18rem] right-[-26px] bg-white rounded-full w-14 h-14 shadow-lg"
          >
            <div className="grid place-items-center bg-violet-200 rounded-full w-10 h-10">
              <PiBagFill size={24} className="text-violet-500" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white absolute w-[460px] left-[1900%] top-[16rem] rounded-lg px-4 py-2 my-anima max-xl:w-[420px] max-lg:left-[1500%] max-lg:w-[300px] max-md:left-[1900%] max-md:w-[450px] max-sm:w-[300px] max-[500px]:left-[1200%] max-[400px]:left-[1000%] max-[400px]:w-[270px] shadow-lg my-anima"
          >
            <div className="leading-3">
              <h2 className="font-semibold text-lg leading-none">Work 1</h2>
              <span className="text-gray-500 text-sm font-[500]">
                Jan 2021 - Jun 2022
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatum sit esse ab id magnam repellat nam commodi dolore et
              adipisci
            </p>
          </motion.div>

          {/* Left 2 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="grid place-items-center absolute top-[31rem] right-[-26px] bg-white rounded-full w-14 h-14 shadow-lg"
          >
            <div className="grid place-items-center bg-violet-200 rounded-full w-10 h-10">
              <PiBagFill size={24} className="text-violet-500" />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-white w-[460px] absolute top-[29rem] right-[1900%] rounded-lg px-4 py-2 my-anima max-xl:w-[420px] max-lg:right-[1500%] max-lg:w-[300px] max-md:left-[1900%] max-md:w-[450px] max-sm:w-[300px] max-[500px]:left-[1200%] max-[400px]:left-[1000%] max-[400px]:w-[270px] shadow-lg my-anima"
          >
            <div className="leading-3">
              <h2 className="font-semibold text-lg leading-none">Work 1</h2>
              <span className="text-gray-500 text-sm font-[500]">
                Jan 2021 - Jun 2022
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold text-gray-500">
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
