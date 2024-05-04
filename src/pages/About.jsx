import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen overflow-hidden px-[14rem] pb-[4rem] max-xl:px-[8rem] max-xl:h-full max-lg:px-[4rem] max-md:px-[2rem] my-anima"
    >
      <h1 className="text-center my-20 text-[1.8rem] max-lg:my-10">About Me</h1>

      <div className="grid grid-cols-[30%_auto] gap-24 max-lg:flex max-lg:flex-col max-lg:gap-16 bg-slate-100 max-lg:pt-0 max-lg:pb-10">
        <div className="grid place-items-center">
          <div className="about-pic">
            <div className="content w-80 h-96 max-xl:w-72 max-xl:h-80 max-lg:w-80 max-lg:h-96 max-[500px]:w-72 max-[500px]:h-80"></div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between pr-[4rem] max-xl:pr-6 my-anima">
          <div className="flex flex-col items-start">
            <h1 className="mb-3 text-3xl max-sm:text-2xl max-[400px]:text-xl">
              Abdoulaye Bademba SOW
            </h1>
            <p className="mb-5 rounded px-4 py-1.5 text-blue-700 bg-blue-200">
              Frontend Developper
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              dolor repellendus laboriosam excepturi expedita debitis quaerat a
              quis obcaecati dolore, ab quisquam ipsam quibusdam pariatur optio!
              Et corporis modi debitis!
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 mb-4 max-lg:mt-10 max-lg:mb-0">
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
    </div>
  );
};

export default About;
