import Topbar from "../components/layouts/Topbar";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa6";

import { TypeAnimation } from "react-type-animation";

import abdoul from "../assets/images/Aboulaye.jpg";
// bg-[#e3eeff]
const Home = () => {
  return (
    <div className="px-[14rem] h-screen w-screen bg-[#dfe9f3] pt-4">
      <Topbar />

      <div className="grid grid-cols-2 place-content-center h-[calc(100%-14rem)] mt-20">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl">Hello,</h2>
          <h1 className="text-5xl my-5">I&apos;m SOWABCODE</h1>
          <p className="">
            <span className="text-[1.5rem]">I&apos;m </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend Developper",
                1000,
                "a web designer",
                1000,
                // "We produce food for Chinchillas",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-blue-700"
              style={{ fontSize: "1.5em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>

          <p className="my-5 leading-5 font-thin w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            nobis? tenetur, cupiditate, ad nobis voluptatibus deleniti quis
            dignissimos sunt!
          </p>

          <div className="flex items-center gap-5">
            <button className="flex items-center gap-4 rounded border-2 border-blue-900 px-4 py-1.5 bg-blue-900 text-white">
              <span>About me</span>
              <MdKeyboardArrowRight size={20} />
            </button>
            <button className="flex items-center gap-4 rounded border-2 border-blue-900 px-4 py-1.5 text-blue-900">
              <span>Download CV</span>
              <MdOutlineFileDownload size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <img
            src={abdoul}
            className="w-9h-96 h-96 rounded-full shadow-md"
            alt=""
          />

          <span className="absolute -top-24 grid place-items-center bg-white rounded-full p-4 hover:shadow-md transform-style-3d">
            <FaHtml5 size={45} />
          </span>
          <span className="absolute -bottom-24 grid place-items-center bg-white rounded-full p-4 hover:shadow-md transform-style-3d">
            <FaHtml5 size={45} />
          </span>
          <span className="absolute -right-4 grid place-items-center bg-white rounded-full p-4 hover:shadow-md transform-style-3d">
            <FaHtml5 size={45} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
