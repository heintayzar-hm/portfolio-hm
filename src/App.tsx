import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimony from "./components/Testimony";
import WaveCursor from "./components/Animations/Waves";
import { AiOutlineArrowUp } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-primary text-base" id="smooth-wrapper">
      <div id="smooth-content">
      <div className="h-screen opacity-100 ">
         <div className="z-10 "><Header /></div>
        <WaveCursor />
      </div>

      <Navbar />
      <main className="section ">
          <button type="button" onClick={() => (scroll.scrollToTop())} className="p-2 z-50 rounded-full border border-[#08fdd8] hover:bg-[#08fdd8] text-[#08fdd8] hover:text-black hover:border-black fixed right-10 bottom-10">
          <AiOutlineArrowUp
            className=""
          />
          </button>
               <AboutMe />

        <Skills />

        <Projects />

        <Testimony />

        <Contact />
      </main>

      <Footer />
      </div>
      </div>
  );
}

export default App;
