import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

// Sample project data
const projectData = [
  {
    id: 1,
    title: "Weather App",
    description: "A responsive web app to check real-time weather updates.",
    img: "https://cdn.shopify.com/s/files/1/0902/5292/files/Twitter.jpg?v=1638979734", 
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my work.",
    img: "https://repository-images.githubusercontent.com/504857779/05714359-7fad-48aa-8770-dd40931774cf",
  },
  // Add more projects as needed
];

const Projects = React.forwardRef((props, ref) => {
  // Array to hold hover states for each project
  const [hoverStates, setHoverStates] = useState(
    Array(projectData.length).fill(false)
  );

  const handleMouseInAnimation = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseOutAnimation = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div ref={ref} className="projects-container">
      <div id="projects" className="mt-28 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-6 items-center">
          <h3>Projects</h3>
          <h3 className="font-black text-2xl md:text-6xl">
            Explore My Recent Work
          </h3>
          <h3>Here are my latest projects.</h3>
        </div>

        {projectData.map((project, index) => (
          <div key={project.id} className="flex flex-col gap-6 items-center mt-28">
            <div
              onMouseEnter={() => handleMouseInAnimation(index)}
              onMouseLeave={() => handleMouseOutAnimation(index)}
              className="w-full h-[650px] relative rounded-xl bg-slate-500 overflow-hidden"
            >
              <img
                className="w-full h-full object-cover object-top"
                src={project.img}
                alt={project.title}
              />

              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: hoverStates[index] ? "0%" : "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 w-full backdrop-blur-md h-1/2 px-12 pt-8"
              >
                <h1 className="text-white text-5xl font-black">{project.title}</h1>
                <p>{project.description}</p>
                <Button>LIVW WEBSITE</Button>
              </motion.div>
            </div>

            <div>
              <h1 className="text-3xl font-black">{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))}

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
