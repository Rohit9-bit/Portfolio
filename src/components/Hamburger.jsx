import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hamburger = () => {
  const navItems = ["home", "about", "samples", "skills", "connect"];
  const socialItems = [["Instagram", "https://www.instagram.com/__rohit_0o/"], ["youtube", "https://youtube.com"], ["Linkedin", "https://www.linkedin.com/in/rohitsharma001"], ["github", "https://github.com/Rohit9-bit"]];
  const navRef = useRef(null);
  const tl = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], { autoAlpha: 0, x: -20 });
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(navRef.current, {
        xPercent: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.2,
          ease: "power1.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: -20,
          duration: 0.2,
          ease: "power2.out",
        },
        "<+0.2"
      );
  });

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="bg-black fixed h-full w-full z-50 md:w-1/2 md:left-1/2 py-28 text-white px-10 flex flex-col justify-between gap-10"
      >
        <div className="flex flex-col">
          <div className="text-white/70 uppercase text-5xl md:text-6xl lg:text-8xl flex flex-col gap-2">
            {navItems.map((item, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link to={`${item}`} offset={0} duration={1000} smooth onClick={toggleMenu} className="hover:text-white tarnsition-all duration-300 cursor-pointer">
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={contactRef}
          className="flex flex-col flex-wrap font-light gap-8 lg:flex-row justify-between px-5"
        >
          <div className="flex flex-col gap-0.1">
            <p className="uppercase text-white/50 tracking-wider">e-mail</p>
            <p className="text-white/70 lowercase text-xl tracking-widest">
              tihor9650@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-white/50 tracking-wider uppercase">
              Social Media
            </p>
            <div className="text-white/70 uppercase flex flex-row flex-wrap gap-x-2 gap-y-2">
              {socialItems.map((item, index) => (
                <a
                  href={`${item[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="hover:text-white transition-colors duration-300 tracking-widest text-sm"
                >
                  {item[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div
        className="fixed z-50 right-3 sm:right-5 md:right-6 lg:right-8 top-3 md:top-5 bg-black rounded-full h-12 w-12 md:h-14 md:w-14 flex justify-center items-center hover:scale-105 hover:bg-gray-900 transition-all duration-300 cursor-pointer "
        onClick={toggleMenu}
      >
       <div className="flex flex-col space-y-1">
          <div className="w-5 h-0.5 bg-white transition-all duration-300"></div>
          <div className="w-5 h-0.5 bg-white transition-all duration-300"></div>
          <div className="w-5 h-0.5 bg-white transition-all duration-300"></div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
