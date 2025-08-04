import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRef = useRef([]);
  const lines = text.split("/n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    if (lineRef.current.length > 0) {
      gsap.from(lineRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        ScrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRef.current[index] = el)}
          className="block leading-relaxed tracking-tight text-pretty"
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
