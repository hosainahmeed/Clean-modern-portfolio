import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

// Sample project data
const projectData = [
  {
    _id: 1,
    title: "Weather App",
    description: "A responsive web app to check real-time weather updates.",
    img: "https://mixdesign.club/themeforest/blayden/img/demo/screens/1.webp", 
  },
  {
    _id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my work.",
    img: "https://mixdesign.club/themeforest/blayden/img/demo/screens/2.webp",
  },
  // Add more projects as needed
];

const Projects = React.forwardRef((props, ref) => {
  const [isInView, setIsInView] = useState(false);
  const projectsRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", 
        threshold: 0,
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div
      id="projects"
      ref={(el) => {
        projectsRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={`projects-container transition-colors pb-28 duration-500 rounded-2xl px-4 ${
        isInView ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="mt-28 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-6 text-center  items-center">
          <h3 className="mt-12">Projects</h3>
          <h3 className="font-black text-2xl md:text-6xl">
            Explore My Recent Work
          </h3>
          <h3>Here are my latest projects.</h3>
        </div>

        {projectData.map((project, index) => (
          <div key={project._id} className="flex flex-col gap-6 items-start mt-28">
            <div
              onMouseEnter={() => handleMouseInAnimation(index)}
              onMouseLeave={() => handleMouseOutAnimation(index)}
              className="w-full h-[250px] md:h-[500px] lg:h-[750px] relative rounded-xl bg-slate-500 overflow-hidden"
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
                className="absolute bottom-0 w-full flex items-start gap-4 flex-col bg-black h-1/2 px-12 pt-8"
              >
                <h1 className="text-white text-5xl font-black">{project.title}</h1>
                <p className=" text-white">{project.description}</p>
                <Button className="text-black  bg-white">LIVW WEBSITE</Button>
              </motion.div>
            </div>

            <div className="items-start">
              <h1 className="text-3xl font-black">{project.title}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))}

        <div className="w-full text-center mt-12">
          <Button
            className="bg-white border-2 px-8 text-2xl font-black  py-6 border-black text-black"
            color="primary"
            variant="flat"
          >
            <Link to="/allprojects" >All projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
});

Projects.displayName = "Projects";
export default Projects;
