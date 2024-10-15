import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxios";

function useSkillsImage() {
  const axiosPublic = useAxiosPublic();

  const getPaginatedSkills = (category) => {
    const skillsArray = skills.filter((skill) => skill.category === category);
    return skillsArray;
  };

  const { data: skills = [], isLoading: isSkillsLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const response = await axiosPublic.get("/skill");
      return response.data;
    },
  });
//   console.log(skills);
  // Ensure skills is defined before using it
  if (!skills || isSkillsLoading) {
    return [[], [], []]; // Return empty arrays if skills is not available
  }

  const toolsImages = getPaginatedSkills("tools").map((skill) => skill?.image);
  const allSkillimage = skills.map((skill) => skill?.image);
  
  const frontImages = getPaginatedSkills("frontend").map(
    (skill) => skill?.image
  );
  const backImages = getPaginatedSkills("backend").map((skill) => skill?.image);
  console.log(allSkillimage);

  return [allSkillimage,toolsImages, frontImages, backImages];
}
export default useSkillsImage;
