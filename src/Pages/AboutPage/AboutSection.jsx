import useAxiosPublic from "../../../public/hooks/useAxios";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

const AboutSection = () => {
  const axiosPublic = useAxiosPublic();
  const { data: aboutData, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const res = await axiosPublic.get("/about");
      return res.data[0];
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (!aboutData || !aboutData.aboutSection) return <p>No data found</p>;

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-10">
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Text Section */}
        <div className="md:w-1/2 w-full mt-[20%] md:px-12">
          <h1 className="text-6xl font-black text-gradient px-4 py-2 border-2 inline-block rounded-full mb-4">
            HM
          </h1>
          <p className="text-3xl uppercase py-4 text-gray-600">About Me</p>

          {aboutData.aboutSection.questions.map((item) => (
            <div key={item.id} className="py-8 md:py-12">
              <h2 className="text-5xl md:text-4xl font-bold text-blue-700">
                {item.title}
              </h2>
              <p className="text-base md:text-lg font-normal mt-4">
                {item.description}
              </p>
              <div className="divider"></div>
            </div>
          ))}

          {/* Extra Details */}
          <div className="py-8 md:py-12">
            <h2 className="text-5xl md:text-4xl font-bold text-blue-700">
              My Skills
            </h2>
            <p className="text-base md:text-lg font-normal mt-4">
              JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, GSAP
            </p>
            <div className="divider"></div>
          </div>

          <div className="py-8 md:py-12">
            <h2 className="text-5xl md:text-4xl font-bold text-blue-700">
              Hobbies
            </h2>
            <p className="text-base md:text-lg font-normal mt-4">
              I enjoy coding, exploring new technologies, and watching anime.
            </p>
            <div className="divider"></div>
          </div>
        </div>

        {/* Three.js Image Section */}
        <div className="md:w-1/2 md:min-h-[80vh] sticky md:top-48 md:ml-12">
          <img
            src={aboutData.aboutSection.image.src}
            alt={aboutData.aboutSection.image.alt}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
