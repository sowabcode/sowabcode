import { motion } from "framer-motion";
// import { fadeIn } from "./variants";

import { FaHeart, FaThumbsUp } from "react-icons/fa6";
import { fadeIn } from "../variants";

const Liked = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-[55%_auto] gap-4 rounded-lg bg-blue-900 text-white px-6 py-6 overflow-hidden mx-[14rem] mb-[4rem] max-xl:mx-[8rem] max-lg:mx-[4rem] max-md:mx-[2rem] max-md:flex max-md:flex-col max-md:gap-10 max-sm:p-4 my-anima">
        <div className="flex flex-col items-start justify-between">
          <div>
            <h3 className="text-xl font-[500]">Do you love my portfolio?</h3>

            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt
              dolor consectetur odio.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span>24</span>
              <FaThumbsUp size={20} />
            </div>
            <div className="flex items-center gap-2">
              <span>22</span>
              <FaHeart size={20} />
            </div>
          </div>
        </div>

        <div className="">
          <div className="rounded-lg mini-portfolio"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Liked;
