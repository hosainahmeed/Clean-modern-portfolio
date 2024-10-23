import { useRef } from "react"
import Banner from "./HomePage/Banner/Banner"
import Projects from "./HomePage/ProjectSection/Projects"
import SkillSection from "./Skills/SkillSection"
import Cursor from "../AdminHome/components/Cursor"
import Contact from "../Contact/Contact"

function Home() {
  const projectsRef = useRef()
  return (
    <div className="px-2  relative"> 
      <Cursor className='hidden md:block' />
      <Banner projectsRef={projectsRef}></Banner>
      <Projects ref={projectsRef}></Projects>
      <SkillSection></SkillSection>
      <Contact></Contact>
    </div>
  )
}

export default Home
