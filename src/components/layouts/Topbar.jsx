import { Link } from "react-router-dom";

import node_js from "../../assets/images/node-js.jpg";

import { MdOutlineLightMode } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-white rounded px-4 py-2.5 shadow-md">
      <div className="flex items-center justify-center gap-2">
        <img src={node_js} className="w-7 h-7" alt="" />
        <h1 className="text-2xl font-['Chakra Petch']">SOWABCODE</h1>
      </div>
      <div className="flex items-center gap-10 font-[400]">
        <nav className="flex items-center gap-4">
          <Link className="link">Home</Link>
          <Link className="link">About</Link>
          <Link className="link">Skills</Link>
          <Link className="link">Projects</Link>
          <Link className="link">Experiences</Link>
          <Link className="link">Contact</Link>
        </nav>

        <div>
          <div className="grid place-items-center cursor-pointer rounded-full w-6 h-6 bg-gray-100 hover:bg-gray-200 hover:shadow-inner">
            <MdOutlineLightMode size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
