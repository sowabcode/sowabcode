import $ from "jquery";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";

import node_js from "../../assets/images/tech/Node.js.png";

import { animateScroll as scroll, scroller } from "react-scroll";

const Topbar = () => {
  const [hash, setHash] = useState("top");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (index) => {
    setHash(index);
    setIsOpen(false);
    if (index === "top") {
      scroll.scrollToTop();
    } else {
      scroller.scrollTo(index, { smooth: true, offset: 0 });
    }
  };

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    // Initial check
    checkWidth();

    // Add event listener
    window.addEventListener("resize", checkWidth);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  useEffect(() => {
    $(function () {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 550) {
          $(".top").removeClass("active");
          $(".about").addClass("active");
        } else {
          $(".top").addClass("active");
          $(".about").removeClass("active");
        }

        if ($(window).scrollTop() > 1150) {
          $(".about").removeClass("active");
          $(".skills").addClass("active");
        } else {
          $(".skills").removeClass("active");
        }

        if ($(window).scrollTop() > 1800) {
          $(".skills").removeClass("active");
          $(".projects").addClass("active");
        } else {
          $(".projects").removeClass("active");
        }

        if ($(window).scrollTop() > 2700) {
          $(".projects").removeClass("active");
          $(".experiences").addClass("active");
        } else {
          $(".experiences").removeClass("active");
        }

        if ($(window).scrollTop() > 3500) {
          $(".experiences").removeClass("active");
        }
        // }
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed h-14 z-50 w-[calc(100%-28rem)] flex justify-between gap-4 rounded px-4 py-2.5 shadow-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 max-xl:w-[calc(100%-16rem)] max-lg:w-[calc(100%-8rem)] max-md:w-[calc(100%-4rem)] trans-anim ${
        isOpen ? "h-72 items-start trans-anim2" : "items-start"
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <div
          onClick={() => handleNavigate("top")}
          className="flex items-center justify-center gap-2 cursor-pointer"
        >
          <img src={node_js} className="w-7 h-7" alt="Logo" />
          <h1
            className="text-2xl font-[500] max-lg:hidden"
            style={{
              backgroundImage: "linear-gradient(135deg, #1afbf0, #da00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SOWABCODE
          </h1>
        </div>
        <label
          // htmlFor="check"
          onClick={() => setIsOpen(!isOpen)}
          className="hidden cursor-pointer max-lg:grid max-xl:place-items-center hover:bg-gray-200 rounded-full p-2"
        >
          <HiOutlineMenuAlt2 size={20} />
        </label>
      </div>
      <motion.div
        // initial={{ opacity: 0, x: 30 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 2 }}
        className="flex items-center gap-6 font-[400] relative"
      >
        <nav className="font-[500] flex items-center gap-x-6 max-lg:hidden">
          <Link
            className={`link top ${hash === "top" ? " active" : ""}`}
            onClick={() => handleNavigate("top")}
          >
            Home
          </Link>
          <Link
            className={`link about ${hash === "about" ? " active" : ""}`}
            onClick={() => handleNavigate("about")}
          >
            About
          </Link>
          <Link
            className={`link skills ${hash === "skills" ? " active" : ""}`}
            onClick={() => handleNavigate("skills")}
          >
            Skills
          </Link>
          <Link
            className={`link projects ${hash === "projects" ? " active" : ""}`}
            onClick={() => handleNavigate("projects")}
          >
            Projects
          </Link>
          <Link
            className={`link experiences ${
              hash === "experiences" ? " active" : ""
            }`}
            onClick={() => handleNavigate("experiences")}
          >
            Experiences
          </Link>
          {/* <Link className="link bg-blue-900 text-white py-1 px-4 rounded">
            Contact
          </Link> */}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            onClick={() => handleNavigate("contact")}
            className="bg-blue-900 text-white py-1.5 px-4 rounded"
          >
            Contact
          </Link>
          <div className="grid place-items-center cursor-pointer rounded-full w-6 h-6 bg-gray-100 hover:bg-gray-200 hover:shadow-inner">
            <MdOutlineLightMode size={20} />
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
          className="lg:hidden font-[400] flex flex-col items-start gap-4 absolute top-14 left-0 w-full px-4 border-t border-blue-700 pt-3"
        >
          <Link
            className={`link top ${hash === "top" ? " active" : ""}`}
            onClick={() => handleNavigate("top")}
          >
            Home
          </Link>
          <Link
            className={`link about ${hash === "about" ? " active" : ""}`}
            onClick={() => handleNavigate("about")}
          >
            About
          </Link>
          <Link
            className={`link skills ${hash === "skills" ? " active" : ""}`}
            onClick={() => handleNavigate("skills")}
          >
            Skills
          </Link>
          <Link
            className={`link projects ${hash === "projects" ? " active" : ""}`}
            onClick={() => handleNavigate("projects")}
          >
            Projects
          </Link>
          <Link
            className={`link experiences ${
              hash === "experiences" ? " active" : ""
            }`}
            onClick={() => handleNavigate("experiences")}
          >
            Experiences
          </Link>
        </motion.nav>
      )}
    </motion.div>
  );
};

export default Topbar;
