import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const timeoutRef = useRef(null);
  const enlargeTimeoutRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsMoving(true);
      setIsEnlarged(false);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (enlargeTimeoutRef.current) clearTimeout(enlargeTimeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);

      enlargeTimeoutRef.current = setTimeout(() => {
        setIsEnlarged(true);
      }, 10);
    };

    const touchMove = (e) => {
      const touch = e.touches[0]; // Get the first touch point
      setMousePosition({
        x: touch.clientX,
        y: touch.clientY,
      });
      setIsMoving(true);
      setIsEnlarged(true); // Set enlarged to true immediately

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (enlargeTimeoutRef.current) clearTimeout(enlargeTimeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);

      // Removed the enlargement timeout
      // enlargeTimeoutRef.current = setTimeout(() => {
      //   setIsEnlarged(true);
      // }, 50); // This line has been removed
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("touchmove", touchMove); // Add touchmove event listener

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("touchmove", touchMove); // Clean up touchmove event listener
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (enlargeTimeoutRef.current) clearTimeout(enlargeTimeoutRef.current);
    };
  }, []);

  return (
    <motion.div
      id="cursor"
      className="fixed hidden md:block  -top-5 -left-5 rounded-full mix-blend-difference pointer-events-none bg-white z-[999]"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isMoving ? 0.5 : isEnlarged ? 1.5 : 1, // Changed from 1.5 to 1 for non-moving state
        width: isMoving ? "24px" : "48px",
        height: isMoving ? "24px" : "48px",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
    />
  );
}

export default Cursor;
