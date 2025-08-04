import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="min-h-screen overflow-hidden bg-gradient-to-r from-gray-300 to-gray-200">
      <div className="flex flex-col md:flex-row justify-center items-center m-5 lg:mt-10 px-3 sm:px-10 md:px-20 lg:px-30 gap-5">
        <div className="w-full md:w-1/2 py-5">
          <img 
            src="\profile.jpg"
            alt="profile"
            className="rounded-lg object-cover h-[800px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center py-5 items-center text-gray-700">
          <h1 className="text-black text-[40px] lg:text-7xl font-black lg:w-[500px] text-center w-full leading-none uppercase">
            A Few Words About Me
          </h1>
          <h4 className="uppercase text-black text-[18px] lg:text-[20px] font-semibold py-8">
            Crafting Ideas into Functional Web Experiences —
          </h4>
          <h4 className="uppercase tracking-widest font-light">
            I'm a passionate and detail-oriented web developer based in India,
            building modern and responsive websites and web applications.
          </h4>
          <div className="py-10 flex gap-8 items-center flex-wrap uppercase font-light">
            <h4 className="flex items-center text-[18px] lg:text-[20px] gap-2">
              <GoDotFill style={{ color: "#9810fa" }} />
              <span className="font-semibold text-black">I'am good at :</span>
            </h4>
            <p className="flex gap-2 items-center">
              <span className="text-purple-600">
                <FaCheck />
              </span>
              <span className="tracking-widest">Frontend development</span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-purple-600">
                <FaCheck />
              </span>
              <span className="tracking-widest">backend integration</span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-purple-600">
                <FaCheck />
              </span>
              <span className="tracking-widest">rest api<span className="lowercase">s</span></span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-purple-600">
                <FaCheck />
              </span>
              <span className="tracking-widest">responsive design</span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-purple-600">
                <FaCheck />
              </span>
              <span className="tracking-widest">performance optimization</span>
            </p>
          </div>
          <p className="uppercase font-light tracking-widest">
            I specialize in building full-stack websites, portfolio pages,
            business solutions, and interactive user interfaces. Whether it's
            React, Tailwind CSS, Node.js, or MongoDB, I love creating clean,
            scalable, and high-performance web solutions. Let's connect and
            bring your ideas to life!
          </p>

          <div className="py-10 flex gap-5 text-black">
            <Link to={"connect"} offset={0} duration={1000} smooth className="py-3 px-5 border hover:bg-purple-500 transition-all duration-300 hover:text-white uppercase text-lg hover:border-none hover:scale-110 hover:shadow-2xl">
              Connect
            </Link>
            <a href="./globe.jpg" download className="py-3 px-5 border hover:bg-purple-500 transition-all duration-300 hover:text-white uppercase text-lg hover:border-none hover:scale-110 hover:shadow-2xl">
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
