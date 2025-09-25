import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { PiCodeBold } from "react-icons/pi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { LuScanLine, LuUsers } from "react-icons/lu";

const About = () => {
  return (
    <div
      name="about"
      className="-z-10 h-auto overflow-hidden px-[14rem] pb-[4rem] max-xl:px-[8rem] max-xl:h-full max-lg:px-[4rem] max-md:px-[2rem] my-anima"
    >
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mt-10 mb-20 text-[2rem] font-[500] max-lg:my-10"
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-[30%_auto] gap-24 max-lg:flex max-lg:flex-col max-lg:gap-16  max-lg:pt-0 max-lg:pb-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="grid place-items-center"
        >
          <div className="about-pic">
            <div className="content w-72 h-80 max-xl:w-72 max-xl:h-80 max-lg:w-80 max-lg:h-96 max-[500px]:w-72 max-[500px]:h-80"></div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start justify-between pr-[4rem] max-xl:pr-6 max-md:pr-0 my-anima"
        >
          <div className="flex flex-col items-start">
            <h1 className="mb-3 text-3xl max-sm:text-2xl max-[400px]:text-xl">
              Abdoulaye Bademba SOW
            </h1>
            <p className="mb-5 rounded px-4 py-1.5 text-blue-700 bg-blue-200">
              Passionate Developper
            </p>
            <div className="space-y-3 text-[16px] text-justify text-slate-500">
              <p>
                Je suis un développeur passionné avec 3 années
                d&apos;expériences richent en principes d&apos;assurance qualité
                logicielle. Ma plus grande force réside dans ma capacité à
                combiner une expertise technique avec un sens aigu du design. Ma
                passion pour le développement web découle de mon désir de créer
                des expériences numériques fluides et intuitives.
              </p>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 max-md:grid-cols-1 mt-5">
              <div className="flex items-center gap-4 border rounded-md p-2.5 group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #1afbf0, #da00ff)",
                  }}
                  className="text-white grid place-items-center gap-2 rounded-md p-2"
                >
                  <PiCodeBold size={24} />
                </div>
                <span className="font text-[18px]">Dev passionate</span>
              </div>
              <div className="flex items-center gap-4 border rounded-md p-2.5 group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #1afbf0, #da00ff)",
                  }}
                  className="text-white grid place-items-center gap-2 rounded-md p-2"
                >
                  <BsFillLightningChargeFill size={24} />
                </div>
                <span className="font text-[18px]">Innovation</span>
              </div>
              <div className="flex items-center gap-4 border rounded-md p-2.5 group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #1afbf0, #da00ff)",
                  }}
                  className="text-white grid place-items-center gap-2 rounded-md p-2"
                >
                  <LuUsers size={24} />
                </div>
                <span className="font text-[18px]">Collaboration</span>
              </div>
              <div className="flex items-center gap-4 border rounded-md p-2.5 group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #1afbf0, #da00ff)",
                  }}
                  className="text-white grid place-items-center gap-2 rounded-md p-2"
                >
                  <LuScanLine size={24} />
                </div>
                <span className="font text-[18px]">Details matter</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
