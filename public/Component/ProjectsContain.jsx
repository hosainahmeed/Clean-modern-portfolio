import { test } from "../../src/assets/BannerImages/BannerScrollImage/q.jpg";

function ProjectsContain({ title, description, clients, imageSrc, category }) {
  return (
    <div className="w-full h-screen">
      <div>
        <img src={test} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
        <h1>{clients}</h1>
        <h1>{clients}</h1>
      </div>
    </div>
  );
}

export default ProjectsContain;
