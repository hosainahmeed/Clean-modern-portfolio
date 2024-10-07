//   // src/pages/ManageSkills.jsx
//   import { useState, useEffect } from "react";
//   import SkillForm from "../components/SkillsForm.jsx";
// import { fetchSkills } from "../utils/api.js";

//   const ManageSkills = () => {
//     // Initialize skillsData with a structure that includes empty arrays for frontend, backend, and tools
//     const [skillsData, setSkillsData] = useState({
//       frontend: [],
//       backend: [],
//       tools: [],  
//     });

//     useEffect(() => {
//       const loadSkills = async () => {
//         try {
//           const data = await fetchSkills();
//           if (data.length > 0) {
//             setSkillsData(data[0]); // Assuming you want the first object in the array
//           }
//         } catch (error) {
//           console.error("Failed to fetch skills:", error);
//         }
//       };

//       loadSkills();
//     }, []);

//     return (
//       <div className="p-4">
//         <h1 className="text-xl font-bold">Manage Skills</h1>
//         <SkillForm setSkills={setSkillsData} />

//         {skillsData && (
//           <div className="mt-4">
//             <h2 className="text-lg font-semibold">All Skills:</h2>

//             <table className="w-full mt-2 border-collapse">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="text-left py-2 px-4 border-b text-md font-semibold text-gray-700 capitalize">
//                     Frontend
//                   </th>
//                   <th className="text-left py-2 px-4 border-b text-md font-semibold text-gray-700 capitalize">
//                     Backend
//                   </th>
//                   <th className="text-left py-2 px-4 border-b text-md font-semibold text-gray-700 capitalize">
//                     Tools
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border-b">
//                     <ul>
//                       {skillsData.frontend.map((skill) => (
//                         <li key={skill._id || skill.name}>{skill.name}</li>
//                       ))}
//                     </ul>
//                   </td>
//                   <td className="border-b">
//                     <ul>
//                       {skillsData.backend.map((skill) => (
//                         <li key={skill._id || skill.name}>{skill.name}</li>
//                       ))}
//                     </ul>
//                   </td>
//                   <td className="border-b">
//                     <ul>
//                       {skillsData.tools.map((tool) => (
//                         <li key={tool._id || tool.name}>{tool.name}</li>
//                       ))}
//                     </ul>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     );
//   };

//   export default ManageSkills;

function ManageProjects() {
  return (
    <div>
      <h1>Manage Projects</h1>
    </div>
  )
}

export default ManageProjects