import { useRef } from "react"
import Banner from "./HomePage/Banner/Banner"
import Projects from "./HomePage/ProjectSection/Projects"

function Home() {
  const projectsRef =useRef()
  return (
    <div className="px-2">
        <Banner projectsRef={projectsRef}></Banner>
        <Projects ref={projectsRef}></Projects>
    </div>
  )
}

export default Home