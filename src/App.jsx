import { useEffect } from "react"
import Lenis from '@studio-freight/lenis'
import Home from './Pages/Home/Home'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div style={{ height: '200vh' }}> {/* Ensure there's enough height to scroll */}
      <Home />
    </div>
  )
}

export default App

