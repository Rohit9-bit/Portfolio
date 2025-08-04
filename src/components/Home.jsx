import React from "react";
import { PiHandshakeLight } from "react-icons/pi";
import { IoBagCheckOutline } from "react-icons/io5";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { MdArrowOutward } from "react-icons/md";
import AnimatedTextLines from "./AnimatedTextLines";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const aboutText = `I partner with ambitious startups and forward-thinking brands, empowering /n them to accelerate their growth by delivering high-performance, results-driven /n web and app solutions`;

  useGSAP(() => {
    gsap.from("#name, #threePara, #threeEl", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      ease: "back.out",
    });
  });

  return (
    <section className="min-h-screen overflow-hidden">
      <div className="flex flex-col px-3 sm:px-5 md:px-6 lg:px-8">
        {/* top flex elements */}
        <div id="threeEl" className="pt-12 sm:pt-15 md:pt-17 lg:pt-20">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 uppercase text-[26px] sm:text-4xl md:text-4xl">
            <div className="block md:w-[220px] font-semibold tracking-tighter leading-none">
              Learning by
              <span className="text-purple-700"> Building</span>
            </div>
            <div className="block md:w-[260px] font-semibold tracking-tighter leading-none">
              5+ Projects in
              <span className="text-purple-700"> Progress</span>
            </div>
            <div className="block md:w-[279px] font-semibold tracking-tighter leading-none">
              Self-Taught
              <span className="text-purple-700"> Web Developer</span>
            </div>
          </div>
        </div>

        {/* three paragraphs */}
        <div id="threePara" className="py-10 md:py-24">
          <div className="flex flex-col sm:flex-row justify-between text-xl text-gray-700">
            <div className="flex items-center gap-2">
              <PiHandshakeLight
                style={{ color: "oklch(49.6% 0.265 301.924)" }}
              />
              Ready to collaborate on exciting projects
            </div>
            <div className="flex items-center gap-2">
              <IoBagCheckOutline
                style={{ color: "oklch(49.6% 0.265 301.924)" }}
              />
              Open to internships & freelance work
            </div>
            <div className="flex items-center gap-2">
              <LiaHourglassStartSolid
                style={{ color: "oklch(49.6% 0.265 301.924)" }}
              />
              Started Backend Journey
            </div>
          </div>
        </div>
      </div>

      {/* bottom content */}
      <div>
        <div id="name" className="flex flex-col px-3 sm:px-5 md:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase text-purple-600 font-semibold tracking-wider px-[5px] md:px-[8px] lg:px-[9px] leading-[20px] md:leading-[40px] lg:leading-[50px]">
            <Link
              to={"connect"}
              duration={1000}
              offset={0}
              smooth
              className="cursor-pointer uppercase"
            >
              Reach out
            </Link>
            <span className="text-2xl sm:text-3xl lg:text-4xl">
              <MdArrowOutward />
            </span>
          </div>
          <div>
            <h1 className="text-[90px] sm:text-[110px] md:text-[140px] lg:text-[160px] uppercase tracking-tighter font-bold leading-[80px] sm:leading-[100px] md:leading-[120px] lg:leading-[130px]">
              Rohit Sharma
            </h1>
          </div>
        </div>

        <div>
          <div className="border-t-2" />
          <div>
            <AnimatedTextLines
              text={aboutText}
              className="uppercase px-3 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-12 md:py-15 lg:py-18 text-2xl md:text-3xl lg:text-4xl text-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
