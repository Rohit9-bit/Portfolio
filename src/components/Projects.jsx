import React from "react";

const Projects = () => {
  return (
    <section
      id="samples"
      className="min-h-screen overflow-hidden flex flex-col gap-5 px-3 bg-[#f2f5ff]"
    >
      <div className="flex flex-col bg-black rounded-2xl gap-2">
        <div className="flex flex-col text-white uppercase p-3 gap-4">
          <h1 className="text-[10vw] leading-[8vw] tracking-tight text-left">
            Experience <br /> the power of <br /> boundless <br /> web innovation.
          </h1>
          <p className="text-[1.5vw] leading-[1.5vw] text-right">
            At my agency, <br /> I believe in breaking boundaries <br /> and pushing the  limits of creativity. As <br /> a visionary designer and strategist, I am <br />dedicated to transforming your ideas <br /> into extraordinary visual experiences.
          </p>
        </div>
        <div className="rounded-2xl">
          <img
            src="/ProjectImg.jpg"
            alt="projectImg"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:justify-around justify-center gap-5 py-5">
        <div className="border-2 rounded-2xl p-5 md:p-3 flex flex-col justify-between hover:bg-purple-600 hover:text-white hover:-translate-y-2 h-[350px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] transform transition-all duration-300">
          <h1 className="uppercase text-right text-4xl font-semibold leading-8 md:text-2xl md:leading-5 lg:text-6xl lg:leading-13">
        Thorough <br /> Insights
          </h1>
          <p className="text-lg leading-5 uppercase md:text-sm md:leading-4 lg:text-2xl lg:leading-6 lg:tracking-tighter">
            I start by fully immersing myself in your brand. Through thorough research and detailed conversations, I uncover a clear understanding of your vision, objectives, and audience. This strong foundation empowers me to craft designs that truly connect and inspire.
          </p>
        </div>
        <div className="border-2 rounded-2xl p-5 md:p-3 flex flex-col justify-between hover:bg-purple-600 hover:text-white hover:-translate-y-2 h-[350px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] transform transition-all duration-300">
          <h1 className="uppercase text-right text-4xl font-semibold leading-8 md:text-2xl md:leading-5  lg:text-6xl lg:leading-13">
            Thorough <br /> Insights
          </h1>
          <p className="text-lg leading-5 uppercase md:text-sm md:leading-4 lg:text-2xl lg:leading-6 lg:tracking-tighter">
            I start by fully immersing myself in your brand. Through thorough research and detailed conversations, I uncover a clear understanding of your vision, objectives, and audience. This strong foundation empowers me to craft designs that truly connect and inspire.
          </p>
        </div>
        <div className="border-2 rounded-2xl p-5 md:p-3 flex flex-col justify-between hover:bg-purple-600 hover:text-white hover:-translate-y-2 h-[350px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] transform transition-all duration-300">
          <h1 className="uppercase text-right text-4xl font-semibold leading-8 md:text-2xl md:leading-5 lg:text-6xl lg:leading-13">
            Thorough <br /> Insights
          </h1>
          <p className="text-lg leading-5 uppercase md:text-sm md:leading-4 lg:text-2xl lg:leading-6 lg:tracking-tighter">
            I start by fully immersing myself in your brand. Through thorough research and detailed conversations, I uncover a clear understanding of your vision, objectives, and audience. This strong foundation empowers me to craft designs that truly connect and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
