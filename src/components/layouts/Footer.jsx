// import { useState } from "react";
// import { GoTriangleRight } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";

// import { animateScroll as scroll, scroller } from "react-scroll";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Footer = () => {
  // const [hash, setHash] = useState("top");

  // const handleNavigate = (index) => {
  //   // setHash(index);
  //   if (index === "top") {
  //     scroll.scrollToTop();
  //   } else {
  //     scroller.scrollTo(index, { smooth: true, offset: 0 });
  //   }
  // };

  return (
    <div className="bg-blue-50 overflow-hidden px-[14rem] max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-[2rem]">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-[55%_auto] place-items-start gap-10 py-[2.5rem] px-6 max-md:px-0 max-lg:flex max-lg:flex-col"
      >
        <div>
          <h1 className="text-3xl font-[500]">
            <span className="uppercase font-['Rubik']">Sowabcode</span>{" "}
            Portfolio
          </h1>
          <p className="mt-4 text-md font-[400]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque fuga
            nobis amet rerum suscipit consequuntur obcaecati praesentium commodi
            itaque, porro vitae sit vel nisi ex ullam aut tempore molestias
            harum.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 max-sm:gap-5">
          {/* <div>
              <h2 className="text-xl font-[500]">Quick link</h2>

              <div className="flex flex-col gap-2 mt-6">
                <div
                  onClick={() => handleNavigate("top")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <p className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    <GoTriangleRight />
                  </p>{" "}
                  <p className="font-[500] text-sm">Home</p>
                </div>
                <div
                  onClick={() => handleNavigate("about")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <p className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    <GoTriangleRight />
                  </p>{" "}
                  <p className="font-[500] text-sm">About</p>
                </div>
                <div
                  onClick={() => handleNavigate("skills")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    <GoTriangleRight />
                  </span>{" "}
                  <p className="font-[500] text-sm">Skills</p>
                </div>
                <div
                  onClick={() => handleNavigate("projects")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    <GoTriangleRight />
                  </span>{" "}
                  <p className="font-[500] text-sm">Projects</p>
                </div>
                <div
                  onClick={() => handleNavigate("experiences")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    <GoTriangleRight />
                  </span>{" "}
                  <p className="font-[500] text-sm">Experiences</p>
                </div>
                <div
                  onClick={() => handleNavigate("contact")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    <GoTriangleRight />
                  </span>{" "}
                  <p className="font-[500] text-sm">Contact</p>
                </div>
              </div>
            </div> */}
          <div>
            <h2 className="text-xl font-[500]">Address</h2>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2">
                {/* <p className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    &gt;
                  </p>{" "} */}
                <IoIosPhonePortrait />
                <p className="font-[500] text-sm">623 28 08 10</p>
              </div>
              <div className="flex items-center gap-2">
                {/* <p className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    &gt;
                  </p>{" "} */}
                <AiOutlineMail />
                <p className="font-[400] text-sm">sowabcode@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                {/* <p className="font-semibold grid place-items-center place-content-center w-5 h-5 bg-white rounded-full">
                    &gt;
                  </p>{" "} */}
                <LiaMapMarkerAltSolid />
                <p className="font-[400] text-sm">Guinée - Conakry</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-[500]">Media</h2>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="w-10 h-10 rounded-full grid place-items-center bg-white cursor-pointer">
                <FaLinkedinIn size={25} color="#0762C8" />
              </span>
              <span className="w-10 h-10 rounded-full grid place-items-center bg-white cursor-pointer">
                <FaFacebookF size={25} color="#4267B2" />
              </span>
              <span className="w-10 h-10 rounded-full grid place-items-center bg-white cursor-pointer">
                <FaTwitter size={25} color="#1DA1F2" />
              </span>
              <span className="w-10 h-10 rounded-full grid place-items-center bg-white cursor-pointer">
                <FaInstagram size={25} color="#C13584" />
              </span>
              <span className="w-10 h-10 rounded-full grid place-items-center bg-white cursor-pointer">
                <FaTiktok size={25} color="black" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center justify-between py-5 border-t border-black"
      >
        <p>
          Made with love by <span className="font-semibold">SOWABCODE</span>
        </p>

        <div>Hello!</div>
      </motion.div>
    </div>
  );
};

export default Footer;
