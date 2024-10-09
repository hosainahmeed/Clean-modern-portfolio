import { useState } from "react";
import { Card, Skeleton } from "@nextui-org/react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import useAxios from "../../../../public/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Services from "./Services";

function SkillSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentPage, setCurrentPage] = useState({
    frontend: 0,
    backend: 0,
    tools: 0,
  });
  const [pageSize] = useState(5);
  const axiosPublic = useAxios();

  // Fetching skills using react-query
  const { data: skills = [], isLoading: isSkillsLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const response = await axiosPublic.get("/skill");
      return response.data;
    },
  });


  // Handling skill click
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    document.getElementById("my_modal_5").showModal();
  };

  // Pagination handler
  const handlePageChange = (category, direction) => {
    setCurrentPage((prev) => {
      const newPage =
        direction === "next" ? prev[category] + 1 : prev[category] - 1;
      return { ...prev, [category]: newPage };
    });
  };

  // Get paginated skills
  const getPaginatedSkills = (category) => {
    const skillsArray = skills.filter((skill) => skill.category === category);
    const start = currentPage[category] * pageSize;
    return skillsArray.slice(start, start + pageSize);
  };

  return (
    <div
      id="skills"
      className="pt-28 px-4 lg:px-8 max-w-screen-2xl mx-auto text-secondary"
    >
      {/* Left section - text content */}
      <div className="w-full space-y-8 lg:mr-12 text-center lg:text-left">
        {isSkillsLoading ? (
          <div className="w-full flex items-center gap-3">
            <div className="w-full flex flex-col gap-2">
              <Skeleton className="h-3 w-3/5 rounded-lg" />
              <Skeleton className="h-3 w-4/5 rounded-lg" />
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl md:text-4xl font-black text-secondary">
              Showcasing My Skills and Tools: What I Bring to the Table
            </h1>
            <p className="text-base md:text-lg text-secondary">
              As a front-end developer, I specialize in creating dynamic and
              responsive web applications. My expertise lies in utilizing modern
              technologies to deliver exceptional user experiences.
            </p>
          </>
        )}
        <div className="divider my-4 lg:my-6"></div>
      </div>

      {/* Skill display section */}
      <div>
        {isSkillsLoading ? (
          <Card className="w-[200px] space-y-5 p-4" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-24 rounded-lg bg-default-300"></div>
            </Skeleton>
          </Card>
        ) : (
          <div className="flex flex-col lg:flex-row justify-around gap-8 items-center py-12">
            {/* Front-end skills */}
            <div>
              <h1 className="text-center text-2xl font-black mb-4">
                Front-end Skills
              </h1>
              {getPaginatedSkills("frontend").map((skill, index) => (
                <div key={skill._id} className="mb-4">
                  <ul className="timeline timeline-vertical">
                    <li>
                      <div
                        className={`${
                          index % 2 === 0 ? "timeline-end" : "timeline-start"
                        } timeline-box border-2 border-secondary bg-transparent`}
                      >
                        <h2 className="font-semibold">{skill.name}</h2>
                        <button
                          className="btn btn-xs btn-info"
                          onClick={() => handleSkillClick(skill)}
                        >
                          Details
                        </button>
                      </div>
                      <div className="timeline-middle">
                        <IoCheckmarkCircleSharp />
                      </div>
                      <hr />
                    </li>
                  </ul>
                </div>
              ))}
              {/* Pagination Controls */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="btn btn-xs btn-primary"
                  disabled={currentPage.frontend === 0}
                  onClick={() => handlePageChange("frontend", "prev")}
                >
                  Previous
                </button>
                <button
                  className="btn btn-xs btn-primary"
                  disabled={
                    currentPage.frontend + 1 >=
                    Math.ceil(
                      (skills.filter((skill) => skill.category === "frontend")
                        .length || 0) / pageSize
                    )
                  }
                  onClick={() => handlePageChange("frontend", "next")}
                >
                  Next
                </button>
              </div>
            </div>

            {/* Back-end skills */}
            <div>
              <h1 className="text-center text-2xl font-black mb-4">
                Back-end Skills
              </h1>
              {getPaginatedSkills("backend").map((skill, index) => (
                <div key={skill._id} className="mb-4">
               
                  <ul className="timeline timeline-vertical">
                    <li>
                      <div
                        className={`${
                          index % 2 === 0 ? "timeline-end" : "timeline-start"
                        } timeline-box border-2 border-secondary bg-transparent`}
                      >
                        <h2 className="font-semibold">{skill.name}</h2>
                        <button
                          className="btn btn-xs btn-info"
                          onClick={() => handleSkillClick(skill)}
                        >
                          Details
                        </button>
                      </div>
                      <div className="timeline-middle">
                        <IoCheckmarkCircleSharp />
                      </div>
                      <hr />
                    </li>
                  </ul>
                </div>
              ))}
              {/* Pagination Controls */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="btn btn-xs btn-primary"
                  disabled={currentPage.backend === 0}
                  onClick={() => handlePageChange("backend", "prev")}
                >
                  Previous
                </button>
                <button
                  className="btn btn-xs btn-primary"
                  disabled={
                    currentPage.backend + 1 >=
                    Math.ceil(
                      (skills.filter((skill) => skill.category === "backend")
                        .length || 0) / pageSize
                    )
                  }
                  onClick={() => handlePageChange("backend", "next")}
                >
                  Next
                </button>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h1 className="text-center text-2xl font-black mb-4">Tools</h1>
              {getPaginatedSkills("tools").map((skill, index) => (
                <div key={skill._id} className="mb-4">
                  <ul className="timeline timeline-vertical">
                    <li>
                      <div
                        className={`${
                          index % 2 === 0 ? "timeline-end" : "timeline-start"
                        } timeline-box border-2 border-secondary bg-transparent`}
                      >
                        <h2 className="font-semibold">{skill.name}</h2>
                        <button
                          className="btn btn-xs btn-info"
                          onClick={() => handleSkillClick(skill)}
                        >
                          Details
                        </button>
                      </div>
                      <div className="timeline-middle">
                        <IoCheckmarkCircleSharp />
                      </div>
                      <hr />
                    </li>
                  </ul>
                </div>
              ))}
              {/* Pagination Controls */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="btn btn-xs bg-secondary text-primary"
                  disabled={currentPage.tools === 0}
                  onClick={() => handlePageChange("tools", "prev")}
                >
                  Previous
                </button>
                <button
                  className="btn btn-xs bg-secondary text-primary"
                  disabled={
                    currentPage.tools + 1 >=
                    Math.ceil(
                      (skills.filter((skill) => skill.category === "tools")
                        .length || 0) / pageSize
                    )
                  }
                  onClick={() => handlePageChange("tools", "next")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {selectedSkill && (
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Skill: {selectedSkill.name}
              </h1>
              <img
                src={selectedSkill.image}
                alt={selectedSkill.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="font-semibold">
                Proficiency: {selectedSkill.proficiency}
              </p>
              <p className="font-semibold">
                Experience: {selectedSkill.experience_years} years
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {selectedSkill.description}
              </p>
            </div>
          )}
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
      <Services />
    </div>
  );
}

export default SkillSection;
