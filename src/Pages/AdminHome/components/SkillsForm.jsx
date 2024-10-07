import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../public/hooks/useAxios";

const SkillForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [selectedSkillType, setSelectedSkillType] = useState("frontend");
  const [skills, setSkills] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axiosPublic.get("/skill");
      setSkills(response.data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const onSubmit = async (formData) => {
    const data = {
      name: formData.name,
      proficiency: formData.proficiency,
      experience_years: parseInt(formData.experience_years),
      image: formData.image,
      category: selectedSkillType,
      description: formData.description,
    };

    try {
      await axiosPublic.post("/skill", data);
      reset();
      fetchSkills();
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  const renderSkillsTable = (category) => {
    const categorySkills = skills.filter(skill => skill.category === category && skill.name);
    if (categorySkills.length === 0) return null;

    return (
      <div key={category} className="mb-8">
        <h3 className="text-xl font-bold mb-4 capitalize">{category} Skills</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Proficiency</th>
              <th className="border p-2">Experience (Years)</th>
            </tr>
          </thead>
          <tbody>
            {categorySkills.map((skill, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="border p-2">{skill.name}</td>
                <td className="border p-2">{skill.proficiency}</td>
                <td className="border p-2">{skill.experience_years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-12 bg-white rounded-lg shadow-lg p-6 space-y-4"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Skill Type</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={selectedSkillType}
            onChange={(e) => setSelectedSkillType(e.target.value)}
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="tools">Tools</option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Skill Name</span>
          </label>
          <input
            type="text"
            placeholder="e.g., HTML, React"
            className="input input-bordered w-full"
            {...register("name", {
              required: "Skill name is required",
              maxLength: 80,
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Proficiency</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Expert, Intermediate"
            className="input input-bordered w-full"
            {...register("proficiency", {
              required: "Proficiency is required",
            })}
          />
          {errors.proficiency && (
            <p className="text-red-500">{errors.proficiency.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Experience (Years)</span>
          </label>
          <input
            type="number"
            placeholder="e.g., 3"
            className="input input-bordered w-full"
            {...register("experience_years", {
              required: "Experience is required",
              max: 50,
              valueAsNumber: true,
            })}
          />
          {errors.experience_years && (
            <p className="text-red-500">{errors.experience_years.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Skill Image URL</span>
          </label>
          <input
            type="url"
            placeholder="e.g., https://example.com/skill-image.png"
            className="input input-bordered w-full"
            {...register("image", {
              required: "Skill image URL is required",
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Invalid URL format",
              },
            })}
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="e.g., Building modern, responsive layouts with CSS."
            className="textarea textarea-bordered w-full"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <button type="submit" className="btn btn-primary w-full">
            Add Skill
          </button>
        </div>
      </form>

      <div className="skills-tables">
        {renderSkillsTable("frontend")}
        {renderSkillsTable("backend")}
        {renderSkillsTable("tools")}
      </div>
    </div>
  );
};

export default SkillForm;