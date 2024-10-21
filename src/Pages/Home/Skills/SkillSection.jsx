import { Card, Skeleton } from "@nextui-org/react";;
import useAxios from "../../../../public/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Services from "./Services";

function SkillSection() {

  const axiosPublic = useAxios();

  // Fetching skills using react-query
  const { data: skills = [], isLoading: isSkillsLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const response = await axiosPublic.get("/skill");
      return response.data;
    },
  });

  const filterSkill = (category) => {
    const skillsArray = skills.filter((skill) => skill.category === category);
    return skillsArray;
  };

  return (
    <div
      id="skills"
      className="mt-16 px-4 lg:px-8 max-w-screen-2xl mx-auto text-secondary"
    >
      {/* Top section */}
      <div className="w-full space-y-8 text-center lg:text-left">
        {isSkillsLoading ? (
          <Skeleton className="h-12 w-3/5 mx-auto rounded-lg" />
        ) : (
          <div className="text-center">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Showcasing My Skills and Tools
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              Creating dynamic, responsive web applications with cutting-edge
              technologies.
            </p>
          </div>
        )}
      </div>

      <div className="divider my-6"></div>

      {/* Skill display section */}
      <div>
        {isSkillsLoading ? (
          <Card className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
          </Card>
        ) : (
          <div className="flex flex-col justify-center items-center gap-16 py-12">
            {/* Front-end skills */}
            <div className="w-full">
              <h2 className="text-center text-2xl font-semibold mb-8 text-secondary">
                Front-end Skills
              </h2>
              <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filterSkill("frontend").map((skill) => (
                  <div
                    key={skill._id}
                    className="group hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <div className="p-6 shadow-lg rounded-xl flex items-center justify-center flex-col bg-white">
                      <img
                        className="w-12 h-12 object-cover mx-auto"
                        src={skill?.image}
                        alt={skill.name}
                      />
                      <h3 className="mt-4 text-lg font-medium text-secondary">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back-end skills */}
            <div className="w-full">
              <h2 className="text-center text-2xl font-semibold mb-8 text-secondary">
                Back-end Skills
              </h2>
              <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filterSkill("backend").map((skill) => (
                  <div
                    key={skill._id}
                    className="group hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <div className="p-6 shadow-lg rounded-xl flex items-center justify-center flex-col bg-white group-hover:bg-secondary-light">
                      <img
                        className="w-12 h-12 object-cover mx-auto"
                        src={skill?.image}
                        alt={skill.name}
                      />
                      <h3 className="mt-4 text-lg font-medium text-secondary">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="w-full">
              <h2 className="text-center text-2xl font-semibold mb-8 text-secondary">
                Tools
              </h2>
              <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filterSkill("tools").map((skill) => (
                  <div
                    key={skill._id}
                    className="group hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <div className="p-6 shadow-lg rounded-xl flex items-center justify-center flex-col bg-white group-hover:bg-secondary-light">
                      <img
                        className="w-12 h-12 object-cover mx-auto"
                        src={skill?.image}
                        alt={skill.name}
                      />
                      <h3 className="mt-4 text-lg font-medium text-secondary group-hover:text-white">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Services />
    </div>
  );
}

export default SkillSection;
