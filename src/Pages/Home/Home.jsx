import { useRef } from "react"
import Banner from "./HomePage/Banner/Banner"
import Projects from "./HomePage/ProjectSection/Projects"
import SkillSection from "./Skills/SkillSection"
import Marquee from "../../../public/Component/marquee/Marquee"

function Home() {
  const projectsRef =useRef()
  return (
    <div className="px-2">
        <Banner projectsRef={projectsRef}></Banner>
        <Marquee text="Hi my name is Hosain Ali welcome to my portfolio" />
        <Projects ref={projectsRef}></Projects>
        <SkillSection></SkillSection>
    </div>
  )
}

export default Home