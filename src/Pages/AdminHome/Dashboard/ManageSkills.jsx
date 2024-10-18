import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../../../../public/hooks/useAxios";
import SkillForm from "../components/SkillsForm.jsx";
import Swal from "sweetalert2";
import { Skeleton } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function ManageSkills() {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const itemsPerPage = 3;

  const [categoryPages, setCategoryPages] = useState({});

  const { data: skills, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const result = await axiosPublic.get("/skill");
      return result.data;
    },
  });

  const navigate = useNavigate();
  const handleUpdate = (skillid) => {
    console.log(skillid);
    
    navigate("/updateskills", { state: skillid });
  };

  const handleDelete = async (skillId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axiosPublic.delete(`/skill/${skillId}`);
        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "The skill has been deleted.",
            icon: "success",
          });
          // Trigger a refetch of the skills data
          queryClient.invalidateQueries(["skills"]);
        } else {
          throw new Error("Failed to delete skill");
        }
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to delete the skill. Please try again.",
        icon: "error",
      });
    }
  };

  const categorizedSkills = skills?.reduce((acc, skill) => {
    if (skill.name) {
      acc[skill.category] = [...(acc[skill.category] || []), skill];
    }
    return acc;
  }, {});

  const paginateSkills = (skills, category, perPage) => {
    const page = categoryPages[category] || 1;
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return skills.slice(start, end);
  };

  const handlePageChange = (category, newPage) => {
    setCategoryPages((prev) => ({
      ...prev,
      [category]: newPage,
    }));
  };

  return (
    <div className="p-4 w-full px-12">
      <h1 className="text-2xl font-bold mb-6">Manage Skills</h1>
      <SkillForm />

      {isLoading ? (
        <div className="mt-4 w-full">
          <h2 className="text-xl font-semibold mb-4">All Skills:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="mb-8">
                <Skeleton className="h-6 w-1/3 mb-2 rounded-lg" />
                <div className="shadow-md rounded-lg overflow-hidden">
                  <div className="p-4">
                    {[1, 2, 3].map((itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-3 mb-4"
                      >
                        <Skeleton className="h-3 w-2/5 rounded-lg" />
                        <div className="flex gap-2">
                          <Skeleton className="h-8 w-16 rounded" />
                          <Skeleton className="h-8 w-16 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-100">
                    <Skeleton className="h-8 w-20 rounded" />
                    <Skeleton className="h-4 w-12 rounded" />
                    <Skeleton className="h-8 w-20 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : categorizedSkills && Object.keys(categorizedSkills).length > 0 ? (
        <div className="mt-4 w-full">
          <h2 className="text-xl font-semibold mb-4">All Skills:</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(categorizedSkills).map(
              ([category, categorySkills]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-lg font-semibold mb-2">{category}</h3>
                  <div className="shadow-md rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          {["Name", "Actions"].map((header) => (
                            <th
                              key={header}
                              className="py-3 px-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {paginateSkills(
                          categorySkills,
                          category,
                          itemsPerPage
                        ).map((skill) => (
                          <tr key={skill._id} className="hover:bg-gray-50">
                            <td className="py-4 px-4 text-sm">{skill.name}</td>
                            <td className="py-4 px-4 text-sm">
                              <div className="flex flex-wrap justify-start space-x-2">
                                <button
                                  onClick={() => handleUpdate(skill._id)}
                                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition duration-300 mb-1 sm:mb-0"
                                >
                                  Update
                                </button>
                                <button
                                  onClick={() => handleDelete(skill._id)}
                                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition duration-300"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="flex justify-between items-center p-4 bg-gray-100">
                      <button
                        onClick={() =>
                          handlePageChange(
                            category,
                            Math.max((categoryPages[category] || 1) - 1, 1)
                          )
                        }
                        disabled={(categoryPages[category] || 1) === 1}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition duration-300 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      <span>Page {categoryPages[category] || 1}</span>
                      <button
                        onClick={() =>
                          handlePageChange(
                            category,
                            (categoryPages[category] || 1) + 1
                          )
                        }
                        disabled={
                          (categoryPages[category] || 1) * itemsPerPage >=
                          categorySkills.length
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition duration-300 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-gray-600">
          No skills found. Add some skills using the form above.
        </p>
      )}
    </div>
  );
}

export default ManageSkills;
