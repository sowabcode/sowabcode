import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experiences from "../pages/Experiences";
import Testimony from "../pages/Testimony";
import Contact from "../pages/Contact";
import Liked from "../pages/Liked";
import Footer from "./layouts/Footer";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Testimony />
      <Contact />
      <Liked />
      <Footer />
    </div>
  );
};

export default Main;
