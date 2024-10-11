import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrambleText = (element, duration, speed, chars) => {
      const text = element.textContent;
      let scramble = "";
      let currentIndex = 0;

      const interval = setInterval(() => {
        scramble = text
          .split("")
          .map((char, index) => {
            if (index < currentIndex) {
              return char;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        element.textContent = scramble;
        currentIndex++;

        if (currentIndex > text.length) {
          clearInterval(interval);
        }
      }, speed);

      setTimeout(() => {
        clearInterval(interval);
        element.textContent = text;
      }, duration);
    };

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    scrambleText(textRef.current, 3000, 50, chars);

    const tl = gsap.timeline();
    tl.to(".loading-bar", {
      width: "100%",
      duration: 3,
      ease: "power2.inOut",
      onUpdate: () => {
        setProgress(Math.round(tl.progress() * 100));
      },
    })
      .to(
        ".loader-content",
        {
          color: "#1a1a1a",
          duration: 1,
          ease: "power2.inOut",
        },
        "-=1"
      )
      .to(".slice-top", {
        y: "-100%",
        duration: 1,
        ease: "expo.inOut",
      })
      .to(
        ".slice-bottom",
        {
          y: "100%",
          duration: 1,
          ease: "expo.inOut",
        },
        "-=1"
      )
      .to(
        loaderRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      );

    gsap.to(".bg-gradient", {
      backgroundPosition: "100% 100%",
      duration: 3,
      ease: "power2.inOut",
    });

    gsap.to(".rotate-text", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      <div className="slice-top absolute top-0 left-0 right-0 h-1/2 bg-gradient bg-[length:400%_400%] bg-[0%_0%]" style={{backgroundColor: "black"  }}></div>
      <div className="slice-bottom absolute bottom-0 left-0 right-0 h-1/2 bg-gradient bg-[length:400%_400%] bg-[0%_0%]" style={{
      backgroundColor: "black"}}></div>
      <div className="loader-content absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="relative">
          <h2 className="text-transparent text-nowrap text-[13vw] md:text-[10vw] lg:text-[8vw] font-light tracking-wide text-center transform -rotate-7 outline-none stroke-current rotate-text">
            Hosain ali
          </h2>
          <h1
            ref={textRef}
            className="absolute text-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl lg:text-5xl font-bold -rotate-7"
          >
            Hosain ali
          </h1>
        </div>
        <div className="relative w-4/5 md:w-2/3 lg:w-1/2 h-2 mt-8 bg-gray-300 rounded-full overflow-hidden">
          <div className="loading-bar absolute h-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full"></div>
        </div>
        <p className="mt-4 text-xl md:text-2xl font-semibold">{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;
