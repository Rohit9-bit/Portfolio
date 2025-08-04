import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const clipImgRef = useRef(null);
  const imgRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: clipImgRef.current,
        start: "center center",
        end: "+800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(imgRef.current, {
      width: "100vw",
      height: "100vh",
      rotate: 0,
      borderRadius: 0,
      ease: "power2.inOut",
    });
  });

  return (
    <section className="min-h-screen w-screen bg-[#f2f5ff] overflow-hidden">
      <div className="relative flex flex-col justify-center items-center">
        <div className="flex justify-center uppercase text-center mt-10 py-10 text-3xl sm:text-4xl md:text-5xl">
          <h2 className="font-bold">
            Minimalist Design <br /> Meets Efficient Development
          </h2>
        </div>
        <div className="absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem] uppercase">
          <h1>Your vision, transformed into a functional reality</h1>
        </div>
      </div>
      <div ref={clipImgRef} className="h-dvh w-screen">
        <div
          ref={imgRef}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          className="absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]"
        >
          <img
            src="/scrollImg.jpg"
            alt="scrollImg"
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-center">
       <div className="flex justify-center text-[20vw] uppercase leading-[20vw]">
        <h2 className="font-bold tracking-tighter">Projects</h2>
       </div>
      </div>
    </section>
  );
};

export default Scroll;5