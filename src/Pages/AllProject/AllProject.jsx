import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Function to generate mock project data
const generateProjects = (count) => {
  const projectTypes = ["Web", "Mobile", "Desktop", "AI", "IoT"];
  const projects = [];

  for (let i = 1; i <= count; i++) {
    projects.push({
      id: i,
      title: `Project ${i}`,
      description: `This is a ${
        projectTypes[Math.floor(Math.random() * projectTypes.length)]
      } project.`,
      image: `https://picsum.photos/seed/${i}/300/200`,
      link: `https://example.com/project${i}`,
      tags: ["React", "Node.js", "MongoDB"]
        .sort(() => 0.5 - Math.random())
        .slice(0, 2),
      videoUrl: "https://www.example.com/sample-video.mp4",
    });
  }

  return projects;
};

function ProjectCard({ project, onClick, isSelected }) {
  return (
    <motion.div
      layout
      className={`bg-[#121214] text-white p-2 lg:h-[800px] flex flex-col justify-between shadow-lg rounded-lg overflow-hidden ${
        isSelected ? "fixed inset-4 z-50 flex items-center justify-center" : ""
      }`}
      initial={{ borderRadius: 8 }}
    >
      {!isSelected ? (
        <>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-2/3 object-cover rounded-lg"
            layoutId={`project-image-${project.id}`}
          />
          <motion.div className="p-4 lg:p-6 flex flex-col justify-between h-1/2">
            <div>
              <motion.h2
                layoutId={`project-title-${project.id}`}
                className="text-xl lg:text-2xl font-semibold mb-2"
              >
                {project.title}
              </motion.h2>
              <motion.p
                layoutId={`project-description-${project.id}`}
                className="text-sm lg:text-base text-white mb-2 lg:mb-4"
              >
                {project.description}
              </motion.p>
              <motion.div
                layoutId={`project-tags-${project.id}`}
                className="flex flex-wrap gap-1 lg:gap-2 mb-2 lg:mb-4"
              >
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-1.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-2">
              <motion.a
                href={project.link}
                className="w-full sm:w-auto text-center inline-block bg-white text-black py-2 px-4 rounded hover:bg-[#222] transition-colors duration-300 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.a>
              <motion.button
                onClick={() => onClick(project)}
                className="w-full sm:w-auto text-center bg-white text-black py-2 px-4 rounded hover:bg-[#222] transition-colors duration-300 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demo Video
              </motion.button>
            </div>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full  py-12 flex flex-col items-center justify-center bg-black bg-opacity-75 p-4"
        >
          <video
            src={project.videoUrl}
            controls
            className="w-full max-h-full"
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
          <motion.button
            onClick={() => onClick(null)}
            className="mt-4 bg-primary text-secondary py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close Video
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

function AllProject() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
useEffect(()=>{
  window.scrollTo(0,0)
})
  useEffect(() => {
    // Simulate API call with generated data
    const fetchProjects = () => {
      const generatedProjects = generateProjects(10); // Generate 10 projects
      setProjects(generatedProjects);
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project?.id === selectedProject?.id ? null : project);
  };

  return (
    <div className="bg-[#000]">
      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">All Projects</h1>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-2 "
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${
                  index % 3 === 0 ? "lg:col-span-8" : "lg:col-span-4"
                }`}
              >
                <ProjectCard
                  project={project}
                  onClick={handleProjectClick}
                  isSelected={selectedProject?.id === project.id}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default AllProject;

