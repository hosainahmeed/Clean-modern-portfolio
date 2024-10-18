import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../public/hooks/useAxios";

const UpdateSkills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const skillid = location.state;
//   console.log(skillid);

  const { data: skills = [], isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const result = await axiosPublic.get("/skill");
      return result.data;
    },
  });

  if (isLoading) {
    return <span>...loading</span>;
  }

  // Find the skill to update based on skillid
  const skillToUpdate = skills.find((skill) => skill._id === skillid);
// console.log(skillToUpdate);

  const { _id ,category, description, experience_years, image, name, proficiency } =
    skillToUpdate;
  const onSubmit = async (formData) => {
    console.log(formData);
    axiosPublic.put(`/skill/${_id}`,formData)
    .then(result =>{
        console.log(result.data); 
    })
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-12 rounded-lg shadow-lg p-6 space-y-4"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Skill Type</span>
          </label>
          <select
            className="select select-bordered w-full"
            defaultValue={category}
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
            defaultValue={name} // Set default value from skill data
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
            defaultValue={proficiency} // Set default value from skill data
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
            defaultValue={experience_years} // Set default value from skill data
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
            className="input input-bordered w-full"
            defaultValue={image} // Set default value from skill data
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
            defaultValue={description}
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
            Update Skill
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSkills;
