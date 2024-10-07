import axios from "axios";

const API_URL = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchProjects = async () => {
  const response = await API_URL.get("/projects");
  return response.data;
};

export const fetchSkills = async () => {
  const response = await API_URL.get("/skill");
  return response.data;
};

export const fetchContent = async () => {
  const response = await API_URL.get("/content");
  return response.data;
};

export const fetchProfile = async () => {
  const response = await API_URL.get("/profile");
  return response.data;
};

export const createProject = async (project) => {
  const response = await API_URL.post("/projects", project);
  return response.data;
};

export const createSkill = async (skill) => {
  const response = await API_URL.post("/skills", skill);
  return response.data;
};

export const createContent = async (content) => {
  const response = await API_URL.post("/content", content);
  return response.data;
};

export const updateProfile = async (profile) => {
  const response = await API_URL.put("/profile", profile);
  return response.data;
};
