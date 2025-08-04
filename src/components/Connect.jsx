import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Connect = () => {
  return (
    <section id="connect" className="min-h-screen overflow-hidden">
      <div className="flex w-full h-full justify-center py-20 md:py-40 bg-gradient-to-r from-gray-300 to-gray-200 px-3">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-8xl uppercase font-semibold">
            Love to hear from you, <br />
            Get in touch
          </h1>
          <p className="text-sm md:text-lg text-gray-700 uppercase">
            I welcome your contact through any suitable means to elaborate on
            the details.
          </p>
          <div className="flex flex-col gap-10 justify-center md:flex-row md:justify-between pt-10 md:pt-18">
            <div className="flex flex-col gap-4">
              <div className="w-22 h-22 bg-purple-500 rounded-full flex items-center justify-center">
                <IoIosMail
                  style={{ height: "4rem", width: "4rem", color: "white" }}
                />
              </div>
              <div className="flex flex-col">
                <p className="uppercase text-gray-700">write me-</p>
                <a
                  href="mailto:tihor9650@gmail.com"
                  className="text-xl font-black"
                >
                  tihor9650@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-22 h-22 bg-purple-500 rounded-full flex items-center justify-center">
                <IoCall
                  style={{ height: "3.5rem", width: "3.5rem", color: "white" }}
                />
              </div>
              <div className="flex flex-col">
                <p className="uppercase text-gray-700">call me-</p>
                <p className="text-xl font-black">+91 9650521719</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-22 h-22 bg-purple-500 rounded-full flex items-center justify-center">
                <FaLinkedinIn
                  style={{ height: "3.5rem", width: "3.5rem", color: "white" }}
                />
              </div>
              <div className="flex flex-col">
                <p className="uppercase text-gray-700">find me-</p>
                <a
                  href="https://www.linkedin.com/in/rohitsharma001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-black"
                >
                  www.linkedin.com/in/rohitsharma001
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="w-full h-full py-10">
        <div class="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4 px-4 border-b py-5">
          {/* <!-- Logo and Name --> */}
          <div class="flex items-center gap-2">
            {/* <!-- Simple architecture/building icon (SVG for demo) --> */}

            <div>
              <p class="font-semibold text-xl uppercase">Rohit Sharma</p>
              <p class="text-sm text-gray-600 uppercase">Web developer</p>
            </div>
          </div>
          {/* <!-- Links --> */}
          <nav class="hidden md:flex gap-6 text-sm text-gray-700 uppercase">
            <Link
              to={"home"}
              offset={0}
              duration={1000}
              smooth
              className="hover:text-black transition-all duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to={"about"}
              offset={0}
              duration={1000}
              smooth
              className="hover:text-black transition-all duration-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to={"samples"}
              offset={0}
              duration={1000}
              smooth
              className="hover:text-black transition-all duration-300 cursor-pointer"
            >
              Samples
            </Link>
            <Link
              to={"skill"}
              offset={0}
              duration={1000}
              smooth
              className="hover:text-black transition-all duration-300 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to={"connect"}
              offset={0}
              duration={1000}
              smooth
              className="hover:text-black transition-all duration-300 cursor-pointer"
            >
              Connect
            </Link>
          </nav>
          {/* <!-- Social Icons --> */}
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/__rohit_0o/"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-1.5 rounded hover:bg-black hover:text-white transition duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Rohit9-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-1.5 rounded hover:bg-black hover:text-white transition duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-1.5 rounded hover:bg-black hover:text-white transition duration-300"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-1.5 rounded hover:bg-black hover:text-white transition duration-300"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitsharma001"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-1.5 rounded hover:bg-black hover:text-white transition duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div class="max-w-6xl mx-auto flex items-center justify-between px-4 pt-3 text-xs text-gray-500">
          <span>© Created by</span>
          <span class="font-semibold">All rights Reserved</span>
        </div>
      </footer>
    </section>
  );
};

export default Connect;
