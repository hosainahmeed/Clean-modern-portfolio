// src/components/ThreeDImage.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDImage = ({ src, alt }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null); // Create a ref for the container

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    // Ensure the renderer is responsive
    const resizeRendererToDisplaySize = () => {
      const canvas = canvasRef.current;
      const width = containerRef.current.clientWidth; // Get container width
      const height = containerRef.current.clientHeight; // Get container height

      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      return needResize;
    };

    const textureLoader = new THREE.TextureLoader();
    const geometry = new THREE.PlaneGeometry(1.5, 1.5); // Adjust size as needed
    const material = new THREE.MeshBasicMaterial({ map: textureLoader.load(src) });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      if (resizeRendererToDisplaySize()) {
        // Call this when the renderer needs resizing
        renderer.render(scene, camera);
      }
      mesh.rotation.y += 0.01; // Rotate for effect
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeRendererToDisplaySize(); // Adjust the renderer on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose(); // Cleanup
    };
  }, [src]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ThreeDImage;







// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import img from "../../../../assets/BannerImages/BannerScrollImage/q.jpg";
// import { Button, Link } from "@nextui-org/react";
// import { NavLink } from "react-router-dom";
// const images = [img, img, img, img, img, img, img, img, img];
// const overView = [
//   {
//     _id: 1,
//     title: "Name",
//     number: "Hosain Ali",
//   },
//   {
//     _id: 2,
//     title: "Name",
//     number: "Hosain Ali",
//   },
//   {
//     _id: 3,
//     title: "projects",
//     number: "59+",
//   },
//   {
//     _id: 4,
//     title: "projects",
//     number: "59+",
//   },
//   {
//     _id: 5,
//     title: "projects",
//     number: "59+",
//   },
//   {
//     _id: 6,
//     title: "projects",
//     number: "59+",
//     image: img,
//   },
//   {
//     _id: 7,
//     title: "projects",
//     number: "59+",
//   },
//   {
//     _id: 8,
//     title: "projects",
//     number: "59+",
//   },
//   {
//     _id: 9,
//     title: "projects",
//     number: "59+",
//   },
// ];

// const Banner = ({ projectsRef }) => {
//   const controlsRow1 = useAnimation();
//   const controlsRow2 = useAnimation();

//   const scrollToProjects = () => {
//     projectsRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     const duration = 30;

//     controlsRow1.start({
//       y: ["0%", "-100%"],
//       transition: { repeat: Infinity, duration, ease: "linear" },
//     });

//     controlsRow2.start({
//       y: ["-100%", "0%"],
//       transition: { repeat: Infinity, duration, ease: "linear" },
//     });
//   }, [controlsRow1, controlsRow2]);

//   return (
//     <div
//       id="hero"
//       className="max-w-screen-2xl bg-primary text-secondary  h-[550px] mx-auto md:h-[300px] lg:h-[800px] flex md:flex-row flex-col items-center justify-between"
//     >
//       {/* Left Side Text Section */}
//       <div className="w-full md:w-1/2 p-10 md:text-start gap-4 text-center md:items-start flex flex-col items-center">
//         <h1 className="md:text-4xl lg:text-7xl text-xl font-semibold">
//           Hi, I’m Hosain, a Front-End Developer
//         </h1>
//         <p className="text-base md:text-xl">
//           I specialize in creating interactive and user-friendly web
//           applications.
//         </p>
//         <div className="flex gap-2">
//           <Button
//             className="rounded-none bg-secondary text-primary"
//             as={Link}
//             color="primary"
//             variant="flat"
//           >
//             <NavLink to="/contact">Contact</NavLink>
//           </Button>
//           <Button
//             onClick={scrollToProjects}
//             className="rounded-none bg-primary border-2 border-black text-secondary"
//             color="primary"
//             variant="flat"
//           >
//             Projects
//           </Button>
//         </div>
//       </div>

//       {/* Right Side Scrolling Images */}
//       <div className="md:w-1/2 shadow-2xl h-full flex gap-2 overflow-hidden relative">
//         <div className="relative w-full h-full">
//           {/* First Row (scrolls vertically) */}
//           <motion.div
//             className="flex flex-col gap-2 h-full w-full"
//             animate={controlsRow1}
//           >
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt="Scrolling"
//                 className="w-full h-auto hover:scale-95 transition-all brightness-90 hover:brightness-100 fill-slate-900 hover:opacity-100"
//               />
//             ))}
//             {/* <div>
//               {overView.map((item) => (
//                 <div className="w-full h-1/3 bg-black mt-2 flex items-center justify-center flex-col rounded-xl text-white" key={item._id}>
//                   <h1 className="text-4xl font-semibold">{item.title}</h1>
//                   <h1 className="text-4xl font-semibold">{item.number}</h1>
//                   <img src={item.image} />
//                 </div>
//               ))}-
//             </div> */}
//           </motion.div>
//         </div>

//         <div className="relative w-full h-full">
//           {/* Second Row (scrolls in the opposite direction) */}
//           <motion.div
//             className="flex flex-col gap-2 h-full w-full"
//             animate={controlsRow2}
//           >
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt="Scrolling"
//                 className="w-full h-auto hover:scale-95 transition-all brightness-90 hover:brightness-100 fill-slate-900 hover:opacity-100"
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// function Banner({projectsRef}) {
//   const scrollToProjects = () => {
//     projectsRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   return (
//     <div className="px-28 relative bg-green-700 py-28">
//       <div className=" w-full px-28 border-2 justify-center  p-10 md:text-start gap-4 text-center md:items-start flex flex-col items-center">
//          <h1 className="md:text-4xl lg:text-7xl text-xl font-semibold">
//            Hi, I’m Hosain, a Front-End Developer
//          </h1>
//          <p className="text-base md:text-xl">
//            I specialize in creating interactive and user-friendly web
//            applications.
//          </p>
//          <div className="flex gap-2">
//            <Button
//              className="rounded-none bg-secondary text-primary"
//              as={Link}
//              color="primary"
//              variant="flat"
//            >
//              <NavLink to="/contact">Contact</NavLink>
//            </Button>
//            <Button
//              onClick={scrollToProjects}
//              className="rounded-none bg-primary border-2 border-black text-secondary"
//              color="primary"
//              variant="flat"
//            >
//              Projects
//            </Button>
//          </div>
//          <div style={{
//            background: "rgba(155, 55, 77, 0.12",
//            borderRadius: "16px",
//            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//            backdropFilter: "blur(5px)",
//            WebkitBackdropFilter: "blur(5px)",
//            border: "1px solid rgba(155, 55, 77, 0.53)",
           
//          }} className="absolute top-0 left-0 w-full h-full"></div>
//        </div>
//     </div>
//   )
// }

// export default Banner