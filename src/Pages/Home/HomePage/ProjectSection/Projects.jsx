import React, { useState } from "react";
import { motion } from "framer-motion";
import img from "../../../../assets/BannerImages/BannerScrollImage/q.jpg";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Projects = React.forwardRef((props, ref) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseInAnimation = () => {
    setIsHover(true);
  };

  const handleMouseOutAnimation = () => {
    setIsHover(false);
  };

  console.log(isHover);
  return (
    <div ref={ref} className="projects-container">
      <div id="projets" className="mt-28 max-w-screen-2xl mx-auto">
        <div id="projects" className="flex flex-col gap-6 col items-center">
          <h3>Projects</h3>
          <h3 className="font-black text-2xl md:text-6xl">
            Explore My Recent Work
          </h3>
          <h3>Here are two of my latest projects.</h3>
          <div
            onMouseEnter={handleMouseInAnimation}
            onMouseLeave={handleMouseOutAnimation}
            className="w-full h-[650px] relative rounded-xl bg-slate-500 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover object-top"
              src={img}
              alt="project"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: isHover ? "0%" : "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 w-full backdrop-blur-md h-1/2"
            >
              <h1>Hosain</h1>
            </motion.div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-black">Weather App</h1>
          <p>A responsive web app to check real-time weather updates.</p>
        </div>

        <div className="flex flex-col gap-6 col items-center mt-28">
          <div
            onMouseEnter={handleMouseInAnimation}
            onMouseLeave={handleMouseOutAnimation}
            className="w-full h-[650px] relative rounded-xl bg-slate-500 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover object-top"
              src={img}
              alt="project"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: isHover ? "0%" : "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 w-full backdrop-blur-md h-1/2"
            >
              <h1>Hosain</h1>
            </motion.div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-black">Weather App</h1>
          <p>A responsive web app to check real-time weather updates.</p>
        </div>

        <div className="w-full text-center">
          <Button
            className="rounded-none bg-white border-2 border-black text-black"
            color="primary"
            variant="flat"
          >
            <Link to="/allprojects">All projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
});
Projects.displayName = "Projects";
export default Projects;
