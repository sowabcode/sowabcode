import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div
      name="about"
      className="-z-10 h-screen overflow-hidden px-[14rem] pb-[4rem] max-xl:px-[8rem] max-xl:h-full max-lg:px-[4rem] max-md:px-[2rem] my-anima"
    >
      <h1 className="text-center my-20 text-[1.8rem] max-lg:my-10">About Me</h1>

      <div className="grid grid-cols-[30%_auto] gap-24 max-lg:flex max-lg:flex-col max-lg:gap-16  max-lg:pt-0 max-lg:pb-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
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
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-start justify-between pr-[4rem] max-xl:pr-6 my-anima"
        >
          <div className="flex flex-col items-start">
            <h1 className="mb-3 text-3xl max-sm:text-2xl max-[400px]:text-xl">
              Abdoulaye Bademba SOW
            </h1>
            <p className="mb-5 rounded px-4 py-1.5 text-blue-700 bg-blue-200">
              Frontend Developper
            </p>
            <div className="space-y-3 text-[1rem] font-['Montserrat'] font-[500] text-black">
              <p>
                Je suis un développeur frontend basé à Conakry, en Guinée, avec
                2 années d&apos;expériences richent en principes
                d&apos;assurance qualité logicielle.
              </p>
              <p>
                Ma plus grande force réside dans ma capacité à combiner une
                expertise technique avec un sens aigu du design.
              </p>
              <p>
                Ma passion pour le développement web découle de mon désir de
                créer des expériences numériques fluides et intuitives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
