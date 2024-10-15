import ProjectsContain from "../../../public/Component/ProjectsContain";

function NewProjects() {
  return (
    <div>
      <div className="text-center w-2/4 mx-auto">
        <p className="text-base uppercase bg-[#7556F5] text-white font-bold px-6 py-3 rounded-lg inline-flex">
          Recente work
        </p>
        <h1 className="text-5xl my-5 font-bold text-white">
          Explore My Latest <span className="text-[#8F8F92]">Work</span> and{" "}
          <span className="text-[#8F8F92]">Discover</span> the Craftsmanship
          Behind <span className="text-[#8F8F92]">Each</span> Design
        </h1>
        <p className="text-base text-white">
          Explore my latest work and discover the craftsmanship behind each
          design: a detailed look into how I bring innovation and creativity to
          life
        </p>
      </div>
      <div className="sticky top-28 left-0 flex flex-col gap-12">
        <ProjectsContain
          title="E-commerce Website Redesign"
          description="Designed an interactive and engaging educational platform aimed at improving online learning experiences."
          clients={["Client A", "Client B", "Client C"]}
          imageSrc="https://nextui.org/images/album-cover.png"
          category="UI/UX"
        />
        <ProjectsContain
          title="E-commerce Website Redesign"
          description="Designed an interactive and engaging educational platform aimed at improving online learning experiences."
          clients={["Client A", "Client B", "Client C"]}
          imageSrc="https://nextui.org/images/album-cover.png"
          category="UI/UX"
        />
        <ProjectsContain
          title="E-commerce Website Redesign"
          description="Designed an interactive and engaging educational platform aimed at improving online learning experiences."
          clients={["Client A", "Client B", "Client C"]}
          imageSrc="https://nextui.org/images/album-cover.png"
          category="UI/UX"
        />
      </div>
    </div>
  );
}

export default NewProjects;
