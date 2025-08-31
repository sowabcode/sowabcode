import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experiences from "../pages/Experiences";
// import Testimony from "../pages/Testimony";
import Contact from "../pages/Contact";
import Liked from "../pages/Liked";
import Footer from "./layouts/Footer";
// import { useEffect, useState } from "react";

const Main = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(true);
  //   }, 3000);
  // }, []);

  // if (!isLoading) {
  //   return (
  //     <div className="loading-wave">
  //       <div className="loading-bar"></div>
  //       <div className="loading-bar"></div>
  //       <div className="loading-bar"></div>
  //       <div className="loading-bar"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="overflow-hidden">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      {/* <Testimony /> */}
      <Contact />
      <Liked />
      <Footer />
    </div>
  );
};

export default Main;
