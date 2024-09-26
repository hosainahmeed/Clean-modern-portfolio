const skills = {
  frontend: [
    "HTML/CSS",
    "JavaScript (ES6+)",
    "React",
    "Version Control/Git",
    "Performance Optimization",
    "UI/UX Design Basics",
    "AJAX/APIs (fetch, Axios)",
    "Bootstrap",
    "Tailwind CSS",
    "MUI",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "RESTful APIs",
    "GraphQL",
    "Authentication/Authorization",
    "Serverless Functions",
    "Docker",
    "AWS",
    "CI/CD",
  ],
  tools: ["figma", "adobe xd", "visual studio"],
};
const getSkillImage = (skill) => {
  switch (skill) {
    case "HTML/CSS":
      return "https://i.ibb.co/xfcZ1L3/95596-html-512x512.png";
    case "JavaScript (ES6+)":
      return "//i.ibb.co/Tq6C7S9/javascript-logo.png";
    case "React":
      return "path/to/react.png";
    case "Version Control/Git":
      return "path/to/git.png";
    case "Performance Optimization":
      return "path/to/performance-optimization.png";
    case "UI/UX Design Basics":
      return "path/to/ui-ux-design.png";
    case "AJAX/APIs (fetch, Axios)":
      return "path/to/ajax-apis.png";
    case "Bootstrap":
      return "path/to/bootstrap.png";
    case "Tailwind CSS":
      return "path/to/tailwind.png";
    case "MUI":
      return "path/to/mui.png";
    case "Node.js":
      return "path/to/nodejs.png";
    case "Express.js":
      return "path/to/expressjs.png";
    case "MongoDB":
      return "path/to/mongodb.png";
    case "SQL":
      return "path/to/sql.png";
    case "RESTful APIs":
      return "path/to/restful-apis.png";
    case "GraphQL":
      return "path/to/graphql.png";
    case "Authentication/Authorization":
      return "path/to/authentication.png";
    case "Serverless Functions":
      return "path/to/serverless-functions.png";
    case "Docker":
      return "path/to/docker.png";
    case "AWS":
      return "path/to/aws.png";
    case "CI/CD":
      return "path/to/cicd.png";
    case "figma":
      return "path/to/figma.png";
    case "adobe xd":
      return "path/to/adobe-xd.png";
    case "visual studio":
      return "path/to/visual-studio.png";
    default:
      return null;
  }
};

function SkillSection() {
  return (
 <div></div>
  );
}

export default SkillSection;
