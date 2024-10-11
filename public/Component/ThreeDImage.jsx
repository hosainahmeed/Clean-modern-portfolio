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
