import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Hamburger from "./components/Hamburger";
import About from "./components/About";
import Scroll from "./components/Scroll";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0,0);
    };
  }, []);

  return (
    <>
      <div id="home" className="min-h-screen bg-[#f2f5ff] overflow-hidden">
        <Hamburger />
        <Navbar />
        <Home />
      </div>
      <div className="bg-[#f2f5ff]">
        <About />
        <Scroll />
        <Projects />
        <Skills />
        <Connect />
      </div>
    </>
  );
};

export default App;
