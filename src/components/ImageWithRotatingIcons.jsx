import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaHtml5 } from "react-icons/fa6";

export const ImageWithRotatingIcons = ({ imageSrc }) => {
  const iconVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="z-40 flex items-center justify-center relative"
    >
      <img
        src={imageSrc}
        className="w-96 h-96 rounded-full shadow-md max-[500px]:w-80 max-[500px]:h-80 max-[400px]:w-72 max-[400px]:h-72"
        alt=""
      />

      <motion.div
        className="absolute w-full h-full"
        animate="animate"
        variants={iconVariants}
      >
        <span className="absolute -top-20 grid place-items-center hover:bg-white rounded-full p-4 hover:shadow-md max-xl:top-4 max-xl:right-8 max-sm:top-1">
          <FaHtml5 size={35} color="orange" />
        </span>
        <span className="absolute -bottom-20 grid place-items-center hover:bg-white rounded-full p-4 hover:shadow-md max-xl:bottom-4 max-xl:right-8 max-sm:-bottom-1">
          <FaHtml5 size={35} color="blue" />
        </span>
        <span className="absolute right-0 grid place-items-center hover:bg-white rounded-full p-4 hover:shadow-md max-xl:-right-8 z-10">
          <FaHtml5 size={35} color="yellow" />
        </span>
      </motion.div>
    </motion.div>
  );
};
