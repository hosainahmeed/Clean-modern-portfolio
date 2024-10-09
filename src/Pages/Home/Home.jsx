import { useRef } from "react"
import Banner from "./HomePage/Banner/Banner"
import Projects from "./HomePage/ProjectSection/Projects"
import SkillSection from "./Skills/SkillSection"
import Cursor from "../AdminHome/components/Cursor"

function Home() {
  const projectsRef = useRef()
  return (
    <div className="px-2 bg-primary relative"> 
      <Cursor />
      <Banner projectsRef={projectsRef}></Banner>
      <Projects ref={projectsRef}></Projects>
      <SkillSection></SkillSection>
    </div>
  )
}

export default Home