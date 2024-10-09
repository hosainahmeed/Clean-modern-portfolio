import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import img from "../../../../assets/BannerImages/BannerScrollImage/q.jpg";
import { Button, Link } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
const images = [img, img, img, img, img, img, img, img, img];
const overView = [
  {
    _id: 1,
    title: "Name",
    number: "Hosain Ali",
  },
  {
    _id: 2,
    title: "Name",
    number: "Hosain Ali",
  },
  {
    _id: 3,
    title: "projects",
    number: "59+",
  },
  {
    _id: 4,
    title: "projects",
    number: "59+",
  },
  {
    _id: 5,
    title: "projects",
    number: "59+",
  },
  {
    _id: 6,
    title: "projects",
    number: "59+",
    image: img,
  },
  {
    _id: 7,
    title: "projects",
    number: "59+",
  },
  {
    _id: 8,
    title: "projects",
    number: "59+",
  },
  {
    _id: 9,
    title: "projects",
    number: "59+",
  },
];

const Banner = ({ projectsRef }) => {
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const duration = 30;

    controlsRow1.start({
      y: ["0%", "-100%"],
      transition: { repeat: Infinity, duration, ease: "linear" },
    });

    controlsRow2.start({
      y: ["-100%", "0%"],
      transition: { repeat: Infinity, duration, ease: "linear" },
    });
  }, [controlsRow1, controlsRow2]);

  return (
    <div
      id="hero"
      className="max-w-screen-2xl bg-primary text-secondary  h-[550px] mx-auto md:h-[300px] lg:h-[800px] flex md:flex-row flex-col items-center justify-between"
    >
      {/* Left Side Text Section */}
      <div className="w-full md:w-1/2 p-10 md:text-start gap-4 text-center md:items-start flex flex-col items-center">
        <h1 className="md:text-4xl lg:text-7xl text-xl font-black">
          Hi, I’m Hosain, a Front-End Developer
        </h1>
        <p className="text-base md:text-xl">
          I specialize in creating interactive and user-friendly web
          applications.
        </p>
        <div className="flex gap-2">
          <Button
            className="rounded-none bg-secondary text-primary"
            as={Link}
            color="primary"
            variant="flat"
          >
            <NavLink to="/contact">Contact</NavLink>
          </Button>
          <Button
            onClick={scrollToProjects}
            className="rounded-none bg-primary border-2 border-black text-secondary"
            color="primary"
            variant="flat"
          >
            Projects
          </Button>
        </div>
      </div>

      {/* Right Side Scrolling Images */}
      <div className="md:w-1/2 shadow-2xl h-full flex gap-2 overflow-hidden relative">
        <div className="relative w-full h-full">
          {/* First Row (scrolls vertically) */}
          <motion.div
            className="flex flex-col gap-2 h-full w-full"
            animate={controlsRow1}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Scrolling"
                className="w-full h-auto hover:scale-95 transition-all brightness-90 hover:brightness-100 fill-slate-900 hover:opacity-100"
              />
            ))}
            {/* <div>
              {overView.map((item) => (
                <div className="w-full h-1/3 bg-black mt-2 flex items-center justify-center flex-col rounded-xl text-white" key={item._id}>
                  <h1 className="text-4xl font-black">{item.title}</h1>
                  <h1 className="text-4xl font-black">{item.number}</h1>
                  <img src={item.image} />
                </div>
              ))}-
            </div> */}
          </motion.div>
        </div>

        <div className="relative w-full h-full">
          {/* Second Row (scrolls in the opposite direction) */}
          <motion.div
            className="flex flex-col gap-2 h-full w-full"
            animate={controlsRow2}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Scrolling"
                className="w-full h-auto hover:scale-95 transition-all brightness-90 hover:brightness-100 fill-slate-900 hover:opacity-100"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
