import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";

import Topbar from "../components/layouts/Topbar";

import { MdOutlineFileDownload } from "react-icons/md";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa6";

import cv from "../assets/pdf/cv.pdf";

import abdoul from "../assets/images/Aboulaye.jpg";
import figma from "../assets/images/tech/Figma.png";
import react from "../assets/images/tech/React.png";
import node from "../assets/images/tech/Node.js.png";

const Home = () => {
  return (
    <div className="z-10 banner relative px-[14rem] h-screen w-screen overflow-hidden bg-blue-100 pt-4 max-xl:h-full max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-[2rem] my-anima">
      <Topbar />

      <div className="z-30 h-[calc(100%-14rem)] grid grid-cols-2 place-content-center mt-36 pb-10 max-xl:h-auto max-xl:flex max-xl:flex-col-reverse max-xl:items-center max-xl:gap-10 max-xl:mt-20">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="z-40 flex flex-col items-start justify-center"
        >
          <h2 className="text-lg">
            Hello{" "}
            <span
              className="font-bold text-3xl inline-block"
              style={{ animation: "1.5s infinite alternate slide-in" }}
            >
              👋
            </span>
          </h2>
          <h1
            className="font-[600] text-5xl my-5 max-md:text-4xl"
            // style={{
            //   backgroundImage: "linear-gradient(135deg, #1afbf0, #da00ff)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            // }}
          >
            I&apos;m SOWABCODE
          </h1>
          <p className="">
            <span className="text-[1.5rem]">I&apos;m a </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Fullstack Developper",
                2000,
                "Web Designer",
                1000,
                // "We produce food for Chinchillas",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-blue-700"
              style={{
                fontSize: "1.7em",
                display: "inline-block",
                backgroundImage: "linear-gradient(135deg, #1afbf0, #da00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              repeat={Infinity}
            />
          </p>

          <p className="text-[18px] text-slate-600 my-5 w-[500px] max-md:w-full max-md:text-justify">
            Je crée des expériences utilisateurs exceptionnelles avec des
            interfaces intuitives. Je mets l&apos;accent sur les détails, la
            scalabilité et les performances pour garantir des solutions robustes
            et efficaces.
          </p>

          <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-[500px]:gap-3 mt-4">
            {/* <button className="group flex items-center gap-4 rounded border-2 border-blue-900 px-4 py-1.5 bg-blue-900 text-white max-[500px]:px-2">
              <span>About me</span>
              <MdKeyboardArrowRight
                size={20}
                className="group-hover:translate-x-1 my-anima"
              />
            </button> */}
            <button
              onClick={() =>
                window.open(`${cv}`, "_blank", "resizeable,scrollbar")
              }
              className="flex items-center gap-4 rounded-md border-2 border-blue-900 px-2 py-2 text-blue-900 max-[500px]:px-2 max-md:hidden"
            >
              <span>Download CV</span>
              <MdOutlineFileDownload size={24} className="animate-bounce" />
            </button>

            <div className="flex flex-wrap items-center gap-4">
              <img src={figma} alt="" className="w-12 h-12" />
              <img src={react} alt="" className="w-12 h-12" />
              <img src={node} alt="" className="w-12 h-12" />
            </div>
            {/* <div className="flex flex-wrap items-center gap-4">
              <span className="w-14 h-14 rounded-full grid place-items-center shadow-md cursor-pointer">
                <FaLinkedinIn size={25} color="#0762C8" />
              </span>
              <Link
                target="_blank"
                to="https://www.facebook.com/abdoulaye.sow.735944"
                className="w-14 h-14 rounded-full grid place-items-center shadow-md cursor-pointer"
              >
                <FaFacebookF size={25} color="#4267B2" />
              </Link>
              <span className="w-14 h-14 rounded-full grid place-items-center shadow-md cursor-pointer">
                <FaTwitter size={25} color="#1DA1F2" />
              </span>
            </div> */}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="z-40 flex items-center justify-center relative"
        >
          <img
            src={abdoul}
            className="w-96 h-96 rounded-full shadow-md max-[500px]:w-80 max-[500px]:h-80 max-[400px]:w-72 max-[400px]:h-72"
            alt=""
          />

          <span className="test-anim absolute -top-20 grid place-items-center shadow-md rounded-full p-4 max-md:p-2 hover:shadow-md max-xl:top-4 max-xl:right-8 max-sm:top-1">
            <FaHtml5 size={35} color="orange" />
          </span>
          <span className="absolute -bottom-20 grid place-items-center shadow-md rounded-full p-4 max-md:p-2 hover:shadow-md max-xl:bottom-4 max-xl:right-8 max-sm:-bottom-1">
            <FaJs size={35} color="yellow" />
          </span>
          <span className="absolute right-0 grid place-items-center shadow-md rounded-full p-4 max-md:p-2 hover:shadow-md max-xl:-right-8 z-10">
            <FaCss3 size={32} className="text-purple-700" />
          </span>
        </motion.div>
      </div>

      {/* Hero background color degrad */}
      <div className="z-20 absolute left-0 bottom-0 w-full h-96 bac-color"></div>
    </div>
  );
};

export default Home;
